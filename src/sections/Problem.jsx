import SectionWrapper from "../components/ui/SectionWrapper";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <SectionWrapper>

      {/* PROBLEM */}
      <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }} // 👈 add this
  viewport={{ once: true, amount: 0.3 }} // optional (better scroll feel)
  className="flex flex-col md:flex-row items-center gap-10 mb-24"
>
        {/* IMAGE */}
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202507/screen-use-among-indian-children-under-five-at-alarming-levels--shows-study-125652319-16x9_0.jpg?VersionId=Z3mpV3F_f_4WxMx2ZtkkvdEV9N2ylMpA"
          className="w-full md:w-1/2 rounded-2xl object-cover h-[300px]"
        />

        {/* CONTENT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            Where We Stand Today
          </h2>

          <p className="text-gray-400 mb-4">
            Today’s children are increasingly spending time indoors,
            leading to reduced physical activity and lack of discipline.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• Increased screen time affecting health</li>
            <li>• Lack of structured physical training</li>
            <li>• Reduced focus, discipline, and confidence</li>
          </ul>
        </div>
      </motion.div>

      {/* SOLUTION */}
      <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  className="flex flex-col md:flex-row-reverse items-center gap-10"
>
        {/* IMAGE */}
        <img
          src="https://res.cloudinary.com/dafoanpxr/image/upload/v1774452839/WhatsApp_Image_2026-03-25_at_9.02.32_PM_ynogcw.jpg"
          className="w-full md:w-1/2 rounded-2xl object-cover h-[300px]"
        />

        {/* CONTENT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-green-400">
            The Kreedentials Way
          </h2>

          <p className="text-gray-400 mb-4">
            Kreedentials K3 Program introduces structured, professional
            training directly within your township environment.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• 6-day structured training system</li>
            <li>• Certified and experienced coaches</li>
            <li>• Measurable performance tracking</li>
          </ul>
        </div>
      </motion.div>

    </SectionWrapper>
  );
}