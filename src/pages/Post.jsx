import { Link, useParams } from 'react-router';
import { postBySlug } from '../content/writing';
import * as rememberEverything from '../content/posts/you-dont-need-to-remember-everything';
import * as berkeleyOmnium from '../content/posts/berkeley-omnium-new-website-next-generation';
import * as microservice from '../content/posts/should-it-be-a-microservice';
import * as priorities from '../content/posts/when-everything-is-a-priority';
import * as carryover from '../content/posts/what-sprint-carryover-is-telling-you';
import * as founderStory from '../content/posts/building-a-startup-from-idea-to-acquisition';
import * as stravaMcp from '../content/posts/connect-strava-to-claude-mcp';
import * as nobodyNeeded from '../content/posts/engineering-work-nobody-needed';
import TitleBlock from '../components/TitleBlock';
import NotFound from './NotFound';
import { ArrowLeft, ArrowRight } from '../components/Icons';

const bodies = {
  'you-dont-need-to-remember-everything': rememberEverything,
  'berkeley-omnium-new-website-next-generation': berkeleyOmnium,
  'should-it-be-a-microservice': microservice,
  'when-everything-is-a-priority': priorities,
  'what-sprint-carryover-is-telling-you': carryover,
  'building-a-startup-from-idea-to-acquisition': founderStory,
  'connect-strava-to-claude-mcp': stravaMcp,
  'engineering-work-nobody-needed': nobodyNeeded,
};

// Used when a post doesn't list its own related reading in writing.js.
const defaultRelated = [
  { to: '/leadership/', label: 'How I lead engineering teams' },
  { to: '/mentorship/', label: 'Mentoring engineers until they can replace me' },
  { to: '/projects/', label: 'Projects and case studies' },
];

export default function Post() {
  const { slug } = useParams();
  const post = postBySlug[slug];
  if (!post) return <NotFound />;
  const { default: Body, Closing, toc } = bodies[slug];
  const contents = post.faq ? [...toc, ['short-answers', 'Short answers']] : toc;

  return (
    <article className="post" aria-labelledby="post-title">
      <TitleBlock
        section="650"
        title="Writing"
        as="p"
        coord={`${post.no} · Writing`}
        cells={[
          { k: 'Topic', v: post.topics[0] },
          { k: 'Reading', v: `${post.minutes} min` },
        ]}
      />
      <header className="sheet grid case__head">
        <nav className="case__back">
          <Link to="/writing/" className="link-arrow">
            <ArrowLeft /> <span>All writing</span>
          </Link>
        </nav>
        <h1 id="post-title" className="post__title display">{post.title}</h1>
        <p className="case__claim">{post.dek}</p>
        <p className="case__domains label">By <Link to="/about/">Ka Lun Chan</Link> · {post.topics.join(' / ')}</p>
      </header>

      <div className="sheet grid post__body" data-coord={`${post.no} · Article`}>
        <nav className="case__toc" aria-label="In this article">
          <ol>
            {contents.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="post__prose">
          <Body />
          {post.faq && (
            <section id="short-answers" aria-labelledby="short-answers-h">
              <h2 id="short-answers-h" className="post__h2">Short answers</h2>
              <div className="post__faq">
                {post.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="post__h3">{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {Closing && (
        <section className="post__close on-blue" aria-labelledby="closing-h" data-coord={`${post.no} · Closing`}>
          <div className="sheet grid">
            <Closing />
          </div>
        </section>
      )}

      <nav className="sheet post__more" aria-label="Keep reading">
        <p className="label">Keep reading</p>
        <ul>
          {(post.related || defaultRelated).map((r) => (
            <li key={r.to}><Link to={r.to} className="link-arrow"><span>{r.label}</span> <ArrowRight /></Link></li>
          ))}
          <li><Link to="/writing/" className="link-arrow"><span>All writing</span> <ArrowRight /></Link></li>
        </ul>
      </nav>
    </article>
  );
}
