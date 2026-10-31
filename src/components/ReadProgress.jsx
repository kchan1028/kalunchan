import { useEffect, useRef, useState } from 'react';

// Which posts this browser has finished, for the reading paths on /writing/. Opt-in: nothing is stored until the reader
// asks, and the key existing is what records that they did. It's never sent anywhere. /privacy/ describes this, so keep
// the two in step.
const KEY = 'read-posts';

// The saved list, or null if the reader hasn't turned this on.
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(saved) ? new Set(saved) : null;
  } catch {
    return null;
  }
}

function save(read) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...read]));
    return true;
  } catch {
    return false;
  }
}

// Read after hydration, because the prerendered page knows nothing about this browser.
export function useReadPosts() {
  const [ready, setReady] = useState(false);
  const [read, setRead] = useState(null);
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    setRead(load());
    setReady(true);
  }, []);
  const remember = () => {
    const empty = new Set();
    if (save(empty)) setRead(empty);
    else setBlocked(true);
  };
  const forget = () => {
    try {
      localStorage.removeItem(KEY);
    } catch {
      // Nothing could have been stored in the first place.
    }
    setRead(null);
  };
  return { ready, read, blocked, remember, forget };
}

// Sits at the end of a post's body: reaching it counts as finishing the post, for a reader who turned this on.
export function ReadMarker({ slug }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const read = load();
      if (read) save(read.add(slug));
      io.disconnect();
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [slug]);
  return <span ref={ref} className="read-marker" aria-hidden="true" />;
}
