import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactSection from "../sections/ContactSection.jsx";

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#02140f] min-h-screen">

      <Navbar />

      <main>
        <ContactSection />
      </main>

      <Footer />

    </div>
  );
}