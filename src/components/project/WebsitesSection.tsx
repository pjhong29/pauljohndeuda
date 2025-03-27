
import useEmblaCarousel from "embla-carousel-react";
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
  const [websitesRef] = useEmblaCarousel({
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
      <SectionTitle title="Websites" className="mt-20" />
      <div className="overflow-hidden" ref={websitesRef}>
        <div className="flex">
          {websites.map((website, index) => (
            <WebsiteCard 
              key={index} 
              website={website} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WebsitesSection;
