import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Achievements = () => {
  const achievementsData = [
    {
      id: 1,
      title: 'Google Student Ambassador',
      description: 'Represented Google developer initiatives on campus by organizing technical workshops, events, and outreach programs. Promoted Google technologies and engaged students through community building, increasing awareness of developer tools and learning opportunities. Collaborated with student leaders and faculty while strengthening leadership, communication, and event management skills.',
      image: '/achievements/elegant_google.jpg'
    },
    {
      id: 2,
      title: 'Class Topper (First Rank)',
      description: 'Secured First Rank (Class Topper) in the 5th Semester of B.Tech Artificial Intelligence and Data Science based on academic performance.',
      image: '/achievements/elegant_topper.jpg'
    },
    {
      id: 3,
      title: 'StackForge Competition Runner-Up',
      description: 'Secured Runner-Up (Second Place) in the StackForge – AI Tools Websites Creation Competition, organized by Dominova and Tagore Engineering College.',
      image: '/achievements/elegant_code.jpg'
    }
  ];

  return (
    <section id="achievements" className="bg-[#fcfcfc] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-100">
      <AnimatedBackground />
      {/* Background Grid Pattern matching portfolio aesthetic (Light version) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white">
            Milestones & Honors
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Key <span className="text-[#ff2a2a]">Achievements</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {achievementsData.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 hover:shadow-[0_20px_50px_rgba(255,42,42,0.08)] hover:border-red-200 hover:-translate-y-2 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="w-full h-48 md:h-56 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative shadow-inner">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#ff2a2a] transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
