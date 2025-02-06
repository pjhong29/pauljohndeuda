const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python",
    "AWS", "Docker", "GraphQL", "PostgreSQL"
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate developer with a strong foundation in full-stack development.
              With years of experience in building web applications, I focus on creating
              efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
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