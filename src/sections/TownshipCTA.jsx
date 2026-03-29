import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";

export default function TownshipCTA() {
  return (
    <SectionWrapper className="text-center relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto"
      >

        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Bring Kreedentials to Your Community
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-300 mt-4 text-sm md:text-lg">
          Create a structured environment where children grow stronger,
          more disciplined, and confident — right within your township.
        </p>

        {/* TRUST LINE */}
        <p className="text-green-400 mt-3 text-sm">
          Limited slots • Structured program • Measurable results
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button>
            Book a Demo Session
          </Button>

          <Button variant="outline">
            Contact Us
          </Button>
        </div>

      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#02140f] to-transparent"></div>

    </SectionWrapper>
  );
}