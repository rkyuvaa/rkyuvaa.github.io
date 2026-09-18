import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import PlatformHub from './components/PlatformHub';
import Products from './components/Products';
import Industries from './components/Industries';
import RestaurantShowcase from './components/RestaurantShowcase';
import ProjectShowcase from './components/ProjectShowcase';
import HRAttendanceShowcase from './components/HRAttendanceShowcase';
import DashboardShowcase from './components/DashboardShowcase';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import TrustCredibility from './components/TrustCredibility';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import OrbXAssistant from './components/OrbXAssistant';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => setDemoOpen(true);
  const closeDemo = () => setDemoOpen(false);

  return (
    <>
      <Navbar onOpenDemo={openDemo} />
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenDemo={openDemo} />

        {/* 2. Business Problem -> Solution Storytelling */}
        <ProblemSolution onOpenDemo={openDemo} />

        {/* 3. OrbX Platform Central Hub */}
        <PlatformHub onOpenDemo={openDemo} />

        {/* 4. Product Modules (10 Cards) */}
        <Products onOpenDemo={openDemo} />

        {/* 5. Industries Section */}
        <Industries onOpenDemo={openDemo} />

        {/* 6. Dedicated Restaurant Management Experience */}
        <RestaurantShowcase onOpenDemo={openDemo} />

        {/* 7. Dedicated Project & Dependency Management Experience */}
        <ProjectShowcase onOpenDemo={openDemo} />

        {/* 8. HR & Attendance to Wage Workflow */}
        <HRAttendanceShowcase onOpenDemo={openDemo} />

        {/* 9. Full-Width Dashboard Command Center */}
        <DashboardShowcase onOpenDemo={openDemo} />

        {/* 10. Why OrbX (4 Visual Benefits) */}
        <WhyChoose onOpenDemo={openDemo} />

        {/* 11. How It Works (4-Step Timeline) */}
        <HowItWorks onOpenDemo={openDemo} />

        {/* 12. Transparent Pricing (₹2,000 / mo) */}
        <Pricing onOpenDemo={openDemo} />

        {/* 13. Trust & Credibility */}
        <TrustCredibility />

        {/* 14. About OrbX Architecture */}
        <About onOpenDemo={openDemo} />

        {/* 15. Final Call To Action Banner */}
        <CTA onOpenDemo={openDemo} />

        {/* 16. Contact & Consultation Form */}
        <Contact />
      </main>

      <Footer onOpenDemo={openDemo} />
      <OrbXAssistant onOpenDemo={openDemo} />
      <DemoModal isOpen={demoOpen} onClose={closeDemo} />
    </>
  );
}
