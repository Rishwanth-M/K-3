export default function FormSection({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-4 text-green-400">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}