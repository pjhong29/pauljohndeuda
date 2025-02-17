
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="animate-fade-in md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Percian Joseph C. Borja</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-600 mb-8">
              Web Developer & Data Analyst
            </h2>
            <div className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
              <p>
                Based in the Philippines, I specialize in creating exceptional digital solutions through web development using PHP, WordPress, Shopify, and JavaScript. I also excel in data analytics, leveraging tools like PowerBI, Excel, and LookerStudio to derive meaningful insights from complex datasets.
              </p>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer inline-block"
            >
              Get in Touch
            </Link>
          </div>
          <div className="md:w-1/3 animate-fade-in">
            <img
              src="/lovable-uploads/04199b5d-364a-4537-8296-4f0863d62992.png"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
