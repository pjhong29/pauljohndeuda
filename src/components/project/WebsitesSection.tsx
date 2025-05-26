
import WebsiteCard from "./WebsiteCard";
import SectionTitle from "./SectionTitle";

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
  return (
    <>
      <SectionTitle title="Websites" className="mt-20" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((website, index) => (
          <WebsiteCard 
            key={index} 
            website={website} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
};

export default WebsitesSection;
