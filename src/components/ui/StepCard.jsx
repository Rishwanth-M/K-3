import { motion } from "framer-motion";

export default function StepCard({ icon: Icon, step, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Icon Circle */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500/20 border border-green-400/30 mb-4">
        <Icon className="text-green-400 w-7 h-7" />
      </div>

      {/* Step Number */}
      <p className="text-green-400 text-sm mb-1">{step}</p>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}