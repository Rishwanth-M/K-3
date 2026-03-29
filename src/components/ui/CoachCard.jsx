import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CoachCard({ coach, reverse }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10"
    >
      <div
        className={`flex flex-col md:flex-row gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <div className="md:w-1/2 overflow-hidden rounded-2xl">
          <img
            src={coach.image}
            alt={coach.name}
            style={{
              objectPosition:
                coach.imgStyle?.objectPosition || "center",
              transform: `
                scale(${coach.imgStyle?.scale || 1})
                translateY(${coach.imgStyle?.translateY || "0"})
              `,
            }}
            className="w-full h-[300px] md:h-[400px] object-cover transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="md:w-1/2 flex flex-col justify-center">

          {/* NAME */}
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            {coach.name}
          </h2>

          {/* ROLE */}
          <p className="text-green-400 mb-4">
            {coach.role}
          </p>

          {/* BIO */}
          <p className="text-gray-400 mb-6 leading-relaxed">
            {coach.bio}
          </p>

          {/* GRID DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

            {/* Certifications */}
            <div>
              <h4 className="text-sm text-gray-300 mb-2 uppercase tracking-wide">
                Certifications
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                {coach.certifications.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-sm text-gray-300 mb-2 uppercase tracking-wide">
                Experience
              </h4>
              <p className="text-gray-400 text-sm">
                {coach.experience}
              </p>
            </div>

            {/* Achievements */}
            <div className="sm:col-span-2">
              <h4 className="text-sm text-gray-300 mb-2 uppercase tracking-wide">
                Achievements
              </h4>
              <p className="text-gray-400 text-sm">
                {coach.achievements.join(", ")}
              </p>
            </div>

          </div>

          {/* ✅ BUTTON */}
          <button
            onClick={() => navigate("/enroll")}
            className="self-start bg-green-500 text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-green-400 transition duration-300 shadow-md hover:shadow-green-500/30"
          >
            Book a Session
          </button>

        </div>
      </div>
    </motion.div>
  );
}