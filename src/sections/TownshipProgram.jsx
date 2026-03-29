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
        title="What Does the K3 Program Include?"
        subtitle="A complete system to build strength, discipline, and performance"
      />

      <div className="space-y-24">

        <ProgramItem
          number="01"
          title="Boxing Fundamentals"
          description="Build coordination, reflexes, and confidence. Children learn stance, movement, control, and discipline in a safe and structured way."
          image={boxingImg}
        />

        <ProgramItem
          title="Mudgar Strength Training"
          description="Traditional strength training that improves grip, shoulders, posture, and full-body awareness using functional movement patterns."
          image={mudgarImg}
          reverse
        />

        <ProgramItem
          number="03"
          title="Mobility & Functional Conditioning"
          description="Enhances flexibility, balance, and injury resistance through bodyweight exercises and mobility drills."
          image={mobilityImg}
        />

      </div>
    </SectionWrapper>
  );
}