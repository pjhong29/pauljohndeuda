
import WebDesignCard from "./WebDesignCard";
import SectionTitle from "./SectionTitle";

interface WebDesign {
  title: string;
  url: string;
  description: string;
  image: string;
}

interface WebDesignsSectionProps {
  webDesigns: WebDesign[];
}

const WebDesignsSection = ({ webDesigns }: WebDesignsSectionProps) => {
  return (
    <>
      <SectionTitle title="Web Designs" className="mt-20" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webDesigns.map((webDesign, index) => (
          <WebDesignCard 
            key={index} 
            webDesign={webDesign} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
};

export default WebDesignsSection;
