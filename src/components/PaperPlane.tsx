
import { motion, useScroll, useTransform } from "framer-motion";

const PaperPlane = () => {
  const { scrollYProgress } = useScroll();
  
  const xRightPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["100%", "0%", "-100%", "-200%"]
  );
  
  const yPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["0vh", "30vh", "60vh", "90vh"]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [-30, -15, -30, -45]
  );

  return (
    <motion.div
      className="fixed right-0 top-0 w-12 h-12 z-40 pointer-events-none"
      style={{
        x: xRightPosition,
        y: yPosition,
        rotate: rotate,
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M21 3L3 21" />
        <path d="M21 3L3 10" />
        <path d="M21 3L14 21" />
      </svg>
    </motion.div>
  );
};

export default PaperPlane;
