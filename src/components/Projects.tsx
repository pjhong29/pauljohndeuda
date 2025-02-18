
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Procurement Management System",
      description: "A comprehensive system developed for the Provincial Government of Bataan to streamline their procurement processes, featuring real-time tracking and automated workflows.",
      image: "/lovable-uploads/93dcf755-fd38-456b-8bbd-5d453eee44b8.png",
      skills: {
        frontend: ["HTML5", "CSS", "JavaScript"],
        backend: ["PHP", "MySQL"],
        frameworks: ["jQuery", "jQuery UI", "jQuery Mobile"],
        architecture: ["MVC", "REST APIs"]
      }
    },
    {
      title: "Human Resource Information System",
      description: "An enterprise-level HRIS with automated payroll, employee self-service portal, and comprehensive analytics for data-driven HR management.",
      image: "/lovable-uploads/bfbdb601-b731-46e9-b2ea-2424b419de0e.png",
      skills: {
        frontend: ["HTML5", "CSS", "JavaScript"],
        backend: ["PHP", "MySQL"],
        features: ["Payroll Automation", "Employee Portal", "Analytics Dashboard"]
      }
    },
    {
      title: "Optical Clinic Management System",
      description: "A complete clinic management solution for Ideal Optical Clinic in Guam, featuring patient management, inventory, POS, and prescription tracking.",
      image: "/lovable-uploads/ac5575a5-9cc3-4d02-9ef9-d7963894019f.png",
      skills: {
        frontend: ["HTML5", "CSS", "JavaScript"],
        backend: ["PHP", "MySQL", "Laravel"],
        features: ["Patient Records", "Inventory", "POS"],
        tools: ["XAMPP", "PhpMyAdmin"]
      }
    },
    {
      title: "Document Tracking System",
      description: "A document management system for Southern Luzon State University to track and monitor document flow across departments.",
      image: "/lovable-uploads/d28b4119-b8d4-4abe-9324-2270e4853717.png",
      skills: {
        frontend: ["HTML5", "CSS", "JavaScript"],
        backend: ["PHP", "Laravel", "MySQL"],
        tools: ["XAMPP", "Adobe Photoshop"],
        features: ["Document Tracking", "Workflow Automation"]
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary/50 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                {Object.entries(project.skills).map(([category, skills]) => (
                  <div key={category} className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2 capitalize">
                      {category}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
