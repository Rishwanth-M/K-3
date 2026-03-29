import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function BenefitCard({ title, items }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-6">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
            <Check className="text-green-400 w-5 h-5 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}