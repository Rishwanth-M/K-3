import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Program from "../sections/Program";
import Progress from "../sections/Progress";
import Steps from "../sections/Steps";
import Benefits from "../sections/Benefits";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Program />
        <Progress />
        <Steps />
        <Benefits />
        
      </main>

      <Footer />
    </div>
  );
}