import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import FeatureCard from "../components/ui/FeatureCard";

import {
  Dumbbell,
  Brain,
  Trophy,
  Activity,
} from "lucide-react";

export default function Features() {
  const data = [
    {
      icon: Trophy,
      title: "Kreate. Kommit. Konquer.",
      description:
        "A philosophy that shapes how children think, act, and grow — from curiosity to commitment to real achievement.",
    },
    {
      icon: Dumbbell,
      title: "Sport as a Foundation",
      description:
        "We use sport to build strength, discipline, and confidence — creating individuals who are prepared for life, not just the field.",
    },
    {
      icon: Brain,
      title: "Mindset Over Moment",
      description:
        "Beyond performance, we develop focus, resilience, and consistency that stay with every child for years to come.",
    },
    {
      icon: Activity,
      title: "An Evolving Ecosystem",
      description:
        "From community programs to performance-driven apparel, Kreedentials is continuously building a complete growth environment.",
    },
  ];

  return (
    // Features.jsx
<SectionWrapper id="features">
      <Heading
        title="More Than Sport. A Foundation for Life."
        subtitle="Kreedentials is building an ecosystem where sport, mindset, and identity come together"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <FeatureCard {...item} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}