import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const SkillsPage = ({ skills, achievements }) => {
  if (!skills) return null;

  return (
    <div className="h-full w-full flex items-center justify-center p-8 relative">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-xl relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-40 h-40 bg-[#d4b595] opacity-10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-10 w-32 h-32 bg-[#8b7355] opacity-10 rounded-lg"
          />
        </div>

        {/* Main content area - now with overflow-y-auto for scrollbar */}
        <div className="relative h-full flex flex-col items-center p-6 overflow-y-auto no-scrollbar">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-serif text-[#5c4934] mb-6 whitespace-nowrap"
          >
            Skills & Achievements
          </motion.h2>

          <div className="w-full px-4 mb-6">
            <h3 className="text-2xl font-serif text-[#5c4934] mb-4 text-center">My Toolkit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ y: 50, opacity: 0, rotate: (index % 2 === 0 ? -1 : 1) }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: (index % 2 === 0 ? 0.5 : -0.5) }}
                    className="bg-[#fff9f0] p-4 rounded-lg shadow-md border border-[#d4b595] transform hover:shadow-lg"
                    style={{
                        transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` // Initial slight rotation
                    }}
                  >
                    <h4 className="text-lg font-serif text-[#5c4934] mb-2 font-semibold">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1, backgroundColor: '#8b7355', color: '#fff9f0' }}
                          className="bg-[#d4b595] px-3 py-1 rounded-full text-[#fff9f0] text-sm whitespace-nowrap cursor-pointer transition-colors duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full px-4">
            <h3 className="text-2xl font-serif text-[#5c4934] mb-4 text-center">Milestones & Accolades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements?.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0, rotate: (index % 2 === 0 ? 1 : -1) }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
                  className="w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: (index % 2 === 0 ? -0.5 : 0.5) }}
                    className="bg-[#fff9f0] p-4 rounded-lg shadow-md border-2 border-dashed border-[#8b7355] transform hover:shadow-lg"
                    style={{
                        transform: `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)` // Initial slight rotation
                    }}
                  >
                    <p className="text-[#5c4934] text-base font-semibold mb-1">{achievement.title}</p>
                    <p className="text-[#8b7355] text-sm">{achievement.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SkillsPage;