export default function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <input
        type="text"
        placeholder="Search coaches..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl 
                   bg-white/5 border border-white/10 
                   backdrop-blur-xl text-sm
                   focus:border-green-400 outline-none"
      />
    </div>
  );
}