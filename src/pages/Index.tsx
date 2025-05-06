
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { TimelineDemo } from "@/components/TimelineDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TimelineDemo />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
