
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
      return <Video className="w-8 h-8 text-white mb-2" />;
    }
    return <Images className="w-8 h-8 text-white mb-2" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleries.map((gallery, index) => (
        <motion.div
          key={gallery.folder}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-secondary/50 rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:shadow-lg"
          onClick={() => onGalleryClick(gallery.folder)}
        >
          <div className="aspect-video relative overflow-hidden">
            <img
              src={`/album_covers/${gallery.folder}.jpg`}
              alt={gallery.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              {getGalleryIcon(gallery.folder)}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                {gallery.name}
              </h3>
              <p className="text-white/80 text-sm">
                {gallery.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
