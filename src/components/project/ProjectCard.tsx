
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4"
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
  );
};

export default ProjectCard;
