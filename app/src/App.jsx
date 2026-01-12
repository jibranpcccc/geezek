import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import { WhatsAppButton, CookieConsent, ScrollProgress, BackToTop } from './components/UIEnhancements';

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;

