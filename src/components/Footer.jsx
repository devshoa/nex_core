import { useState } from 'react';
import AnimateIn from './AnimateIn';
import Logo from './Logo';

const SERVICE_OPTIONS = [
  { value: '', label: '-- Chọn dịch vụ --' },
  { value: 'website', label: 'Thiết kế Website' },
  { value: 'webapp', label: 'Phát triển Web App' },
  { value: 'crm', label: 'Hệ thống CRM' },
  { value: 'erp', label: 'Hệ thống ERP' },
  { value: 'mobile', label: 'Ứng dụng Mobile' },
  { value: 'maintenance', label: 'Bảo trì & Nâng cấp' },
  { value: 'other', label: 'Khác' },
];

const FOOTER_LINKS = [
  'Thiết kế Website',
  'Phát triển Web App',
  'Hệ thống CRM',
  'Hệ thống ERP',
  'Ứng dụng Mobile',
];

const initialForm = { fullName: '', phone: '', email: '', company: '', service: '', message: '' };

export default function Footer() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle'); // idle | sending | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = true;
    if (!form.phone.trim() || !/^[0-9\s\-+]{9,15}$/.test(form.phone.trim())) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitState('sending');

    // In production, replace with actual API call
    setTimeout(() => {
      setSubmitState('sent');
      setTimeout(() => {
        setForm(initialForm);
        setSubmitState('idle');
      }, 3000);
    }, 1500);
  }

  const btnContent = {
    idle: <><i className="ph ph-paper-plane-tilt" /> Gửi yêu cầu tư vấn</>,
    sending: <><i className="ph ph-circle-notch spinning" /> Đang gửi...</>,
    sent: <><i className="ph ph-check-circle" /> Đã gửi thành công!</>,
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">
          {/* Contact Form */}
          <AnimateIn>
            <div className="footer__form-wrapper">
              <h2 className="footer__form-title">
                Nhận tư vấn <span className="text-gradient">miễn phí</span>
              </h2>
              <p className="footer__form-desc">Để lại thông tin, chúng tôi sẽ liên hệ bạn trong vòng 24 giờ.</p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__group">
                  <label htmlFor="fullName" className="contact-form__label">Họ và tên <span>*</span></label>
                  <input
                    type="text" id="fullName" name="fullName"
                    className={`contact-form__input${errors.fullName ? ' error' : ''}`}
                    placeholder="Nguyễn Văn A"
                    value={form.fullName} onChange={handleChange}
                    maxLength={100} required
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="phone" className="contact-form__label">Số điện thoại <span>*</span></label>
                    <input
                      type="tel" id="phone" name="phone"
                      className={`contact-form__input${errors.phone ? ' error' : ''}`}
                      placeholder="0383 274 189"
                      value={form.phone} onChange={handleChange}
                      maxLength={15} required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">Email</label>
                    <input
                      type="email" id="email" name="email"
                      className="contact-form__input"
                      placeholder="email@company.com"
                      value={form.email} onChange={handleChange}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="company" className="contact-form__label">Tên công ty</label>
                  <input
                    type="text" id="company" name="company"
                    className="contact-form__input"
                    placeholder="Công ty ABC"
                    value={form.company} onChange={handleChange}
                    maxLength={100}
                  />
                </div>

                <div className="contact-form__group">
                  <label htmlFor="service" className="contact-form__label">Dịch vụ quan tâm</label>
                  <select
                    id="service" name="service"
                    className="contact-form__input contact-form__select"
                    value={form.service} onChange={handleChange}
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message" className="contact-form__label">Mô tả nhu cầu</label>
                  <textarea
                    id="message" name="message"
                    className="contact-form__input contact-form__textarea"
                    placeholder="Hãy mô tả sơ bộ nhu cầu của bạn..."
                    rows={4} value={form.message} onChange={handleChange}
                    maxLength={1000}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn--primary btn--lg btn--full${submitState === 'sent' ? ' btn--success' : ''}`}
                  disabled={submitState !== 'idle'}
                >
                  {btnContent[submitState]}
                </button>
                <p className="contact-form__note">Chúng tôi cam kết bảo mật thông tin của bạn.</p>
              </form>
            </div>
          </AnimateIn>

          {/* Footer Info */}
          <AnimateIn delay={100}>
            <div className="footer__info">
              <div className="footer__brand">
                <a href="#" className="navbar__logo">
                  <span className="logo__icon"><Logo /></span>
                  <span className="logo__text">Nex<span className="logo__accent">Core</span></span>
                </a>
                <p className="footer__brand-desc">Đối tác chuyển đổi số đáng tin cậy cho doanh nghiệp Việt Nam.</p>
              </div>

              <div className="footer__contact-info">
                <h3 className="footer__info-title">Liên hệ trực tiếp</h3>
                <ul className="footer__contact-list">
                  <li>
                    <i className="ph ph-phone" />
                    <div>
                      <a href="tel:0383274189">0383 274 189</a>
                      <a href="tel:0334097079">0334 097 079</a>
                    </div>
                  </li>
                  <li>
                    <i className="ph ph-chat-circle-dots" />
                    <div>
                      <span>Zalo: <a href="https://zalo.me/0383274189">0383 274 189</a></span>
                      <span>Zalo: <a href="https://zalo.me/0334097079">0334 097 079</a></span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="footer__links">
                <h3 className="footer__info-title">Dịch vụ</h3>
                <ul>
                  {FOOTER_LINKS.map((link) => (
                    <li key={link}><a href="#services">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 NexCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
