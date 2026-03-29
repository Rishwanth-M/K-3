import SectionWrapper from "../components/ui/SectionWrapper";
import Heading from "../components/ui/Heading";
import ProgramItem from "../components/ui/ProgramItem";

import boxingImg from "../assets/boxing.jpeg";
import mudgarImg from "../assets/mudgar.jpeg";
import mobilityImg from "../assets/mobility.jpeg";

export default function Program() {
  return (
    <SectionWrapper id="program">

      <Heading
        title="Built Through Movement, Discipline, and Purpose"
        subtitle="Kreedentials brings together modern training and timeless methods to shape stronger individuals"
      />

      <div className="space-y-24">

        <ProgramItem
          number="01"
          title="Boxing & Combat Foundations"
          description="More than punches — children develop coordination, reflexes, control, and confidence in a structured, disciplined environment."
          image={boxingImg}
        />

        <ProgramItem
          title="Traditional Strength Training"
          description="Inspired by timeless Indian training methods, mudgar builds grip strength, posture, shoulder stability, and full-body awareness."
          image={mudgarImg}
          reverse
        />

        <ProgramItem
          number="03"
          title="Mobility & Functional Conditioning"
          description="Focused on flexibility, balance, and injury resistance — creating bodies that move well, perform better, and stay resilient."
          image={mobilityImg}
        />

      </div>
    </SectionWrapper>
  );
}