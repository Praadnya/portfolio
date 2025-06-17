import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, FileDown } from 'lucide-react';
import resume from '/assets/resume.pdf';
import profileImage from '/assets/profile.jpg'

// ...imports remain unchanged

const CoverPage = ({ data }) => {
  const name = data?.name || 'Your Name';
  const title = data?.title || '';
  const location = data?.location || '';
  const about = data?.about || '';
  const contact = data?.contact || {};

  return (
    <div className="h-[95vh] w-[95%] flex items-center justify-center p-6 relative min-h-fit mx-auto">
      <Card className="w-full h-full bg-[#f5e6d3] shadow-xl relative overflow-hidden min-h-fit">
        {/* ... animated shapes (no changes) */}

        <div className="relative h-full flex flex-col items-center justify-center p-8 min-h-fit">
          {/* Profile Picture (unchanged) */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="relative z-10"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="w-40 h-40 rounded-lg overflow-hidden border-4 border-[#fff9f0] bg-[#8b7355] flex items-center justify-center"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=8b7355&color=fff`;
                    }}
                  />
                ) : (
                  <span className="text-4xl text-white font-bold">{name[0]}</span>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Name, Title, Location, About */}
          <div className="text-center mt-6 mb-4 max-w-2xl mx-auto">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold text-[#5c4934] font-scrapbook-title mb-2 break-words"
            >
              {name}
            </motion.h1>
            {title && (
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-[#8b7355] font-scrapbook-title mb-2 break-words"
              >
                {title}
              </motion.h2>
            )}
            {location && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="text-[#8b7355] mb-2 font-scrapbook-accent"
              >
                {location}
              </motion.p>
            )}
            {about && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[#5c4934] max-w-2xl mx-auto text-base break-words font-scrapbook-body"
              >
                {about}
              </motion.p>
            )}
          </div>

          {/* Contact Info and Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-3 px-4 pb-6"
          >
            <div className="flex flex-wrap items-center gap-4 justify-center">
              {contact.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#d4b595] px-3 py-1.5 rounded-full text-[#fff9f0] text-sm font-scrapbook-playful"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </motion.a>
              )}
              {contact.github && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#d4b595] px-3 py-1.5 rounded-full text-[#fff9f0] text-sm font-scrapbook-playful"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </motion.a>
              )}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={resume}
                download="Praadnya_Resume.pdf"
                type="application/pdf"
                className="flex items-center gap-2 bg-[#d4b595] px-3 py-1.5 rounded-full text-[#fff9f0] text-sm font-scrapbook-playful"
              >
                <FileDown size={18} />
                <span>Resume</span>
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-3 text-[#8b7355] justify-center text-xs font-scrapbook-casual">
              {contact.email && (
                <motion.p whileHover={{ scale: 1.05 }}>{contact.email}</motion.p>
              )}
              {contact.phone && (
                <motion.p whileHover={{ scale: 1.05 }}>{contact.phone}</motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default CoverPage;