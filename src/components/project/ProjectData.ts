export interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
}

export interface Website {
  title: string;
  url: string;
  description: string;
  image: string;
}

export interface Analytics {
  title: string;
  url: string;
  description: string;
  image: string;
}

export interface WebDesign {
  title: string;
  url: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Inventory System",
    description: "An inventory management system developed for the Provincial Government of Bataan to manage supplies and materials efficiently.",
    image: "/lovable-uploads/bb3a1a7e-9162-419c-86ae-6d2211d0db57.png",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "jQuery", "AJAX", "MVC"]
  },
  {
    title: "Procurement Management System",
    description: "A comprehensive system developed for the Provincial Government of Bataan to streamline their procurement processes, featuring real-time tracking and automated workflows.",
    image: "/lovable-uploads/93dcf755-fd38-456b-8bbd-5d453eee44b8.png",
    skills: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML5", "CSS", "REST APIs", "MVC"]
  },
  {
    title: "Human Resource Information System",
    description: "An enterprise-level HRIS with automated payroll, employee self-service portal, and comprehensive analytics for data-driven HR management.",
    image: "/lovable-uploads/bfbdb601-b731-46e9-b2ea-2424b419de0e.png",
    skills: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS", "Analytics Dashboard"]
  },
  {
    title: "Optical Clinic Management System",
    description: "A complete clinic management solution for Ideal Optical Clinic in Guam, featuring patient management, inventory, POS, and prescription tracking.",
    image: "/lovable-uploads/ac5575a5-9cc3-4d02-9ef9-d7963894019f.png",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "XAMPP"]
  },
  {
    title: "Document Tracking System",
    description: "A document management system for Southern Luzon State University to track and monitor document flow across departments.",
    image: "/lovable-uploads/d28b4119-b8d4-4abe-9324-2270e4853717.png",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "XAMPP"]
  }
];

export const websites: Website[] = [
  {
    title: "SkySoles US",
    url: "https://skysoles.com",
    description: "Aviation footwear with focus on innovation",
    image: "/lovable-uploads/a92960e6-e5db-408d-b6f3-e1242ae12d5a.png"
  },
  {
    title: "Stage4Tuning",
    url: "https://stage4tuning.com/",
    description: "Automotive tuning software and services platform",
    image: "/lovable-uploads/36a51783-661c-44db-811e-10c7ebdf5bac.png"
  },
  {
    title: "Exhali",
    url: "https://exhali.us/",
    description: "Premium athletic wear and lifestyle brand",
    image: "/lovable-uploads/b8e17588-aa73-495c-ac11-aef6c6c753b2.png"
  },
  {
    title: "Precision Motorsports",
    url: "https://jkkg54w5fr.wpdns.site/",
    description: "European and exotic automotive specialists",
    image: "/lovable-uploads/18e3305f-224e-45bd-afee-fa5584928475.png"
  },
  {
    title: "ShopTake15",
    url: "https://shoptake15.com/",
    description: "E-commerce platform for wellness products",
    image: "/lovable-uploads/b75fedc5-e723-4ecd-a0af-b358b9afeee0.png"
  },
  {
    title: "EASTWOODS Balanga",
    url: "https://epcst.edu.ph",
    description: "Official website of EASTWOODS Professional College of Science and Technology",
    image: "/lovable-uploads/18e3305f-224e-45bd-afee-fa5584928471.jpg"
  },
  {
    title: "Greenside Property Care",
    url: "https://www.greensidepropertycare.com/",
    description: "Professional lawn care and property maintenance services",
    image: "/lovable-uploads/ba4fc123-a300-4914-be3b-937cfa015d35.png"
  },
  {
    title: "Meylor Chiropractic",
    url: "https://www.meylorchiro.com/",
    description: "Trusted chiropractic and acupuncture care in Lenexa, Kansas",
    image: "/lovable-uploads/937a7636-24b1-4046-934c-c3d8883e1da8.png"
  }
];

export const webDesigns: WebDesign[] = [
  {
    title: "Studer Education",
    url: "https://www.figma.com/design/RnWUjyWBpMfux8KkodmtjB/StuderEducation?node-id=0-1&t=6jDbAn15nMFNdKzC-1",
    description: "Educational platform design empowering education leaders",
    image: "/lovable-uploads/31e6444e-29ad-4614-9c2a-82fc16be94b3.png"
  },
  {
    title: "Sophfeet Product",
    url: "https://www.figma.com/design/pmcuHZuhuznvX58lcAUR6W/Sophfeet-Product-Page?node-id=0-1&t=Oo3lbcneLxYFtZDt-1",
    description: "E-commerce product page design for faith-based grip socks",
    image: "/lovable-uploads/eb96b9ad-e874-4055-8e1f-5de8adbb84ee.png"
  }
];

export const analytics: Analytics[] = [
  {
    title: "Industroquip Analytics Dashboard",
    url: "https://lookerstudio.google.com/reporting/35cb89af-8c32-4134-b852-821a9fcc09af",
    description: "Comprehensive sales and performance analytics dashboard",
    image: "/lovable-uploads/35efdf35-6565-4ec5-9c05-dc96a20a6693.png"
  }
];
