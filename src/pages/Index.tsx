
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
