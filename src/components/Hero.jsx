import AnimateIn from './AnimateIn';
import { useCountUp } from '../hooks/useAnimations';

function Stat({ target, suffix, label }) {
  const [ref, count] = useCountUp(target);
  return (
    <div className="hero__stat" ref={ref}>
      <div className="hero__stat-value">
        <span className="hero__stat-number">{count}</span>
        <span className="hero__stat-suffix">{suffix}</span>
      </div>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        <AnimateIn direction="up">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Giải pháp chuyển đổi số hàng đầu
            </div>

            <h1 className="hero__title">
              Bứt phá kinh doanh –<br />
              <span className="hero__title-gradient">Tối ưu vận hành</span> với<br />
              giải pháp phần mềm chuyên nghiệp
            </h1>

            <p className="hero__subtitle">
              Trong kỷ nguyên số, một nền tảng công nghệ vững chắc chính là{' '}
              <strong>"đòn bẩy"</strong> giúp doanh nghiệp bứt tốc, vượt mặt đối thủ
              và quản trị toàn diện. Bạn đã sẵn sàng để số hóa quy trình vận hành?
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                <i className="ph ph-rocket-launch" />
                Bắt đầu dự án ngay
              </a>
              <a href="#services" className="btn btn--outline btn--lg">
                <i className="ph ph-arrow-down" />
                Khám phá dịch vụ
              </a>
            </div>

            <div className="hero__stats">
              <Stat target={50} suffix="+" label="Dự án hoàn thành" />
              <div className="hero__stat-divider" />
              <Stat target={40} suffix="%" label="Tiết kiệm chi phí" />
              <div className="hero__stat-divider" />
              <Stat target={24} suffix="/7" label="Hỗ trợ kỹ thuật" />
            </div>
          </div>
        </AnimateIn>

        <AnimateIn direction="left" delay={200}>
          <div className="hero__code-window">
            <div className="code-window__header">
              <div className="code-window__dots">
                <span /><span /><span />
              </div>
              <span className="code-window__title">nexcore.solution.ts</span>
            </div>
            <div className="code-window__body">
              <pre>
                <code>
{`const `}<span className="code-var">solution</span>{` = {
  `}<span className="code-key">name</span>{`: `}<span className="code-str">"NexCore"</span>{`,
  `}<span className="code-key">mission</span>{`: `}<span className="code-str">"Chuyển đổi số"</span>{`,
  `}<span className="code-key">tech</span>{`: [
    `}<span className="code-str">"React"</span>{`, `}<span className="code-str">"Spring Boot"</span>{`,
    `}<span className="code-str">"Vue.js"</span>{`, `}<span className="code-str">"Flutter"</span>{`
  ],
  `}<span className="code-key">deliver</span>{`: () => {
    return `}<span className="code-str">"Excellence"</span>{` `}<span className="code-comment">✨</span>{`
  }
};`}
                </code>
              </pre>
            </div>
          </div>
        </AnimateIn>
      </div>

      <div className="hero__scroll">
        <a href="#services" className="hero__scroll-btn" aria-label="Cuộn xuống">
          <i className="ph ph-caret-double-down" />
        </a>
      </div>
    </section>
  );
}
