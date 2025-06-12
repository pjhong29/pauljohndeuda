import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryModalProps {
  folder: string;
  galleryName: string;
  onClose: () => void;
}

const GalleryModal = ({ folder, galleryName, onClose }: GalleryModalProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get images based on folder
    const getImagesForFolder = (folderName: string) => {
      const imageMap: { [key: string]: string[] } = {
        nft_art: [
          "Kiddoz_000.jpg",
          "Kiddoz_001.jpg", 
          "Kiddoz_002.jpg",
          "Kiddoz_003.jpg",
          "banaue.jpg",
          "boracay.jpg",
          "cold blue.jpg",
          "everest.jpg",
          "grand canyon.jpg",
          "maccu pichu.jpg",
          "mist.jpg",
          "peak.jpg",
          "petra.jpg",
          "the redeemer.jpg"
        ],
        posters: [
          "2.png",
          "54.png",
          "67.png",
          "73.png",
          "90.png",
          "A1.png",
          "B1.png",
          "B2.png",
          "beefyaki.jpg",
          "C.png",
          "D.png",
          "FB_IMG_1731159837189.jpg",
          "FB_IMG_1731159844146.jpg",
          "FB_IMG_1731159853076.jpg",
          "FB_IMG_1731159855505.jpg",
          "menu.jpg",
          "new-price-tarp.jpg",
          "SEPTEMBER IS (1).png",
          "SEPTEMBER IS.png",
          "shrimpyaki-special.jpg"
        ],
        product_listing: [
          "11.jpg",
          "12.jpg",
          "13.jpg",
          "14.jpg",
          "495049744_1229982498855753_2161114021978181453_n.jpg",
          "495049926_1040671064364219_3527286831515111201_n.jpg",
          "504042670_4035760796678643_2835304065169171860_n.jpg",
          "504105983_1214597780453808_3696030793765039040_n.jpg",
          "504111518_1721214858476968_2260791509340789487_n.jpg",
          "504208457_694305713384615_9041100807106010981_n.jpg",
          "504240328_1442263376802012_4434772421772122998_n.jpg",
          "504305616_1550230542609490_7189480683526440960_n.jpg",
          "504759217_604640149329027_8817462738880261568_n.jpg",
          "504811374_742219164907309_5389559161463654250_n.jpg",
          "504814817_1086330970038870_560442121788863828_n.jpg",
          "504825932_1682365165737562_6746990804580645216_n.jpg",
          "505113205_990202183002151_1007844729922782341_n.png",
          "505138741_1899546480832940_3472552546966938249_n.jpg",
          "COCOMELON.png",
          "il_fullxfull.5916428574_144m.jpg",
          "il_fullxfull.5968621543_94q2.jpg",
          "ML.png",
          "ROBLOX.png"
        ],
        tshirt_designs: [
          "EREN.jpg",
          "asl.jpg",
          "brothers.jpg",
          "colossal titan.jpg",
          "kiluagon.jpg",
          "mockup blackbeard.jpg",
          "mockup whitebeard.jpg",
          "nike luffy.jpg",
          "saitama.jpg",
          "taguro.jpg",
          "testpin.jpg"
        ],
        vector_art: [
          "image.png",
          "the gambler.png",
          "unique.jpeg",
          "winter soldier.jpeg"
        ],
        logos: [
          "1.jpg",
          "1.png",
          "2.jpg",
          "3.jpg",
          "504745769_1361880911745682_4973483715397911928_n.jpg",
          "504820924_487367084468792_5752753797663852956_n.jpg",
          "504858823_730856216093304_1417689533174782213_n.jpg",
          "505111602_731801499527902_521832978622118655_n.jpg"
        ],
        video_posts: [
          "FB_VID_1065446951615898933.mp4",
          "FB_VID_5277974724388691789.mp4",
          "FB_VID_5452589796490977904.mp4",
          "FB_VID_5747884185851588537.mp4",
          "FB_VID_6227112278126375229.mp4",
          "FB_VID_6967626885770518182.mp4",
          "FB_VID_7556590406965878826.mp4",
          "FB_VID_8760676501018187059.mp4",
          "FB_VID_8894697453105620284.mp4",
          "FB_VID_8956327688085560534.mp4"
        ]
      };
      // Shuffle the array for the requested folder
      const arr = imageMap[folderName] ? [...imageMap[folderName]] : [];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    const folderImages = getImagesForFolder(folder);
    setImages(folderImages.map(img => `/portfolios/${folder}/${img}`));
    setLoading(false);
  }, [folder]);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const isVideo = (filename: string) => {
    return filename.toLowerCase().endsWith('.mp4');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl max-h-full pt-20" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">{galleryName}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors z-[10000]"
          >
            <X size={32} />
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="text-white text-xl">Loading...</div>
          </div>
        ) : (
          <>
            {/* Main Image/Video Display */}
            <div className="relative bg-black rounded-lg overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                {isVideo(images[selectedImage]) ? (
                  <motion.video
                    key={selectedImage}
                    src={images[selectedImage]}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    controls
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                ) : (
                  <motion.img
                    key={selectedImage}
                    src={images[selectedImage]}
                    alt={`${galleryName} ${selectedImage + 1}`}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-[10000]"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-[10000]"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 cursor-pointer border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  {isVideo(image) ? (
                    <video
                      src={image}
                      className="w-20 h-20 object-cover"
                    />
                  ) : (
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center text-white mt-2">
              {selectedImage + 1} of {images.length}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryModal;
