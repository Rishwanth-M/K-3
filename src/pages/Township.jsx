import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import TownshipHero from "../sections/TownshipHero";
import Problem from "../sections/Problem";
import Modules from "../sections/Modules";
import Schedule from "../sections/Schedule";
import Progress from "../sections/TownshipProgress";
import Steps from "../sections/Townshipsteps";
import Benefits from "../sections/TownshipBenefits";
import Pricing from "../sections/Pricing";
import Program from "../sections/TownshipProgram";

export default function Township() {
  return (
    <div className="overflow-x-hidden">
      <Navbar variant="township" />

      <main className="pt-20">
        <TownshipHero />
        <Problem />
        <Program />
        <Modules />
        <Schedule />
        <Progress />
        <Steps />
        <Benefits />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}