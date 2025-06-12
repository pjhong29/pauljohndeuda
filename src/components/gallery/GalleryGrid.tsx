
import { motion } from "framer-motion";
import { Images, Video } from "lucide-react";

interface Gallery {
  name: string;
  folder: string;
  description: string;
}

interface GalleryGridProps {
  galleries: Gallery[];
  onGalleryClick: (folder: string) => void;
}

const GalleryGrid = ({ galleries, onGalleryClick }: GalleryGridProps) => {
  const getGalleryIcon = (folder: string) => {
    if (folder === "video_posts") {
      return <Video className="w-12 h-12 text-primary mb-4" />;
    }
    return <Images className="w-12 h-12 text-primary mb-4" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleries.map((gallery, index) => (
        <motion.div
          key={gallery.folder}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-secondary/50 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:shadow-lg"
          onClick={() => onGalleryClick(gallery.folder)}
        >
          <div className="text-center">
            {getGalleryIcon(gallery.folder)}
            <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">
              {gallery.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {gallery.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
