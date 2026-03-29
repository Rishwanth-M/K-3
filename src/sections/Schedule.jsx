import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";

export default function Schedule() {
  const days = [
    { day: "Monday", activity: "Mobility" },
    { day: "Tuesday", activity: "Mudgar" },
    { day: "Wednesday", activity: "Boxing" },
    { day: "Thursday", activity: "Mobility" },
    { day: "Friday", activity: "Mudgar" },
    { day: "Saturday", activity: "Boxing" },
  ];

  return (
    <SectionWrapper>
      <Heading
        title="Structured Weekly Routine"
        subtitle="Consistency and repetition are the foundation of real growth"
      />

      <div className="relative max-w-5xl mx-auto mt-12">

        {/* CONNECTING LINE (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">

          {days.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* CARD */}
              <div className="relative z-10 p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center transition duration-300 group-hover:-translate-y-2 group-hover:border-green-400 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">

                {/* DAY */}
                <p className="text-gray-400 text-xs md:text-sm tracking-wide">
                  {d.day}
                </p>

                {/* ACTIVITY */}
                <p className="text-green-400 font-semibold text-sm md:text-base mt-2">
                  {d.activity}
                </p>

                {/* DOT INDICATOR */}
                <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  );
}