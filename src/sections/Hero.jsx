import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16 bg-[#02140f]">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full top-[-120px] left-1/2 -translate-x-1/2"></div>

      {/* ================= MOBILE BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroImg}
          alt="Kreedentials Athletes"
          className="w-full h-full object-cover scale-110 translate-y-6 opacity-70"
        />
      </div>

      {/* MOBILE OVERLAY */}
      <div className="absolute inset-0 bg-[#02140f]/60 md:hidden"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-2xl w-full text-center md:text-left mx-auto md:mx-0">

        {/* BRAND TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide leading-tight">
            KREEDENTIALS
          </h1>

          <h3 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-green-400 tracking-wide">
            Kreate. Kommit. Konquer.
          </h3>
        </motion.div>

        {/* MAIN DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Kreedentials is building a powerful ecosystem where sport, learning,
          and character come together to shape confident, resilient, and
          future-ready individuals.
        </motion.p>

        {/* SECONDARY LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-green-400 text-sm sm:text-base"
        >
          From communities to apparel — we empower every child’s journey.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Button 
          as="a" 
          href="https://kreedentials.in/"
          target="_blank"
          rel="noopener noreferrer">
          Explore Our Merchandise
          </Button>

<Button as="a" href="#benefits" variant="outline">
  Our Vision
</Button>
        </motion.div>
      </div>

      {/* ================= DESKTOP IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:flex absolute right-0 bottom-0 h-full items-end pt-10 md:pt-16"
      >
        <img
          src={heroImg}
          alt="Kreedentials Athletes"
          className="h-full w-auto object-contain"
        />
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#02140f] to-transparent"></div>

      {/* SHADOW */}
      <div className="hidden md:block absolute bottom-6 right-24 w-[300px] h-[40px] bg-black/40 blur-2xl rounded-full"></div>

    </section>
  );
}