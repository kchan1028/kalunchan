import { Link } from 'react-router';
import { resumeRequest } from '../content/engineeringLeadership';
import { track } from '../track';
import { ArrowRight } from './Icons';

// One action and one anonymous event across the homepage, hiring page and footer.
export default function HiringContactLink({ className = 'action' }) {
  return (
    <Link to={resumeRequest} className={className} onClick={() => track('hiring_cta_click', resumeRequest)}>
      Talk about your engineering team <ArrowRight />
    </Link>
  );
}
