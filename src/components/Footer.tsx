
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-background/80 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm">
          Copyright © {currentYear} Percian Borja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
