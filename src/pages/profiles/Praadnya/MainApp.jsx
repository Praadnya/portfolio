import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from './CoverPage';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';
import { getPortfolioData } from '../../../data/portfolioData';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    // Load data from local JSON file
    const data = getPortfolioData();
    setPortfolioData(data);
    setLoading(false);

    // Add keyboard navigation
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' && currentPage < 4) {
        setDirection(1);
        setCurrentPage(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        setDirection(-1);
        setCurrentPage(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const pages = [
    <CoverPage data={portfolioData} />,
    <EducationPage data={portfolioData} />,
    <ExperiencePage experiences={portfolioData?.experiences} />,
    <ProjectsPage projects={portfolioData?.projects} />,
    <SkillsPage skills={portfolioData?.skills} achievements={portfolioData?.achievements} />
  ];

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if ((newDirection === 1 && currentPage < pages.length - 1) ||
      (newDirection === -1 && currentPage > 0)) {
      setDirection(newDirection);
      setCurrentPage(prev => prev + newDirection);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#fff9f0]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8b7355]"></div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#fff9f0] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-7xl relative">
          {/* Navigation Indicators */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
            {pages.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${currentPage === index ? 'bg-[#5c4934]' : 'bg-[#d4b595]'
                  }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setDirection(index > currentPage ? 1 : -1);
                  setCurrentPage(index);
                }}
              />
            ))}
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "smooth", stiffness: 10, damping: 30 },
                opacity: { duration: 0.01 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full h-full absolute"
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>

          {/* Side Indicators */}
          {currentPage > 0 && (
            <motion.div
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#d4b595] bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 181, 149, 0.3)' }}
              onClick={() => paginate(-1)}
            >
              <span className="text-[#5c4934]">←</span>
            </motion.div>
          )}
          {currentPage < pages.length - 1 && (
            <motion.div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#d4b595] bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 181, 149, 0.3)' }}
              onClick={() => paginate(1)}
            >
              <span className="text-[#5c4934]">→</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;