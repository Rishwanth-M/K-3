import { motion } from "framer-motion";

export default function CoachesHero() {
  return (
    <section className="pt-28 pb-16 text-center relative">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Meet Our Coaches
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Certified professionals shaping future athletes through discipline, strength, and performance.
        </p>
      </motion.div>

    </section>
  );
}