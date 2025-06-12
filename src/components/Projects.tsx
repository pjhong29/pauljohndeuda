
import { motion } from "framer-motion";
import GallerySection from "./gallery/GallerySection";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1a1f2c_0%,#10b981_100%)] bg-fixed opacity-10"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <GallerySection />
      </motion.div>
    </section>
  );
};

export default Projects;
