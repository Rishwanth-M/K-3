import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CoachesHero from "../sections/CoachesHero";
import CoachesList from "../sections/CoachesList";

export default function Coaches() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        <CoachesHero />
        <CoachesList />
      </main>

      <Footer />
    </div>
  );
}