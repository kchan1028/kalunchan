import { useEffect } from 'react';

// Matches the pinned layout in writing-journey.css. Anywhere else the journey is a plain document and GSAP is never downloaded.
const ROOMY = '(min-width: 68.75rem) and (min-height: 42.5rem) and (prefers-reduced-motion: no-preference)';

// Scroll-linked detail on top of the CSS-sticky field: figures draw, numbers drift, rows rule in. Pinning itself needs no JS.
export default function useJourneyMotion(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const roomy = matchMedia(ROOMY);
    let mm;
    let gone = false;

    const start = async () => {
      if (mm || !roomy.matches) return;
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (gone || mm) return;
      gsap.registerPlugin(ScrollTrigger);
      mm = gsap.matchMedia();
      mm.add(ROOMY, () => {
        root.dataset.gsap = 'on';
        gsap.fromTo(root.querySelector('.jrny__progress'), { scaleX: 0 }, {
          scaleX: 1, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom bottom', scrub: true },
        });
        root.querySelectorAll('.jrny-act').forEach((act) => {
          gsap.fromTo(act.querySelector('.jrny-panel__no'), { y: 60 }, {
            y: -60, ease: 'none', scrollTrigger: { trigger: act, start: 'top bottom', end: 'bottom top', scrub: true },
          });
          const figure = { trigger: act, start: 'top 45%', end: 'bottom bottom', scrub: true };
          const line = act.querySelector('.jrny-fig__line');
          if (line) {
            gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: figure });
            gsap.fromTo(act.querySelectorAll('.jrny-fig__fill'), { scale: 0 }, { scale: 1, stagger: 1, ease: 'none', scrollTrigger: figure });
          }
          act.querySelectorAll('.jrny-post').forEach((post, i) => {
            const enter = { trigger: post, start: 'top bottom', end: 'top 62%', scrub: true };
            gsap.fromTo(post.querySelector('.jrny-post__rule'), { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: enter });
            gsap.fromTo(post.querySelector('.jrny-post__link'), { y: 24 + i * 16 }, { y: 0, ease: 'none', scrollTrigger: enter });
          });
        });
        return () => {
          delete root.dataset.gsap;
        };
      });
      // Text metrics shift when the variable fonts land, which moves every trigger.
      document.fonts?.ready.then(() => {
        if (!gone) ScrollTrigger.refresh();
      });
    };

    roomy.addEventListener('change', start);
    start();
    return () => {
      gone = true;
      roomy.removeEventListener('change', start);
      mm?.revert();
    };
  }, [ref]);
}
