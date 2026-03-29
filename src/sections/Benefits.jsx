import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import BenefitCard from "../components/ui/BenefitCard";

export default function Benefits() {
  const data = [
    {
      title: "For Children",
      items: [
        "Build confidence through structured challenges",
        "Develop discipline, focus, and consistency",
        "Improve strength, coordination, and resilience",
        "Reduce screen time with meaningful activity",
        "Grow with a strong sense of identity and purpose",
      ],
    },
    {
      title: "For Parents",
      items: [
        "A trusted, structured environment for growth",
        "Visible progress you can track and understand",
        "Convenient access within your community",
        "Professional guidance without external hassle",
      ],
    },
    {
      title: "For Communities",
      items: [
        "Creates an active, engaged environment",
        "Transforms spaces into high-value ecosystems",
        "Builds a culture of health, discipline, and growth",
        "Elevates the overall lifestyle of residents",
      ],
    },
  ];

  return (
    <SectionWrapper id="benefits">
      <Heading
        title="Why Kreedentials Matters"
        subtitle="More than training — it’s a system that benefits children, families, and entire communities"
      />

      {/* TOP HIGHLIGHTS */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
          <p className="text-green-400 font-semibold text-sm mb-2">
            Unlock Potential
          </p>
          <p className="text-gray-400 text-sm">
            Every child has untapped ability — we provide the structure to bring it out.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
          <p className="text-green-400 font-semibold text-sm mb-2">
            Structured Growth System
          </p>
          <p className="text-gray-400 text-sm">
            A balanced approach combining training, mindset, and progress tracking.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-300">
          <p className="text-green-400 font-semibold text-sm mb-2">
            Build for Life
          </p>
          <p className="text-gray-400 text-sm">
            Confidence, discipline, and resilience that go beyond sport.
          </p>
        </div>

      </div>

      {/* MAIN BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14">
        {data.map((item, i) => (
          <BenefitCard key={i} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}