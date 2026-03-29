import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import logo from "../assets/k3.png";
import { Link } from "react-router-dom";

export default function TownshipHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[140px] rounded-full top-[-150px]"></div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* 🔥 LOGO (SAME AS MAIN HERO) */}
        <motion.img
          src={logo}
          alt="Kreedentials Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-50 md:w-50 mx-auto mb-0"
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Bring Professional Sports Training to Your Community
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-6 text-sm md:text-lg"
        >
          Structured, safe, and scientifically designed programs that build
          strength, discipline, and confidence in children.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button as={Link} to="/signup">
  Enroll Now
</Button>

<Button as={Link} to="/contact" variant="outline">
  Book Demo
</Button>
        </motion.div>

      </div>
    </section>
  );
}