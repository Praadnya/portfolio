import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const ExperiencePage = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleOverlay = (index) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="w-full h-full p-6 flex items-center justify-center">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-inner relative overflow-hidden">
        
        {/* Animated background doodles */}
        <div className="absolute inset-0 pointer-events-none">
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

        <div className="relative z-10 flex flex-col items-center p-6 h-full">
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-serif text-[#5c4934] mb-8"
          >
            Experiences
          </motion.h2>

          <div className="flex flex-nowrap overflow-x-auto gap-8 w-full no-scrollbar pb-4">
            {experiences?.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ x: 100 * index, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="relative flex-none w-[350px] h-[500px] md:w-[400px] md:h-[500px] cursor-pointer"
                onClick={() => toggleOverlay(index)}
              >
                {/* Polaroid card */}
                <div className="bg-[#fff9f0] p-4 rounded-xl shadow-lg h-full flex flex-col relative border-[3px] border-dashed border-[#d4b595]">

                  {/* Pinned Logo */}
                  <div className="w-full h-[160px] mb-3 relative">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain rounded-md border-2 border-[#8b7355] bg-white"
                    />
                    <div className="absolute -top-3 left-3 w-4 h-4 bg-red-400 rounded-full shadow" />
                    <div className="absolute -top-3 right-3 w-4 h-4 bg-red-400 rounded-full shadow" />
                  </div>

                  {/* Info */}
                  <div className="text-sm text-[#5c4934] space-y-1">
                    <h3 className="text-lg font-serif font-bold">{exp.company}</h3>
                    <p className="font-medium text-[#8b7355]">{exp.title}</p>
                    <p className="italic text-xs">{exp.duration}</p>
                    <p className="text-xs">{exp.location}</p>
                  </div>

                  {/* Truncated description */}
                  <div className="mt-3 text-sm text-[#5c4934] line-clamp-4">
                    {exp.description}
                  </div>

                  {/* Click overlay full description */}
                  {expandedIndex === index && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 backdrop-blur-md rounded-xl p-4 overflow-y-auto z-20">
                      <h3 className="text-lg font-serif font-bold text-[#5c4934]">{exp.company}</h3>
                      <p className="text-sm text-[#8b7355] mb-2 font-medium">{exp.title}</p>
                      <p className="text-xs italic mb-1">{exp.duration} • {exp.location}</p>
                      <p className="text-sm text-[#5c4934] leading-snug whitespace-pre-wrap">
                        {exp.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(null);
                        }}
                        className="absolute top-2 right-2 bg-[#d4b595] text-white px-2 py-1 text-xs rounded"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperiencePage;