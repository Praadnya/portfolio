import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const EducationPage = ({ data }) => {
  const education = data?.education || [];
  const coursework = data?.coursework || [];
  const hackathons = data?.hackathons || [];

  console.log('Education:', education);
  console.log('Coursework:', coursework);
  console.log('Hackathons:', hackathons);

  return (
    <div className="h-[95vh] w-[95%] flex items-center justify-center p-6 relative min-h-fit mx-auto">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-xl relative overflow-hidden min-h-fit">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-[#d4b595] opacity-10 rounded-lg"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-[#8b7355] opacity-10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [0, -360],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -bottom-10 left-1/3 w-24 h-24 rounded-full bg-[#5c4934] opacity-15"
          />
        </div>

        {/* Scrollable Content */}
        <div className="relative h-full max-h-[88vh] overflow-y-auto pr-3">
          <div className="h-full flex p-8 min-h-fit">
            {/* Left Column - Main Education Info */}
            <div className="w-1/2 pr-8">
              <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-serif text-[#5c4934] mb-8"
              >
                Education
              </motion.h2>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution || index}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="relative mb-8"
                >
                  <motion.div
                    animate={{ rotate: [-2, 2] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                    className="w-full bg-[#fff9f0] p-6 rounded-lg shadow-lg"
                  >
                    <div className="mb-6">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <h3 className="text-2xl font-serif text-[#5c4934] mb-2">
                      {edu.institution}
                    </h3>
                    {edu.location && (
                      <p className="text-[#8b7355] mb-2">📍 {edu.location}</p>
                    )}
                    <p className="text-[#8b7355] mb-2">
                      {edu.startYear} - {edu.endYear}
                    </p>
                    <p className="text-[#5c4934] font-semibold mb-2">{edu.degree}</p>
                    {edu.cgpa && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#d4b595] px-4 py-2 rounded-full inline-block mb-3"
                      >
                        <p className="text-[#fff9f0]">CGPA: {edu.cgpa}</p>
                      </motion.div>
                    )}
                    {edu.description && (
                      <p className="text-[#5c4934] text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Additional Info */}
            <div className="w-1/2 pl-8 space-y-6">
              {/* Key Coursework */}
              {coursework.length > 0 && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-[#fff9f0] p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-serif text-[#5c4934] mb-4">
                    Key Coursework
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {coursework.map((course, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#f5e6d3] p-2 rounded-lg text-center"
                      >
                        <p className="text-[#8b7355] text-sm">{course}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Hackathons */}
              {hackathons.length > 0 && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#fff9f0] p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-serif text-[#5c4934] mb-4">Hackathons</h3>
                  <div className="space-y-2">
                    {hackathons.map((hackathon, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#f5e6d3] p-3 rounded-lg"
                      >
                        {hackathon.title ? (
                          <>
                            <h4 className="text-[#5c4934] font-semibold text-sm mb-1">
                              {hackathon.title}
                            </h4>
                            <p className="text-[#8b7355] text-sm">{hackathon.description}</p>
                          </>
                        ) : (
                          <p className="text-[#8b7355] text-sm">{hackathon}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Certifications */}
              {data?.certifications && data.certifications.length > 0 && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="bg-[#fff9f0] p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-serif text-[#5c4934] mb-4">Certifications</h3>
                  <div className="space-y-3">
                    {data.certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#f5e6d3] p-3 rounded-lg"
                      >
                        <h4 className="text-[#5c4934] font-semibold text-sm mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-[#8b7355] text-sm">{cert.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EducationPage;
