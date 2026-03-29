import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";

export default function PricingCard() {
  const features = [
    "6 training sessions per week",
    "Certified professional coaches",
    "Structured training modules",
    "Performance tracking reports",
    "Progress monitoring system",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative max-w-xl mx-auto p-8 rounded-3xl border border-green-400/20 bg-white/5 backdrop-blur-lg text-center overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-green-500/10 blur-3xl opacity-30"></div>

      <div className="relative z-10">

        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          K3 Program
        </h3>

        <p className="text-gray-400 mb-6">
          Complete athlete development system
        </p>

        {/* Price */}
        <div className="text-4xl md:text-5xl font-extrabold text-green-400 mb-6">
          ₹12,000
          <span className="text-base text-gray-400 font-normal">
            /month
          </span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8 text-left">
          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
              <Check className="text-green-400 w-5 h-5" />
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button>Book Demo</Button>
          <Button variant="outline">Contact Us</Button>
        </div>

        {/* Small Note */}
        <p className="text-xs text-gray-500 mt-4">
          Limited slots available • Discounts for long-term plans
        </p>

      </div>
    </motion.div>
  );
}