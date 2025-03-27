
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 3 },
      '(min-width: 768px) and (max-width: 1023px)': { slidesToScroll: 2 },
      '(max-width: 767px)': { slidesToScroll: 1 }
    }
  });

  return (
    <>
      <SectionTitle title="Featured Projects" />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
