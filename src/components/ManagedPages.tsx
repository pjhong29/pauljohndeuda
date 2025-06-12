
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionTitle from "./project/SectionTitle";

const managedPages = [
  {
    name: "Parokya ng San Miguel Arkanghel - Orion, Bataan",
    url: "https://www.facebook.com/stmichaelorionbataan",
    description: "Catholic Church Page",
    followers: "23K followers",
    image: "/lovable-uploads/2b313b26-53dc-40b0-bbd0-80c9f4989041.png"
  },
  {
    name: "Eastwoods Professional College of Science & Technology",
    url: "https://www.facebook.com/EPCST", 
    description: "Educational Institution",
    followers: "16K followers",
    image: "/lovable-uploads/be95101e-136c-4f4d-b215-67aa9b1fab6b.png"
  },
  {
    name: "Eastwoods Academy of Science and Technology",
    url: "https://www.facebook.com/eastwoodsacademy",
    description: "Educational Institution",
    followers: "8.5K followers",
    image: "/lovable-uploads/cb25f863-139c-426d-a258-3767aa8f1948.png"
  },
  {
    name: "Takotaps",
    url: "https://www.facebook.com/takotaps",
    description: "Food & Restaurant",
    followers: "1.2K followers", 
    image: "/lovable-uploads/4c22d016-d54c-4a6b-bc70-979eacdfbba9.png"
  },
  {
    name: "Equal Printing Services",
    url: "https://www.facebook.com/egualprintingservices",
    description: "Printing Service",
    followers: "296 followers",
    image: "/lovable-uploads/14ea377b-095d-417a-89f8-046cb923a1ef.png"
  }
];

const ManagedPages = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle title="Pages I Manage" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managedPages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={page.image}
                  alt={page.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground line-clamp-2">
                  {page.name}
                </h3>
                <p className="text-primary text-sm mb-2">{page.description}</p>
                <p className="text-gray-400 text-sm mb-4">{page.followers}</p>
                <a
                  href={page.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                >
                  Visit Page
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

export default ManagedPages;
