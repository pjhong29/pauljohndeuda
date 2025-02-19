
import useEmblaCarousel from "embla-carousel-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Projects = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 3,
    breakpoints: {
      '(max-width: 768px)': { 
        slidesToScroll: 1,
        align: 'start'
      }
    }
  });

  const [websitesRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 3,
    breakpoints: {
      '(max-width: 768px)': { 
        slidesToScroll: 1,
        align: 'start'
      }
    }
  });

  const projects = [
    {
      title: "Inventory System",
      description: "An inventory management system developed for the Provincial Government of Bataan to manage supplies and materials efficiently.",
      image: "/lovable-uploads/bb3a1a7e-9162-419c-86ae-6d2211d0db57.png",
      skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "jQuery", "AJAX", "MVC"]
    },
    {
      title: "Procurement Management System",
      description: "A comprehensive system developed for the Provincial Government of Bataan to streamline their procurement processes, featuring real-time tracking and automated workflows.",
      image: "/lovable-uploads/93dcf755-fd38-456b-8bbd-5d453eee44b8.png",
      skills: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML5", "CSS", "REST APIs", "MVC"]
    },
    {
      title: "Human Resource Information System",
      description: "An enterprise-level HRIS with automated payroll, employee self-service portal, and comprehensive analytics for data-driven HR management.",
      image: "/lovable-uploads/bfbdb601-b731-46e9-b2ea-2424b419de0e.png",
      skills: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS", "Analytics Dashboard"]
    },
    {
      title: "Optical Clinic Management System",
      description: "A complete clinic management solution for Ideal Optical Clinic in Guam, featuring patient management, inventory, POS, and prescription tracking.",
      image: "/lovable-uploads/ac5575a5-9cc3-4d02-9ef9-d7963894019f.png",
      skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "XAMPP"]
    },
    {
      title: "Document Tracking System",
      description: "A document management system for Southern Luzon State University to track and monitor document flow across departments.",
      image: "/lovable-uploads/d28b4119-b8d4-4abe-9324-2270e4853717.png",
      skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "XAMPP"]
    }
  ];

  const websites = [
    {
      title: "Stage4Tuning",
      url: "https://stage4tuning.com/",
      description: "Automotive tuning software and services platform",
      image: "/lovable-uploads/36a51783-661c-44db-811e-10c7ebdf5bac.png"
    },
    {
      title: "Exhali",
      url: "https://exhali.us/",
      description: "Premium athletic wear and lifestyle brand",
      image: "/lovable-uploads/b8e17588-aa73-495c-ac11-aef6c6c753b2.png"
    },
    {
      title: "Precision Motorsports",
      url: "https://jkkg54w5fr.wpdns.site/",
      description: "European and exotic automotive specialists",
      image: "/lovable-uploads/18e3305f-224e-45bd-afee-fa5584928475.png"
    },
    {
      title: "ShopTake15",
      url: "https://shoptake15.com/",
      description: "E-commerce platform for wellness products",
      image: "/lovable-uploads/b75fedc5-e723-4ecd-a0af-b358b9afeee0.png"
    }
  ];

  const analytics = [
    {
      title: "Industroquip Analytics Dashboard",
      url: "https://lookerstudio.google.com/reporting/35cb89af-8c32-4134-b852-821a9fcc09af",
      description: "Comprehensive sales and performance analytics dashboard",
      image: "/lovable-uploads/35efdf35-6565-4ec5-9c05-dc96a20a6693.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1a1f2c_0%,#10b981_100%)] bg-fixed opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-4">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_33.333%] px-4"
              >
                <div className="bg-secondary/50 rounded-xl overflow-hidden border border-primary/10 h-full">
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 mt-20"
        >
          Websites
        </motion.h2>
        <div className="overflow-hidden" ref={websitesRef}>
          <div className="flex">
            {websites.map((site, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex-[0_0_100%] md:flex-[0_0_30%] px-4 ${
                  index % 3 === 1 ? 'md:flex-[0_0_35%]' : ''
                }`}
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-secondary/50 rounded-xl overflow-hidden border border-primary/10 transition-all hover:border-primary/30">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={site.image}
                        alt={site.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{site.title}</h3>
                      <p className="text-gray-400">{site.description}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 mt-20"
        >
          Data Analytics
        </motion.h2>
        <div className="relative p-8 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#1A1F2C]/90 to-primary/20 opacity-90"></div>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto relative z-10">
            {analytics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 transition-all hover:border-primary/30">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
