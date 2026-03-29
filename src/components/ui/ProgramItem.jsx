import { motion } from "framer-motion";

export default function ProgramItem({
  number,
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* BIG BACKGROUND NUMBER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 text-[100px] md:text-[180px] font-extrabold text-green-500 select-none pointer-events-none"
      >
        {number}
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative z-10"
      >
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-2xl object-cover w-full h-[260px] md:h-[340px] hover:scale-105 transition duration-500"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-xl relative z-10 text-center md:text-left"
      >
        <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </motion.div>
    </div>
  );
}