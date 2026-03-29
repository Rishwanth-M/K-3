import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import BenefitCard from "../components/ui/BenefitCard";

export default function Benefits() {
  const data = [
    {
      title: "For Children",
      items: [
        "Structured physical activity",
        "Development of athletic skills",
        "Improved confidence and discipline",
        "Reduced screen time",
        "Healthier lifestyle habits",
      ],
    },
    {
      title: "For Parents",
      items: [
        "Professional coaching within the township",
        "Time-saving convenience",
        "Measurable fitness progress reports",
        "Safe and structured training environment",
      ],
    },
    {
      title: "For Township",
      items: [
        "Enhanced community engagement",
        "Better use of clubhouse facilities",
        "Healthy and active lifestyle culture",
        "Unique sports offering for residents",
      ],
    },
  ];

  return (
    <SectionWrapper id="benefits">
  <Heading
    title="Why Choose KⅢ ?"
    subtitle="More Than Sport—A Movement for Children, Parents & Communities"
  />

  <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <p className="text-green-400 font-semibold text-sm mb-1">Discover Talent</p>
    <p className="text-gray-400 text-xs">
      Every child has an athlete within—we help bring it out.
    </p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <p className="text-green-400 font-semibold text-sm mb-1">2-2-2 System</p>
    <p className="text-gray-400 text-xs">
      Boxing, Mudgar & Mobility combined into one powerful program.
    </p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
    <p className="text-green-400 font-semibold text-sm mb-1">Build Champions</p>
    <p className="text-gray-400 text-xs">
      Discipline, confidence & grit through Kreate, Kommit, Konquer.
    </p>
  </div>

</div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
    {data.map((item, i) => (
      <BenefitCard key={i} {...item} />
    ))}
  </div>
</SectionWrapper>
  );
}