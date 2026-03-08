import { useParams, useNavigate, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AnimateIn from '../components/AnimateIn';
import BackToTop from '../components/BackToTop';
import { SERVICE_MAP, SERVICES_LIST } from '../data/services';
import { useSEO } from '../hooks/useSEO';

// ── Feature Card ──────────────────────────────────────────────
function FeatureCard({ icon, title, desc, delay }) {
  return (
    <AnimateIn delay={delay}>
      <div className="sd-feature-card">
        <div className="sd-feature-card__icon">
          <i className={`ph ${icon}`} />
        </div>
        <h3 className="sd-feature-card__title">{title}</h3>
        <p className="sd-feature-card__desc">{desc}</p>
      </div>
    </AnimateIn>
  );
}

// ── Related Service Card ──────────────────────────────────────
function RelatedCard({ slug, icon, colorClass, title, tagline }) {
  return (
    <Link to={`/services/${slug}`} className="sd-related-card">
      <div className={`service-card__icon${colorClass ? ` service-card__icon--${colorClass}` : ''}`}>
        <i className={`ph ${icon}`} />
      </div>
      <h4 className="sd-related-card__title">{title}</h4>
      <p className="sd-related-card__desc">{tagline}</p>
      <span className="service-card__link">
        Tìm hiểu thêm <i className="ph ph-arrow-right" />
      </span>
    </Link>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICE_MAP[slug];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  useSEO({ title: service.metaTitle, description: service.metaDescription });

  const related = SERVICES_LIST.filter((s) => s.slug !== slug).slice(0, 3);

  function goToContact(e) {
    if (e) e.preventDefault();
    navigate('/', { state: { scrollTo: 'contact' } });
  }

  return (
    <>
      <Navbar />
      <main className="service-detail" style={{ '--sd-accent': service.accentColor }}>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="sd-hero">
          <div className="sd-hero__bg">
            <div className="sd-hero__glow" />
            <div className="hero__grid" />
          </div>
          <div className="container sd-hero__inner">
            <AnimateIn direction="up">
              {/* Breadcrumb */}
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Trang chủ</Link>
                <span className="breadcrumb__sep"><i className="ph ph-caret-right" /></span>
                <Link to="/" state={{ scrollTo: 'services' }}>Dịch vụ</Link>
                <span className="breadcrumb__sep"><i className="ph ph-caret-right" /></span>
                <span className="breadcrumb__current">{service.title}</span>
              </nav>

              {/* Icon */}
              <div className="sd-hero__icon">
                <i className={`ph ph-fill ${service.icon}`} />
              </div>

              <h1 className="sd-hero__title">{service.title}</h1>
              <p className="sd-hero__tagline">{service.tagline}</p>
              <p className="sd-hero__desc">{service.heroDescription}</p>

              <div className="sd-hero__actions">
                <button className="btn btn--primary btn--lg" onClick={goToContact}>
                  <i className="ph ph-phone" />
                  Liên hệ tư vấn ngay
                </button>
                <Link to="/" state={{ scrollTo: 'services' }} className="btn btn--outline btn--lg">
                  <i className="ph ph-arrow-left" />
                  Xem tất cả dịch vụ
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────── */}
        <section className="sd-section">
          <div className="container">
            <AnimateIn>
              <div className="section-header">
                <span className="section-header__tag">Tính năng</span>
                <h2 className="section-header__title">
                  Tính năng <span className="text-gradient">nổi bật</span>
                </h2>
                <p className="section-header__desc">
                  Mỗi tính năng được thiết kế có chủ đích, giải quyết trực tiếp bài toán thực tế của doanh nghiệp bạn.
                </p>
              </div>
            </AnimateIn>
            <div className="sd-features-grid">
              {service.features.map((f, i) => (
                <FeatureCard key={f.title} {...f} delay={(i % 3) * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────── */}
        <section className="sd-section sd-section--alt">
          <div className="container">
            <div className="sd-benefits">
              <AnimateIn direction="up">
                <div className="sd-benefits__content">
                  <span className="section-header__tag">Lợi ích</span>
                  <h2 className="sd-benefits__title">
                    Giá trị doanh nghiệp<br />
                    <span className="text-gradient">nhận được</span>
                  </h2>
                  <ul className="sd-benefits__list">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="sd-benefits__item">
                        <i className="ph ph-check-circle" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={200}>
                <div className="sd-stat-card">
                  <div className="sd-stat-card__icon">
                    <i className={`ph ${service.icon}`} />
                  </div>
                  <div className="sd-stat-card__title">{service.title}</div>
                  <div className="sd-stat-card__divider" />
                  <div className="sd-stat-card__items">
                    {service.benefits.slice(0, 3).map((b, i) => (
                      <div key={i} className="sd-stat-card__item">
                        <i className="ph ph-check" />
                        <span>{b.length > 60 ? b.substring(0, 57) + '...' : b}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn--primary btn--sm sd-stat-card__btn" onClick={goToContact}>
                    Tư vấn miễn phí <i className="ph ph-arrow-right" />
                  </button>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGIES ─────────────────────────────────── */}
        <section className="sd-section">
          <div className="container">
            <AnimateIn>
              <div className="section-header">
                <span className="section-header__tag">Công nghệ</span>
                <h2 className="section-header__title">
                  Công nghệ <span className="text-gradient">sử dụng</span>
                </h2>
                <p className="section-header__desc">
                  Lựa chọn công nghệ hàng đầu thế giới, đảm bảo sản phẩm mở rộng tốt, bảo mật cao và hiệu năng vượt trội.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="sd-tech-badges">
                {service.technologies.map((tech) => (
                  <span key={tech} className="sd-tech-badge">{tech}</span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────── */}
        <section className="sd-section sd-section--alt">
          <div className="container">
            <AnimateIn>
              <div className="section-header">
                <span className="section-header__tag">Quy trình</span>
                <h2 className="section-header__title">
                  Quy trình <span className="text-gradient">triển khai</span>
                </h2>
                <p className="section-header__desc">
                  Quy trình bài bản, minh bạch từng bước — bạn luôn biết dự án đang ở đâu và tiến đến đâu.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={100}>
              <div className="process">
                <div className="process__timeline">
                  {service.process.map((step, i) => (
                    <div key={step.label} style={{ display: 'contents' }}>
                      <div className="process__step">
                        <div className="process__step-icon sd-process__step-icon">
                          <i className={`ph ${step.icon}`} />
                        </div>
                        <span className="process__step-label">{step.label}</span>
                      </div>
                      {i < service.process.length - 1 && <div className="process__connector" />}
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── RELATED SERVICES ─────────────────────────────── */}
        <section className="sd-section">
          <div className="container">
            <AnimateIn>
              <div className="section-header">
                <span className="section-header__tag">Khám phá thêm</span>
                <h2 className="section-header__title">
                  Dịch vụ <span className="text-gradient">liên quan</span>
                </h2>
              </div>
            </AnimateIn>
            <div className="sd-related-grid">
              {related.map((s, i) => (
                <AnimateIn key={s.slug} delay={i * 100}>
                  <RelatedCard {...s} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="cta-section sd-cta">
          <div className="cta-section__bg">
            <div className="cta-section__glow" />
          </div>
          <div className="container">
            <AnimateIn>
              <div className="cta-section__inner">
                <h2 className="cta-section__title">
                  Sẵn sàng triển khai <span className="text-gradient">{service.title}?</span>
                </h2>
                <p className="cta-section__desc">
                  Đội ngũ chuyên gia luôn sẵn sàng lắng nghe và tư vấn giải pháp phù hợp nhất cho doanh nghiệp bạn.
                </p>
                <div className="sd-cta__actions">
                  <button className="btn btn--primary btn--xl" onClick={goToContact}>
                    <i className="ph ph-phone" />
                    Nhận tư vấn miễn phí
                  </button>
                  <Link to="/" state={{ scrollTo: 'services' }} className="btn btn--outline btn--xl">
                    <i className="ph ph-squares-four" />
                    Xem dịch vụ khác
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── MINI FOOTER ──────────────────────────────────── */}
        <div className="sd-footer">
          <div className="container sd-footer__inner">
            <span>&copy; 2026 NexCore. All rights reserved.</span>
            <div className="sd-footer__contact">
              <a href="tel:0383274189">
                <i className="ph ph-phone" /> 0383 274 189
              </a>
              <a href="https://zalo.me/0383274189">
                <i className="ph ph-chat-circle-dots" /> Zalo
              </a>
            </div>
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  );
}
