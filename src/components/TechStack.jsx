import AnimateIn from './AnimateIn';
import SectionHeader from './SectionHeader';

const TECH_GROUPS = [
  {
    icon: 'ph-monitor',
    title: 'Frontend – Giao diện mượt mà',
    items: [
      { name: 'ReactJS', desc: 'UI Components', color: '#61DAFB' },
      { name: 'Vue.js', desc: 'Progressive Framework', color: '#42b883' },
      { name: 'TailwindCSS', desc: 'Utility-first CSS', color: '#38bdf8' },
      { name: 'TypeScript', desc: 'Type Safety', color: '#3178c6' },
    ],
  },
  {
    icon: 'ph-hard-drives',
    title: 'Backend – Xử lý mạnh mẽ',
    items: [
      { name: 'Java', desc: 'Enterprise Grade', color: '#e76f00' },
      { name: 'Spring Boot', desc: 'Microservices', color: '#6DB33F' },
      { name: 'Node.js', desc: 'Runtime Engine', color: '#68A063' },
      { name: 'PostgreSQL', desc: 'Database', color: '#336791' },
    ],
  },
  {
    icon: 'ph-cloud',
    title: 'Mobile & DevOps',
    items: [
      { name: 'Flutter', desc: 'Cross-platform', color: '#027DFD' },
      { name: 'Docker', desc: 'Containerization', color: '#2496ED' },
      { name: 'AWS', desc: 'Cloud Platform', color: '#FF9900' },
      { name: 'CI/CD', desc: 'Automation', color: '#F05032' },
    ],
  },
];

function TechIcon({ name, color }) {
  const initial = name.charAt(0);
  return (
    <div className="tech__item-icon">
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke={color} strokeWidth="1.5" />
        <text x="20" y="25" textAnchor="middle" fill={color} fontSize="14" fontWeight="bold">
          {initial}
        </text>
      </svg>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="tech" id="tech">
      <div className="container">
        <SectionHeader
          tag="Công nghệ"
          title={<>Nền tảng công nghệ <span className="text-gradient">hiện đại &amp; mạnh mẽ</span></>}
          desc="Chúng tôi lựa chọn những công nghệ hàng đầu thế giới, đảm bảo sản phẩm có tính mở rộng cao, bảo mật tốt và hiệu năng vượt trội."
        />

        <div className="tech__showcase">
          {TECH_GROUPS.map((group, gi) => (
            <AnimateIn key={group.title} delay={gi * 100}>
              <div className="tech__group">
                <h3 className="tech__group-title">
                  <i className={`ph ${group.icon}`} />
                  {group.title}
                </h3>
                <div className="tech__items">
                  {group.items.map((item) => (
                    <div className="tech__item" key={item.name}>
                      <TechIcon name={item.name} color={item.color} />
                      <span className="tech__item-name">{item.name}</span>
                      <span className="tech__item-desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
