import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import boxingImg from "../assets/modules/Boxing.jpeg";
import mudgarImg from "../assets/modules/mudgar.jpeg";
import mobilityImg from "../assets/modules/mobility.jpeg";

export default function Modules() {
  const modules = [
    {
      title: "Boxing Foundations",
      desc: "Develop coordination, reflexes, balance, and discipline through structured, non-contact training.",
      img: boxingImg,
      imgStyle: {
        objectPosition: "center 30%",
        scale: 1.05,
        translateY: "-5px",
      },
    },
    {
      title: "Traditional Strength (Mudgar)",
      desc: "Build grip strength, shoulder stability, posture, and full-body coordination using time-tested training methods.",
      img: mudgarImg,
      imgStyle: {
        objectPosition: "center 35%",
        scale: 1,
        translateY: "0px",
      },
    },
    {
      title: "Mobility & Functional Conditioning",
      desc: "Improve flexibility, balance, and movement efficiency while reducing injury risk and building a strong athletic base.",
      img: mobilityImg,
      imgStyle: {
        objectPosition: "center 45%",
        scale: 1.1,
        translateY: "-8px",
      },
    },
  ];

  return (
    <SectionWrapper>
      <Heading
        title="Three Pillars of Development"
        subtitle="A balanced system designed to build strength, movement, and resilience"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {modules.map((m, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-green-400 transition duration-300 hover:-translate-y-2"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={m.img}
                alt={m.title}
                className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  objectPosition: m.imgStyle?.objectPosition,
                  transform: `scale(${m.imgStyle?.scale || 1}) translateY(${m.imgStyle?.translateY || "0px"})`,
                }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {m.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {m.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
