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
import { useSEO } from '../hooks/useSEO';

export default function HomePage() {
  const location = useLocation();

  useSEO({
    title: 'NexCore – Giải Pháp Phần Mềm Chuyên Nghiệp | Chuyển Đổi Số Doanh Nghiệp',
    description:
      'NexCore – Giải pháp phần mềm chuyên nghiệp: Thiết kế Website, Web App, CRM, ERP, Mobile App. Bứt phá kinh doanh & tối ưu vận hành với công nghệ hiện đại.',
  });

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
