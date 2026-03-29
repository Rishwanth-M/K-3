export default function FormInput({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-300">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-white/5 border rounded-lg px-4 py-2 outline-none transition
          ${error ? "border-red-500" : "border-white/10 focus:border-green-400"}
        `}
      />

      {error && (
        <span className="text-red-400 text-xs">{error}</span>
      )}
    </div>
  );
}