
import AnalyticsCard from "./AnalyticsCard";
import SectionTitle from "./SectionTitle";

interface Analytics {
  title: string;
  url: string;
  description: string;
  image: string;
}

interface AnalyticsSectionProps {
  analytics: Analytics[];
}

const AnalyticsSection = ({ analytics }: AnalyticsSectionProps) => {
  return (
    <>
      <SectionTitle title="Data Analytics" className="mt-20" />
      <div className="relative p-8 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#1A1F2C]/90 to-primary/20 opacity-90"></div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto relative z-10">
          {analytics.map((item, index) => (
            <AnalyticsCard 
              key={index} 
              analytics={item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AnalyticsSection;
