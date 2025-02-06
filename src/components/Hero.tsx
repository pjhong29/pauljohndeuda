import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Percian Joseph C. Borja</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-600 mb-8">
            Full Stack Developer & Data Analyst
          </h2>
          <div className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
            <p>
              Based in the Philippines, I am a versatile developer proficient in modern web technologies including HTML5, CSS3, and client-side scripting. My expertise extends to server-side development with PHP and Laravel, along with SQL database management and API development. I excel in content management systems like WordPress, utilizing Unyson and Elementor, as well as e-commerce solutions with Shopify, Liquid, and GraphQL. My skill set also encompasses project management using SCRUM methodology, research and development, and data analysis with PowerBI and Microsoft Office suite.
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
      </div>
    </section>
  );
};

export default Hero;