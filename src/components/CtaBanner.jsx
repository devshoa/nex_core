import AnimateIn from './AnimateIn';

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="cta-section__bg">
        <div className="cta-section__glow" />
      </div>
      <div className="container">
        <AnimateIn>
          <div className="cta-section__inner">
            <h2 className="cta-section__title">
              Đừng để doanh nghiệp <span className="text-gradient">tụt lại phía sau!</span>
            </h2>
            <p className="cta-section__desc">
              Bắt đầu cuộc đua chuyển đổi số ngay hôm nay. Mỗi ngày chậm trễ là một ngày đối thủ tiến xa hơn bạn.
            </p>
            <a href="#contact" className="btn btn--primary btn--xl">
              <i className="ph ph-phone" />
              Nhận tư vấn miễn phí ngay
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
