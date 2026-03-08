import AnimateIn from './AnimateIn';
import SectionHeader from './SectionHeader';

const STORIES = [
  {
    industry: 'Retail & distribution',
    title: 'Chuẩn hóa quy trình sales, kho và hậu mãi cho chuỗi phân phối đa chi nhánh.',
    desc: 'Từ dữ liệu phân tán qua nhiều file và nhóm chat, doanh nghiệp gom toàn bộ pipeline, đơn hàng và SLA hỗ trợ về cùng một hệ thống điều hành.',
    metrics: ['-38% thời gian xử lý đơn', '+24% tốc độ follow-up lead', '1 dashboard cho toàn bộ chi nhánh'],
  },
  {
    industry: 'Healthcare operations',
    title: 'Xây cổng nội bộ và mobile workflow cho đội ngũ vận hành hiện trường.',
    desc: 'Thiết kế luồng xử lý mobile-first để kỹ thuật viên cập nhật trạng thái, ảnh, checklist và biên bản ngay tại điểm dịch vụ.',
    metrics: ['Realtime status update', '-42% thao tác nhập liệu lặp', 'Audit trail rõ theo từng vai trò'],
  },
  {
    industry: 'B2B services',
    title: 'Thiết lập CRM + executive reporting cho đội tăng trưởng và ban điều hành.',
    desc: 'Pipeline, campaign source, customer timeline và cảnh báo SLA được đồng bộ để lãnh đạo có thể ra quyết định trên dữ liệu thay vì cảm tính.',
    metrics: ['360-degree customer view', '+31% độ chính xác forecast', 'Roadmap triển khai theo sprint'],
  },
];

export default function Customers() {
  return (
    <section className="customers" id="customers">
      <div className="container">
        <SectionHeader
          tag="Case Studies"
          title={<>Một vài mô hình triển khai <span className="text-gradient">đại diện cho cách NexCore tạo giá trị</span></>}
          desc="Không sao chép template cho mọi doanh nghiệp. Mỗi dự án đều được thiết kế theo quy trình, dữ liệu và điểm nghẽn thực tế của đội ngũ sử dụng."
        />

        <div className="customers__grid">
          {STORIES.map((story, index) => (
            <AnimateIn key={story.title} delay={index * 100}>
              <article className="customer-card">
                <span className="customer-card__industry">{story.industry}</span>
                <h3 className="customer-card__title">{story.title}</h3>
                <p className="customer-card__desc">{story.desc}</p>

                <ul className="customer-card__metrics">
                  {story.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>

                <a href="#contact" className="customer-card__link">
                  Thảo luận case tương tự <i className="ph ph-arrow-right" />
                </a>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
