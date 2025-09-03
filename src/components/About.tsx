
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useNicheMode } from '../context/NicheModeContext';
import { motion } from "framer-motion";

const About = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const { mode } = useNicheMode();
  const services = mode === 'graphicOnly'
    ? [
        {
          title: "Graphic Design",
          description: "Professional design services including logo design, branding, posters, flyers, brochures, and business cards."
        },
        {
          title: "Print & Digital Collateral",
          description: "Design of brochures, business cards, flyers, banners, and digital ads tailored to your brand."
        },
        {
          title: "Brand Strategy",
          description: "Comprehensive brand kits, style guides, marketing campaign assets, and content planning with calendar management."
        }
      ]
    : [
        {
          title: "Graphic Design",
          description: "Professional design services including logo design, branding, posters, flyers, brochures, and business cards."
        },
        {
          title: "Shopify & WordPress Development",
          description: "Custom Shopify and WordPress website development, theme customization, e-commerce setup, and ongoing support for your online business."
        },
        {
          title: "Web Design",
          description: "Modern website design, UI mockups, landing pages, banners, sliders, and complete digital brand experiences."
        },
        {
          title: "Print & Digital Collateral",
          description: "Design of brochures, business cards, flyers, banners, and digital ads tailored to your brand."
        },
        {
          title: "Brand Strategy",
          description: "Comprehensive brand kits, style guides, marketing campaign assets, and content planning with calendar management."
        }
      ];

  return (
    <section id="about" className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            {mode === 'graphicOnly' ? (
              <>
                <p className="text-lg text-gray-400 mb-6">
                  I'm a passionate Creative Designer with extensive experience in graphic design and digital content creation. My expertise spans across visual design, branding, and video editing.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  I help brands build their visual identity and connect with their audience through compelling design. From logo design to brand strategy, I bring creativity and results together.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-400 mb-6">
                  I'm a passionate Creative Designer and Web Developer with extensive experience in graphic design, Shopify and WordPress development, and digital content creation. My expertise spans across visual design, custom website creation, and video editing.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  With a strong foundation in both creative design and digital marketing, I specialize in helping brands build their visual identity and engage with their audience through compelling content. From logo design to branding and building Shopify or WordPress sites, I bring creativity and results together.
                </p>
              </>
            )}
          </div>
          <div className="relative animate-slide-up">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/20 rounded-full blur-3xl"></div>
            <img
              src="/lovable-uploads/482193236_9297265103652666_4106546451702009321_n.jpg"
              alt="Paul John Deuda"
              className="relative z-10 w-3/4 md:w-full mx-auto h-auto rounded-full object-cover aspect-square"
            />
          </div>
        </div>

        <div className="mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What I Can Do For You
          </motion.h2>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_40%] px-4">
                  <div className="bg-secondary/50 p-6 rounded-xl h-full border border-primary/10">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
