
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center">
          <div className="animate-fade-in text-center max-w-4xl">
            <span className="text-primary mb-4 inline-block">Hello Everyone</span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Hi,{" "}
              <TypeAnimation
                sequence={[
                  "I'm a Web Designer",
                  2000,
                  'I create amazing websites',
                  2000,
                  'I build digital experiences',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-primary"
                repeat={Infinity}
              />
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-secondary px-6 py-2 rounded-full border border-primary/20 inline-flex items-center gap-2">
                Web Developer & Data Analyst
                <span className="text-primary">→</span>
              </span>
            </div>
            <div className="text-base md:text-xl text-gray-400 max-w-2xl mb-12 mx-auto">
              <p>
                Specializing in creating exceptional digital solutions through web development using modern technologies. I excel in creating responsive, user-friendly websites and applications that deliver outstanding user experiences.
              </p>
            </div>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer inline-block"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
