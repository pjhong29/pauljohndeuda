
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-4xl font-bold text-center mb-12 ${className}`}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
