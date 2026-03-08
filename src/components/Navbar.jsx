import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollspy } from '../hooks/useAnimations';
import Logo from './Logo';

const NAV_IDS = ['hero', 'services', 'tech', 'why-us', 'contact'];

const NAV_ITEMS = [
  { id: 'hero', label: 'Trang chủ' },
  { id: 'services', label: 'Dịch vụ' },
  { id: 'tech', label: 'Công nghệ' },
  { id: 'why-us', label: 'Vì sao chọn chúng tôi' },
  { id: 'contact', label: 'Liên hệ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isServicePage = location.pathname.startsWith('/services/');
  const scrollspyId = useScrollspy(isServicePage ? null : NAV_IDS);
  const activeId = isServicePage ? 'services' : scrollspyId;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep body scroll lock in sync with mobile menu state.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close mobile menu on route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  function scrollTo(id) {
    setMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <span className="logo__icon"><Logo /></span>
          <span className="logo__text">Nex<span className="logo__accent">Core</span></span>
        </a>

        <ul id="navbar-menu" className={`navbar__menu${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`navbar__link${activeId === item.id ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a
            href="#contact"
            className="btn btn--primary btn--sm"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            Nhận tư vấn
          </a>
          <button
            className={`navbar__toggle${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-controls="navbar-menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
