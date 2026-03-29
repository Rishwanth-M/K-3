import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  // 🔥 HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zx8mfmh",     // replace
        "template_9n63eqj",    // replace
        e.target,
        "krcDsIsSZfDt6Letd"      // replace
      )
      .then(() => {
        setLoading(false);
        e.target.reset();
        showToast("Message sent successfully ✅");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        showToast("Failed to send message ❌");
      });
  };

  // 🔥 TOAST FUNCTION (clean UI)
  const showToast = (msg) => {
    const toast = document.createElement("div");
    toast.innerText = msg;

    toast.className =
      "fixed bottom-6 right-6 bg-[#02140f] border border-white/10 text-white px-5 py-3 rounded-xl shadow-lg z-50 animate-fadeIn";

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  return (
    <SectionWrapper className="relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2"></div>

      {/* HEADER */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Get in Touch with Kreedentials
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Whether you want to bring Kreedentials to your community or book a demo,
          our team is here to guide you.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">

        {/* ================= FORM ================= */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
        >
          <h2 className="text-xl font-semibold">
            Book a Demo Session
          </h2>

          {/* NAME */}
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-green-400 outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-green-400 outline-none"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-green-400 outline-none"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your requirement"
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-green-400 outline-none"
          ></textarea>

          {/* BUTTON */}
          <Button className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit Request"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            We’ll get back to you within 24 hours
          </p>
        </motion.form>

        {/* ================= INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >

          {/* CONTACT CARD */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h3 className="text-lg font-semibold">
              Contact Information
            </h3>

            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={18} className="text-green-400" />
              support@kreedentials.com
            </div>

            

            <div className="flex items-start gap-3 text-gray-300">
              <MapPin size={18} className="text-green-400 mt-1" />
              Hyderabad, India
            </div>

          </div>

          {/* COMPANY DETAILS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-gray-400 leading-relaxed">

            <p className="font-semibold text-white mb-2">
              AvyayPratyay Sports LLP
            </p>

            <p>
              Plot no. 10, Viman Nagar <br />
              Hyderabad – 500016
            </p>

            <p className="mt-3">
              support@kreedentials.com <br />
            </p>

            <p className="mt-3">
              GSTIN – 36ACHFA3555F1ZI
            </p>

          </div>

          {/* TRUST TEXT */}
          <p className="text-xs text-gray-500">
            Trusted by communities building stronger, healthier children.
          </p>

        </motion.div>

      </div>

    </SectionWrapper>
  );
}