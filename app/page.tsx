import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import BulkMarking from "./components/BulkMarking";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0F0F0F" }}>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <BulkMarking />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
