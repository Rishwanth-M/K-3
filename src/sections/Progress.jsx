import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import StatCard from "../components/ui/StatCard";

import {
  BarChart3,
  Activity,
  Trophy,
  LineChart,
} from "lucide-react";

export default function Progress() {
  const stats = [
    {
      icon: BarChart3,
      title: "Clarity Through Tracking",
      description:
        "Every child’s journey is measured — making growth visible, structured, and easy to understand.",
    },
    {
      icon: Activity,
      title: "Real, Visible Improvement",
      description:
        "From strength to movement, progress is something both children and parents can clearly see.",
    },
    {
      icon: LineChart,
      title: "Structured Growth System",
      description:
        "Regular assessments ensure consistent development, not random effort.",
    },
    {
      icon: Trophy,
      title: "Motivation Through Milestones",
      description:
        "Achievements, levels, and recognition keep children engaged and driven to improve.",
    },
  ];

  return (
    <SectionWrapper>

      <Heading
        title="Growth You Can See. Progress You Can Trust."
        subtitle="Kreedentials combines structure, tracking, and motivation to ensure every child keeps improving"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>

    </SectionWrapper>
  );
}