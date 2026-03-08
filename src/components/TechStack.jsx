import { Link } from 'react-router-dom';
import AnimateIn from './AnimateIn';
import SectionHeader from './SectionHeader';

const PROJECTS = [
  {
    slug: 'erp-system',
    category: 'Manufacturing Ops',
    title: 'Hệ thống quản lý sản xuất cho doanh nghiệp',
    desc: 'Nền tảng điều phối kế hoạch sản xuất, BOM, tiến độ lệnh và dashboard vận hành thời gian thực cho doanh nghiệp có nhiều dây chuyền.',
    image: '/projects/manufacturing-preview.svg',
    imageAlt: 'Preview dashboard hệ thống quản lý sản xuất',
    accent: '#f59e0b',
  },
  {
    slug: 'web-app-development',
    category: 'Omnichannel Commerce',
    title: 'Website thương mại điện tử',
    desc: 'Website bán hàng tích hợp quản lý danh mục, giỏ hàng, thanh toán và điều phối đơn từ nhiều kênh cho thương hiệu bán lẻ.',
    image: '/projects/ecommerce-preview.svg',
    imageAlt: 'Preview giao diện website thương mại điện tử',
    accent: '#06b6d4',
  },
  {
    slug: 'crm-system',
    category: 'Sales CRM',
    title: 'CRM quản lý khách hàng',
    desc: 'Hệ thống tập trung lead, lịch sử chăm sóc, pipeline sales và báo cáo điều hành để đội kinh doanh làm việc trên cùng một nguồn dữ liệu.',
    image: '/projects/crm-preview.svg',
    imageAlt: 'Preview dashboard CRM quản lý khách hàng',
    accent: '#10b981',
  },
  {
    slug: 'mobile-app',
    category: 'Field Service Mobile',
    title: 'Ứng dụng mobile đặt dịch vụ',
    desc: 'Ứng dụng di động cho khách hàng đặt lịch, theo dõi trạng thái xử lý, thanh toán và nhận thông báo thời gian thực trên điện thoại.',
    image: '/projects/mobile-booking-preview.svg',
    imageAlt: 'Preview ứng dụng mobile đặt dịch vụ',
    accent: '#f43f5e',
  },
];

function ProjectThumbnail({ image, imageAlt, category, accent }) {
  return (
    <div className="project-card__thumbnail" style={{ '--project-accent': accent }}>
      <img className="project-card__thumbnail-image" src={image} alt={imageAlt} loading="lazy" />
      <div className="project-card__thumbnail-overlay">
        <span className="project-card__thumbnail-badge">Preview hệ thống</span>
        <span className="project-card__thumbnail-category">{category}</span>
      </div>
    </div>
  );
}

function ProjectCard({ slug, category, title, desc, delay, ...thumbnailProps }) {
  return (
    <AnimateIn delay={delay}>
      <article className="project-card">
        <ProjectThumbnail {...thumbnailProps} category={category} />

        <div className="project-card__body">
          <span className="project-card__category">{category}</span>
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__desc">{desc}</p>

          <Link to={`/services/${slug}`} className="btn btn--outline btn--sm project-card__button">
            Xem chi tiết <i className="ph ph-arrow-right" />
          </Link>
        </div>
      </article>
    </AnimateIn>
  );
}

export default function TechStack() {
  return (
    <section className="projects" id="tech">
      <div className="container">
        <SectionHeader
          tag="Dự án"
          title={<>Dự án tiêu biểu <span className="text-gradient">đã triển khai</span></>}
          desc="Case study được trình bày theo góc nhìn portfolio phần mềm: giao diện sản phẩm rõ ràng, mô tả ngắn gọn và tập trung vào bài toán doanh nghiệp."
        />

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={(index % 3) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
