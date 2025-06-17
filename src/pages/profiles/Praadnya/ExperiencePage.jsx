import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const ExperiencePage = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleOverlay = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen w-[95%] mx-auto p-4 flex items-center justify-center font-scrapbook-body">
      <Card className="w-full bg-[#f5e6d3] shadow-xl relative overflow-hidden px-3 py-4 md:px-6 md:py-6">
        
        {/* Background Doodles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 right-0 w-32 h-32 bg-[#d4b595] opacity-10 rounded-full"
          />
          <motion.div
            animate={{ rotate: [360, 0], y: [0, 20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-0 left-0 w-24 h-24 bg-[#8b7355] opacity-10 rounded-lg"
          />
        </div>

        {/* Scrollable Content */}
        <div className="relative h-auto md:h-full max-h-screen md:max-h-[88vh] overflow-y-auto pr-2 md:pr-3">
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-scrapbook-title text-[#5c4934] mb-8 text-center"
          >
            Experiences
          </motion.h2>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
            {experiences?.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => toggleOverlay(index)}
                className="relative bg-[#fff9f0] p-5 pt-8 rounded-xl border-[3px] border-dashed border-[#d4b595] shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                {/* Washi Tapes */}
                <div className="absolute -top-3 left-6 w-20 h-6 bg-[#d4b595] rotate-[-6deg] shadow-sm rounded-sm z-20" />
                <div className="absolute -top-3 right-6 w-20 h-6 bg-[#d4b595] rotate-[6deg] shadow-sm rounded-sm z-20" />

                {/* Logo */}
                <div className="w-full h-[150px] mb-3 relative z-10">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain rounded-md border-2 border-[#8b7355] bg-white"
                  />
                </div>

                {/* Info */}
                <div className="text-sm text-[#5c4934] space-y-1 z-10 relative font-scrapbook-body">
                  <h3 className="text-lg font-scrapbook-title font-bold">{exp.company}</h3>
                  <p className="font-medium text-[#8b7355] font-scrapbook-casual">{exp.title}</p>
                  <p className="italic text-xs font-scrapbook">{exp.duration}</p>
                  <p className="text-xs font-scrapbook">{exp.location}</p>
                </div>

                {/* Description */}
                <div className="mt-3 text-sm text-[#5c4934] line-clamp-4 relative z-10 font-scrapbook-body">
                  {exp.description}
                </div>

                {/* Overlay */}
                {expandedIndex === index && (
                  <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 backdrop-blur-md rounded-xl p-4 overflow-y-auto z-30 font-scrapbook-body">
                    <h3 className="text-lg font-scrapbook-title font-bold text-[#5c4934]">{exp.company}</h3>
                    <p className="text-sm text-[#8b7355] mb-2 font-scrapbook-casual">{exp.title}</p>
                    <p className="text-xs italic mb-1 font-scrapbook">{exp.duration} • {exp.location}</p>
                    <p className="text-sm text-[#5c4934] leading-snug whitespace-pre-wrap">
                      {exp.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(null);
                      }}
                      className="absolute top-2 right-2 bg-[#d4b595] text-white px-2 py-1 text-xs rounded font-scrapbook-accent"
                    >
                      Close
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperiencePage;