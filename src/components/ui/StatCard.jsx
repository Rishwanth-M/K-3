import { motion } from "framer-motion";

export default function StatCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden group"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-green-500/10 blur-xl"></div>

      <div className="relative z-10">
        <Icon className="w-8 h-8 text-green-400 mb-4" />

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}