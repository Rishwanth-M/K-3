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
      title: "Data-Driven Insights",
      description:
        "Track strength, endurance, and mobility with measurable data.",
    },
    {
      icon: Activity,
      title: "Visible Growth Metrics",
      description:
        "Parents and children can clearly see performance improvements.",
    },
    {
      icon: LineChart,
      title: "Quarterly Progress Reports",
      description:
        "Structured assessments ensure continuous development.",
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description:
        "Leaderboards and points keep children motivated and engaged.",
    },
  ];

  return (
    <SectionWrapper>

      <Heading
        title="Built to Measure Progress"
        subtitle="Scientific tracking and performance-based growth"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>

    </SectionWrapper>
  );
}