
import { motion } from "framer-motion";
import ProjectsSection from "./project/ProjectsSection";
import WebsitesSection from "./project/WebsitesSection";
import AnalyticsSection from "./project/AnalyticsSection";
import { projects, websites, analytics } from "./project/ProjectData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#1a1f2c_0%,#10b981_100%)] bg-fixed opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ProjectsSection projects={projects} />
        <WebsitesSection websites={websites} />
        <AnalyticsSection analytics={analytics} />
      </div>
    </section>
  );
};

export default Projects;
