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
      step: "Step 1",
      title: "Attend Demo Session",
      description:
        "Experience the program firsthand and understand the training approach.",
    },
    {
      icon: UserPlus,
      step: "Step 2",
      title: "Sign Up",
      description:
        "Register your child for structured weekly training sessions.",
    },
    {
      icon: CalendarCheck,
      step: "Step 3",
      title: "Weekly Training Begins",
      description:
        "Consistent sessions focused on strength, discipline, and growth.",
    },
    {
      icon: BarChart,
      step: "Step 4",
      title: "Receive Progress Reports",
      description:
        "Track development through structured performance assessments.",
    },
  ];

  return (
    <SectionWrapper id="steps">
      <Heading
        title="How It Works"
        subtitle="Simple steps to start your child’s athletic journey"
      />

      <div className="relative">
        {/* Line (desktop) */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-white/10"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {steps.map((item, i) => (
            <StepCard key={i} {...item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}