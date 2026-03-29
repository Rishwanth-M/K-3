export default function Heading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}