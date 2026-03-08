import { Link } from 'react-router-dom';
import AnimateIn from './AnimateIn';
import SectionHeader from './SectionHeader';

const SERVICES = [
  {
    slug: 'web-design',
    icon: 'ph-browser',
    color: '',
    title: 'Thiết kế Website chuyên nghiệp',
    desc: 'Xây dựng bộ mặt thương hiệu uy tín, chuẩn SEO, giao diện thích ứng mọi thiết bị. Tạo ấn tượng mạnh mẽ ngay từ cái nhìn đầu tiên.',
    features: ['Responsive Design', 'Chuẩn SEO On-page', 'Tốc độ tải tối ưu'],
  },
  {
    slug: 'web-app-development',
    icon: 'ph-code',
    color: 'cyan',
    title: 'Phát triển Web App theo yêu cầu',
    desc: 'Giải quyết các bài toán kinh doanh đặc thù với phần mềm nền tảng web linh hoạt, tốc độ cao. Tùy chỉnh 100% theo nhu cầu.',
    features: ['Kiến trúc Microservices', 'API RESTful / GraphQL', 'Real-time Processing'],
  },
  {
    slug: 'crm-system',
    icon: 'ph-users-three',
    color: 'emerald',
    title: 'Hệ thống CRM thông minh',
    desc: 'Quản lý tệp khách hàng, thấu hiểu hành vi, chăm sóc tự động và gia tăng tỷ lệ chốt đơn. Biến data thành doanh thu.',
    features: ['Lead Management', 'Marketing Automation', 'Analytics & Insights'],
  },
  {
    slug: 'erp-system',
    icon: 'ph-chart-pie-slice',
    color: 'amber',
    title: 'Hệ thống ERP quản trị tổng thể',
    desc: 'Kết nối xuyên suốt mọi phòng ban, kiểm soát nguồn lực và dữ liệu tập trung, chính xác đến từng con số.',
    features: ['Quản lý đa phòng ban', 'Báo cáo real-time', 'Tích hợp hệ thống'],
  },
  {
    slug: 'mobile-app',
    icon: 'ph-device-mobile',
    color: 'rose',
    title: 'Ứng dụng Mobile (Android & iOS)',
    desc: 'Đưa doanh nghiệp vào túi khách hàng mọi lúc mọi nơi, nâng cao lòng trung thành với thương hiệu.',
    features: ['Cross-platform (Flutter)', 'Push Notification', 'Offline Support'],
  },
  {
    slug: 'system-maintenance',
    icon: 'ph-shield-check',
    color: 'violet',
    title: 'Bảo trì & Nâng cấp hệ thống',
    desc: 'Đồng hành dài hạn, đảm bảo hệ thống vận hành trơn tru, bảo mật dữ liệu tuyệt đối và dễ dàng mở rộng khi doanh nghiệp lớn mạnh.',
    features: ['Monitoring 24/7', 'Security Audit', 'Performance Tuning'],
  },
];

function ServiceCard({ slug, icon, color, title, desc, features, delay }) {
  return (
    <AnimateIn delay={delay}>
      <article className="service-card">
        <div className={`service-card__icon${color ? ` service-card__icon--${color}` : ''}`}>
          <i className={`ph ${icon}`} />
          <div className="service-card__icon-glow" />
        </div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{desc}</p>
        <ul className="service-card__features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <Link to={`/services/${slug}`} className="service-card__link">
          Tìm hiểu thêm <i className="ph ph-arrow-right" />
        </Link>
      </article>
    </AnimateIn>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader
          tag="Dịch vụ"
          title={<>Hệ sinh thái giải pháp <span className="text-gradient">toàn diện</span></>}
          desc="Từ ý tưởng đến sản phẩm hoàn chỉnh — chúng tôi cung cấp đầy đủ các dịch vụ để doanh nghiệp bạn tự tin bước vào kỷ nguyên số."
        />
        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={(i % 3) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
