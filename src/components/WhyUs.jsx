import AnimateIn from './AnimateIn';
import SectionHeader from './SectionHeader';

const VALUES = [
  {
    number: '01',
    icon: 'ph-lightning',
    title: 'Tối ưu hóa quy trình',
    desc: 'Triệt tiêu sai sót từ thao tác thủ công, tự động hóa vận hành doanh nghiệp với hệ thống thông minh.',
  },
  {
    number: '02',
    icon: 'ph-currency-circle-dollar',
    title: 'Tiết kiệm 40% chi phí',
    desc: 'Cắt giảm đáng kể thời gian và chi phí vận hành nhờ số hóa toàn bộ quy trình kinh doanh cốt lõi.',
  },
  {
    number: '03',
    icon: 'ph-chart-line-up',
    title: 'Báo cáo trực quan',
    desc: 'Số liệu minh bạch, dashboard trực quan hỗ trợ ban lãnh đạo ra quyết định tức thời, chính xác.',
  },
  {
    number: '04',
    icon: 'ph-flow-arrow',
    title: 'Quy trình chuyên nghiệp',
    desc: 'Rõ ràng từng bước: Khảo sát → Phân tích → Thiết kế UI/UX → Phát triển → Testing → Triển khai & Đào tạo.',
  },
];

const PROCESS_STEPS = [
  { icon: 'ph-magnifying-glass', label: 'Khảo sát' },
  { icon: 'ph-brain', label: 'Phân tích' },
  { icon: 'ph-figma-logo', label: 'Thiết kế UI/UX' },
  { icon: 'ph-code', label: 'Phát triển' },
  { icon: 'ph-bug', label: 'Testing' },
  { icon: 'ph-rocket', label: 'Triển khai & Đào tạo' },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <SectionHeader
          tag="Giá trị"
          title={<>Vì sao doanh nghiệp <span className="text-gradient">tin tưởng chúng tôi?</span></>}
          desc="Không chỉ là nhà cung cấp công nghệ, chúng tôi là đối tác chiến lược đồng hành cùng sự phát triển bền vững của doanh nghiệp bạn."
        />

        <div className="why-us__grid">
          {VALUES.map((v, i) => (
            <AnimateIn key={v.number} delay={i * 100}>
              <div className="value-card">
                <div className="value-card__number">{v.number}</div>
                <div className="value-card__icon"><i className={`ph ${v.icon}`} /></div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div className="process">
            <h3 className="process__title">Quy trình triển khai dự án</h3>
            <div className="process__timeline">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.label} style={{ display: 'contents' }}>
                  <div className="process__step">
                    <div className="process__step-icon"><i className={`ph ${step.icon}`} /></div>
                    <span className="process__step-label">{step.label}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && <div className="process__connector" />}
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
