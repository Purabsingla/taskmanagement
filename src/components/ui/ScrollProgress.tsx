import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Pixels scrolled from top
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / scrollHeight) * 100;
      setScrollPercent(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"
      style={{ width: `${scrollPercent}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollPercent}%` }}
    />
  );
};

export default ScrollProgress;
