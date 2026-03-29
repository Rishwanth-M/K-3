import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" className="text-center">

      <Heading
        title="Invest in Strength. Discipline. Confidence."
        subtitle="A complete development system designed to shape your child’s future"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto mt-12"
      >
        {/* CARD */}
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-[0_0_40px_rgba(34,197,94,0.15)]">

          {/* BADGE */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs px-4 py-1 rounded-full font-semibold">
            Most Popular
          </div>

          {/* PRICE */}
          <h2 className="text-4xl font-bold text-green-400">
            ₹12,000
          </h2>
          <p className="text-gray-400 text-sm mt-1">per month</p>

          {/* VALUE LIST */}
          <div className="mt-6 space-y-3 text-left">
            <p className="text-gray-300 text-sm">✔ 6 structured training sessions/week</p>
            <p className="text-gray-300 text-sm">✔ Certified professional coaches</p>
            <p className="text-gray-300 text-sm">✔ Boxing, Mudgar & Mobility training</p>
            <p className="text-gray-300 text-sm">✔ Progress tracking & performance reports</p>
            <p className="text-gray-300 text-sm">✔ Safe, on-site township training</p>
          </div>

          {/* CTA */}
          <div className="mt-8">
  <Button as={Link} to="/contact" className="w-full">
    Book a Demo Session
  </Button>
</div>

          {/* NOTE */}
          <p className="text-xs text-gray-500 mt-4">
            Flexible plans available for long-term enrollment
          </p>
        </div>
      </motion.div>

    </SectionWrapper>
  );
}