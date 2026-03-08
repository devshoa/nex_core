import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import WhyUs from '../components/WhyUs';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function HomePage() {
  const location = useLocation();

  // Scroll to a section if navigated here with state (e.g., from a service detail page)
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }, 200);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <WhyUs />
      <CtaBanner />
      <Footer />
      <BackToTop />
    </>
  );
}
