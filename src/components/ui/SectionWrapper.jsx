export default function SectionWrapper({ children, className = "", id }) {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-6 section-padding relative ${className}`}
    >
      {children}
    </section>
  );
}