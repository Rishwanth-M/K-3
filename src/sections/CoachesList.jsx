import { useState } from "react";
import SectionWrapper from "../components/ui/SectionWrapper";
import CoachCard from "../components/ui/CoachCard";
import SearchBar from "../components/ui/SearchBar";

// ✅ IMPORT IMAGES
import ronithImg from "../assets/coaches/ronith.jpeg";
import harishImg from "../assets/coaches/harish.jpeg";
import rohithImg from "../assets/coaches/rohith.jpeg";
import subashImg from "../assets/coaches/subash.jpeg";

export default function CoachesList() {
  const [search, setSearch] = useState("");

  const coaches = [
  {
    id: 1,
    name: "Kasala Rohith Raj",
    role: "Boxing & Conditioning Coach",
    image: rohithImg,
    imgStyle: {
      objectPosition: "center 35%",
      scale: 1.05,
      translateY: "-5px",
    },
    certifications: [
      "Strength & Conditioning Certification – PEFI",
      "Boxing Certification – Udemy",
    ],
    experience: "6+ years",
    achievements: [
      "State Boxing Champion",
      "Youth fitness & conditioning experience",
    ],
    bio: "Focused on teaching boxing fundamentals, discipline, and physical fitness to young athletes through structured training programs.",
  },
  {
    id: 2,
    name: "Peddagandu Ronith",
    role: "Mobility & Functional Conditioning Coach",
    image: ronithImg,
    imgStyle: {
      objectPosition: "center 60%",
      scale: 0.95,
      translateY: "0px",
    },
    certifications: [
      "NSDC & Skill India Certified Trainer",
      "Reebok Certified Trainer",
      "ACE Certified Trainer",
    ],
    experience: "5+ years",
    achievements: [
      "Mobility specialist",
      "Functional training expert",
      "Posture correction programs",
    ],
    bio: "Focused on improving movement quality, flexibility, and overall physical performance through functional training.",
  },
  {
    id: 3,
    name: "A N Harish Chandra",
    role: "Mudghar & Traditional Strength Coach",
    image: harishImg,
    imgStyle: {
      objectPosition: "center 35%",
      scale: 1.1,
      translateY: "-10px",
    },
    certifications: [
      "Indian Club & Mace Instructor",
      "Mudgar Tribe Level 1",
      "Gold’s Gym Certifications",
    ],
    experience: "4+ years",
    achievements: [
      "Kids strength training specialist",
      "Beginner-friendly coaching",
    ],
    bio: "Dedicated to teaching traditional strength training methods with a focus on kids and beginners.",
  },

  // ✅ NEW COACH ADDED
  {
    id: 4,
    name: "Subash Kollu",
    role: "Fitness Trainer",
    image: subashImg,

    imgStyle: {
      objectPosition: "center 65%",
      scale: 1.05,
      translateY: "-5px",
    },

    certifications: [
      "Reebok Personal Trainer – Reebok Instructors Alliance",
      "RIA Fitness Certification – Fit India",
    ],
    experience: "4+ years",
    achievements: [
      "Reebok Certified Personal Trainer",
      "Experience in fitness and athlete training",
    ],
    bio: "Certified personal trainer focused on strength training, fitness development, and improving overall physical performance. Dedicated to helping students build strength, endurance, and confidence through structured training.",
  },
];

  const filtered = coaches.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionWrapper>

      <SearchBar value={search} onChange={setSearch} />

      <div className="space-y-16 md:space-y-24">
        {filtered.map((coach, i) => (
          <CoachCard
            key={coach.id}
            coach={coach}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No coaches found.
        </p>
      )}

    </SectionWrapper>
  );
}