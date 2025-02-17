
const About = () => {
  const skills = [
    "HTML5/CSS3", "PHP/Laravel", "SQL Database", "API Development",
    "WordPress/Elementor", "Shopify/Liquid/GraphQL", "PowerBI",
    "Microsoft Office", "SCRUM", "Research & Development"
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with extensive experience in web development
              and data analysis. My expertise spans across modern web technologies, database management,
              and e-commerce solutions.
            </p>
            <p className="text-lg text-gray-600">
              With a strong foundation in both client-side and server-side development,
              I specialize in creating robust web applications and implementing effective
              data analysis solutions. My approach combines technical expertise with
              project management skills to deliver high-quality results.
            </p>
            <a
              href="https://1drv.ms/b/s!ApMIb45WnH01haom78Ex_4mBTurR8g?e=FCRdls"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Professional Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white px-4 py-2 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
