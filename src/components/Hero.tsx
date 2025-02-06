const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-600 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12">
            I build exceptional digital experiences that make a difference.
            Passionate about creating innovative solutions through code.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;