import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import StepCard from "../components/ui/StepCard";

import {
  PlayCircle,
  UserPlus,
  CalendarCheck,
  BarChart,
} from "lucide-react";

export default function Steps() {
  const steps = [
    {
      icon: PlayCircle,
      step: "01",
      title: "Step Into the Experience",
      description:
        "Begin with a guided introduction where children explore movement, energy, and the Kreedentials environment.",
    },
    {
      icon: UserPlus,
      step: "02",
      title: "Commit to the Journey",
      description:
        "Enrollment marks the start of consistency, structure, and a mindset built on discipline and growth.",
    },
    {
      icon: CalendarCheck,
      step: "03",
      title: "Train with Purpose",
      description:
        "Weekly sessions focused on building strength, coordination, and resilience through structured training.",
    },
    {
      icon: BarChart,
      step: "04",
      title: "Track Real Progress",
      description:
        "Measured growth through performance insights, helping every child evolve with clarity and confidence.",
    },
  ];

  return (
    <SectionWrapper id="steps">
      <Heading
        title="A Journey of Growth and Discipline"
        subtitle="From first step to real progress — every stage is designed with purpose"
      />

      <div className="relative">
        {/* LINE (desktop) */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-white/10"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {steps.map((item, i) => (
            <StepCard key={i} {...item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}