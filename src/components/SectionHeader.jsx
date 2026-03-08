import AnimateIn from './AnimateIn';

export default function SectionHeader({ tag, title, desc }) {
  return (
    <AnimateIn>
      <div className="section-header">
        <span className="section-header__tag">{tag}</span>
        <h2 className="section-header__title">{title}</h2>
        <p className="section-header__desc">{desc}</p>
      </div>
    </AnimateIn>
  );
}
