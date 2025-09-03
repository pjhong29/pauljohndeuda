
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionTitle from "./project/SectionTitle";
import { useNicheMode } from '../context/NicheModeContext';

const projects = [
  {
    name: "Yardware Australia",
    url: "https://yardware.com.au",
    description: "Shopify E-commerce for premium outdoor living.",
    image: "/lovable-uploads/Screenshot 2025-09-03 085027.png"
  },
  {
    name: "SkySoles USA",
    url: "https://us.skysoles.com",
    description: "Shopify E-commerce for aviation footwear.",
    image: "/lovable-uploads/Screenshot 2025-09-03 085635.png"
  },
  {
    name: "Innate KC",
    url: "https://innatekc.com",
    description: "WordPress site for a Kansas City wellness clinic.",
    image: "/lovable-uploads/Screenshot 2025-09-03 085002.png"
  },
  {
    name: "Black Families Matter",
    url: "https://blackfamiliesmatter.com",
    description: "WordPress site for a non-profit organization.",
    image: "/lovable-uploads/Screenshot 2025-09-03 085100.png"
  },
  {
    name: "Iskolar ng Bataan",
    url: "https://iskolarngbataan.com",
    description: "WordPress site for a scholarship program.",
    image: "/lovable-uploads/Screenshot 2025-09-03 085118.png"
  }
];

const Projects = () => {
  const { mode } = useNicheMode();
  if (mode === "graphicOnly") return null;
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </a>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-primary text-sm mb-2">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                >
                  Visit Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
