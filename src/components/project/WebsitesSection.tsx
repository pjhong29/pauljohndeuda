
import { useState } from "react";
import WebsiteCard from "./WebsiteCard";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";

interface Website {
  title: string;
  url: string;
  description: string;
  image: string;
}

interface WebsitesSectionProps {
  websites: Website[];
}

const WebsitesSection = ({ websites }: WebsitesSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(6);
  
  const showMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 6, websites.length));
  };

  const visibleWebsites = websites.slice(0, visibleCount);
  const hasMore = visibleCount < websites.length;

  return (
    <>
      <SectionTitle title="Websites" className="mt-20" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleWebsites.map((website, index) => (
          <WebsiteCard 
            key={index} 
            website={website} 
            index={index} 
          />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={showMore}
            variant="outline"
            className="px-8 py-2"
          >
            Show More
          </Button>
        </div>
      )}
    </>
  );
};

export default WebsitesSection;
