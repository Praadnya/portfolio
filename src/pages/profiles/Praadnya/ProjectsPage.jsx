import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// No longer need to import individual images or the getProjectImage helper

const ProjectsPage = ({ projects }) => {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 relative">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-xl relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              x: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-24 h-24 bg-[#d4b595] opacity-10 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-[#8b7355] opacity-10 rounded-lg"
          />
        </div>

        <div className="relative h-full flex flex-col items-center p-8">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-serif text-[#5c4934] mb-8"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto no-scrollbar w-full px-4">
            {projects?.map((project, index) => (
              <motion.div
                // Use project.id if available, otherwise index as fallback
                key={project.id || index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#fff9f0] p-6 rounded-lg shadow-lg h-full"
                >
                  {/* Project Image */}
                  <motion.div
                    animate={{ rotate: [-1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="mb-4"
                  >
                    <div className="w-full h-48 rounded overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <h3 className="text-xl font-serif text-[#5c4934] mb-2">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {/* Added a check for techStack before splitting, as it might be missing or undefined */}
                    {project.techStack && project.techStack.split(',').map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="bg-[#d4b595] px-2 py-1 rounded-full text-[#fff9f0] text-xs"
                      >
                        {tech.trim()}
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-[#8b7355] text-sm">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectsPage;