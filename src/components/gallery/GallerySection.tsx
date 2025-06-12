
import { useState } from "react";
import SectionTitle from "../project/SectionTitle";
import GalleryGrid from "./GalleryGrid";
import GalleryModal from "./GalleryModal";

const galleryFolders = [
  {
    name: "NFT Art",
    folder: "nft_art",
    description: "Digital art and NFT collections"
  },
  {
    name: "Posters",
    folder: "posters", 
    description: "Marketing posters and promotional materials"
  },
  {
    name: "Product Listing",
    folder: "product_listing",
    description: "E-commerce product images and listings"
  },
  {
    name: "T-Shirt Designs",
    folder: "tshirt_designs",
    description: "Custom apparel and clothing designs"
  },
  {
    name: "Vector Art",
    folder: "vector_art",
    description: "Vector illustrations and graphics"
  },
  {
    name: "Video Posts",
    folder: "video_posts",
    description: "Social media video content"
  }
];

const GallerySection = () => {
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

  const handleGalleryClick = (folder: string) => {
    setSelectedGallery(folder);
  };

  const handleCloseModal = () => {
    setSelectedGallery(null);
  };

  return (
    <>
      <SectionTitle title="Portfolio Gallery" />
      <GalleryGrid galleries={galleryFolders} onGalleryClick={handleGalleryClick} />
      {selectedGallery && (
        <GalleryModal 
          folder={selectedGallery} 
          onClose={handleCloseModal}
          galleryName={galleryFolders.find(g => g.folder === selectedGallery)?.name || ""}
        />
      )}
    </>
  );
};

export default GallerySection;
