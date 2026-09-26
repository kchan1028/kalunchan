import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Leadership from './pages/Leadership';
import Experience from './pages/Experience';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import Mentorship from './pages/Mentorship';
import Community from './pages/Community';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="community" element={<Community />} />
        <Route path="mentorship" element={<Mentorship />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Work />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="experience" element={<Experience />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
