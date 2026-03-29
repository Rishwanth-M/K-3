export default function ConsentModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-[#0f172a] text-gray-200 p-6 rounded-xl w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto shadow-xl border border-gray-700">

        <h2 className="text-xl font-semibold mb-6 text-green-400">
          Consent Details
        </h2>

        {/* ================= 2 ================= */}
        <Section title="1. CONSENT FOR PARTICIPATION IN SPORTS TRAINING">
          <p>
            I hereby grant permission for my child to participate in the Kreedentials™ Township Program (KTP)
            and all structured sports activities conducted by Kreedentials™.
          </p>

          <p className="mt-2">I understand that:</p>

          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>The program involves physical activity, drills, and sport-specific movements.</li>
            <li>Minor injuries such as sprains, falls, and fatigue may occur.</li>
            <li>Kreedentials™ coaches are trained to maintain a safe and child-first environment.</li>
            <li>I will inform Kreedentials™ of any medical conditions or limitations relevant to my child.</li>
            <li>
              I understand that minimal, sport-appropriate physical contact may be required for instruction,
              and I consent to such contact being applied professionally.
            </li>
            <li>
              I agree not to interfere with or interrupt training sessions unless requested by the coach.
            </li>
          </ul>

          <p className="mt-3">
            I accept full responsibility for my child’s participation.
          </p>

          <p className="mt-2">________________________________________</p>
        </Section>

        {/* ================= 4 ================= */}
        <Section title="2. PHOTO, VIDEO & MEDIA CONSENT">
          <p>
            I grant Kreedentials™ full permission to capture and use photos, videos, assessments,
            achievements, and training footage of my child for:
          </p>

          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Program Use</li>
            <li>Skill tracking & performance assessment</li>
            <li>Certification & progress documentation</li>
            <li>Coach training and quality improvement</li>
          </ul>

          <p className="mt-3">Marketing & Promotions (digital, print & social media)</p>

          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Website, social media posts, reels</li>
            <li>Brochures, flyers, posters</li>
            <li>Program highlights, achievements & promotional campaigns</li>
          </ul>

          <p className="mt-3">I understand that:</p>

          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Kreedentials™ will never misuse, sell, or share data with unauthorized third parties.</li>
            <li>Media will be used respectfully and responsibly.</li>
            <li>No personal contact details of my child will ever be published.</li>
          </ul>

          <p className="mt-3">
            Please mention your consent here in writing (I Agree/Disagree):
          </p>

          <p className="mt-2">________________________________________</p>
        </Section>

        {/* ================= 5 ================= */}
        <Section title="3. DATA PROTECTION CONSENT">
          <p>I acknowledge that:</p>

          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Kreedentials™ collects attendance, performance, and training data for program improvement.</li>
            <li>All data is securely stored and used only internally.</li>
            <li>I may request data review or deletion at any time.</li>
          </ul>

          <p className="mt-2">________________________________________</p>
        </Section>

        {/* ================= 6 ================= */}
        <Section title="4. CODE OF CONDUCT ACKNOWLEDGEMENT">
          <p>I understand and agree that:</p>

          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Kreedentials™ follows strict child-safety and protection standards.</li>
            <li>Coaches use a positive, supportive teaching approach.</li>
            <li>Parents must avoid interfering during sessions unless requested by a coach.</li>
          </ul>

          <p className="mt-2">________________________________________</p>
        </Section>

        {/* ================= 7 ================= */}
        <Section title="5. LIABILITY WAIVER">
          <p>I understand that:</p>

          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Kreedentials™ takes necessary precautions for safety.</li>
            <li>Sports activities carry inherent risks (implicit & explicit).</li>
            <li>
              I will not hold Kreedentials™, its coaches, or staff liable for minor,
              non-negligent injuries.
            </li>
          </ul>

          <p className="mt-3">
            This waiver does not limit my rights in cases of proven negligence
          </p>
        </Section>

        {/* CLOSE */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

/* Reusable Section */
function Section({ title, children }) {
  return (
    <div className="mb-6 text-sm leading-relaxed text-gray-300">
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      {children}
    </div>
  );
}