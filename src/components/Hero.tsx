
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import { useNicheMode } from '../context/NicheModeContext';

const Hero = () => {
  const { mode } = useNicheMode();
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        
        {/* Medium Square */}
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/15 rotate-45 animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        
        {/* Small Triangle */}
        <div className="absolute bottom-40 left-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-primary/20 animate-[float_7s_ease-in-out_infinite]"></div>
        
        {/* Medium Circle */}
        <div className="absolute bottom-20 right-40 w-20 h-20 bg-secondary/30 rounded-full animate-[float_5s_ease-in-out_infinite_reverse]"></div>
        
        {/* Large Square */}
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-primary/5 rotate-12 animate-[float_9s_ease-in-out_infinite]"></div>
        
        {/* Small Circle */}
        <div className="absolute top-32 right-1/3 w-12 h-12 bg-accent/10 rounded-full animate-[float_4s_ease-in-out_infinite_reverse]"></div>
        
        {/* Pentagon-like shape */}
        <div className="absolute bottom-60 right-10 w-20 h-20 bg-primary/8 rotate-45 clip-path-polygon animate-[float_6s_ease-in-out_infinite]" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center">
          <div className="animate-fade-in text-center max-w-4xl">
            <span className="text-primary mb-4 inline-block">Hello Everyone</span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Hi,{" "}
              <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "I design modern websites",
                2000,
                "I create impactful brand visuals",
                2000,
                "I build Shopify & WordPress experiences",
                2000,
                "I deliver creative solutions for your business",
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
                {mode === 'graphicOnly' ? 'Creative Designer' : 'Creative Designer & Web Developer'}
                <span className="text-primary">→</span>
              </span>
            </div>
            <div className="text-base md:text-xl text-gray-400 max-w-2xl mb-12 mx-auto">
              <p>
                {mode === 'graphicOnly'
                  ? 'Specializing in captivating graphic design, branding, and creative visual content. I help brands stand out and connect with their audience through compelling visuals and engaging design.'
                  : 'Specializing in creating captivating visual content and modern websites. I excel in graphic design, web development, video editing, and web design that helps brands stand out and connect with their audience through compelling visuals, engaging content, and interactive experiences.'}
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
