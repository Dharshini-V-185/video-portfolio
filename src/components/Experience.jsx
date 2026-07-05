import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'AI Engineer Intern',
      company: 'Indian Institute of Information Technology, Design and Manufacturing Kancheepuram',
      description: 'Developed and evaluated machine learning models for text-based emotion analysis. Built scalable ML pipelines and enhanced classification accuracy by 15%.',
    },
    {
      id: 2,
      role: 'Machine Learning Intern',
      company: 'Industrial Design and Animations',
      description: 'Developed ML models for emotion analytics from journal text data, improving classification accuracy by 15%. Built ML pipeline: data preprocessing, feature extraction, training, and evaluation using Python. Integrated model outputs into analytics pipeline for mental health applications.',
    },
    {
      id: 3,
      role: 'Full Stack Developer Intern',
      company: 'One Yes Info Tech',
      description: 'Developed responsive Event Venue Booking System using Figma and web technologies. Implemented front-end and back-end features, enhancing user engagement by 30%. Applied HTML, CSS, and JavaScript to build interactive, user-friendly interfaces.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="experience" className="bg-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-100">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white">
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Work <span className="text-[#ff2a2a]">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative border-l-4 border-gray-200 ml-4 md:ml-8"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={cardVariants} className="mb-12 ml-8 md:ml-12 relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[42px] md:-left-[58px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#ff2a2a] border-4 border-white shadow-md flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1">{exp.role}</h3>
                <h4 className="text-md md:text-lg font-bold text-[#ff2a2a] mb-4">{exp.company}</h4>
                <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative background circles */}
      <div className="absolute top-20 right-[-5%] w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-20 left-[-5%] w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Experience;
