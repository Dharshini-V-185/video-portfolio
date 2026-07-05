import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Leadership = () => {
  const leadershipData = [
    {
      id: 1,
      organization: 'PALS',
      role: 'Student Volunteer & Coordinator',
      description: 'Assisted in organizing PALS workshops, seminars, and leadership development programs. Coordinated with students, faculty members, and event organizers for smooth event execution. Supported participant registration, event management, and logistics coordination. Promoted student engagement in innovation, entrepreneurship, and career development activities. Collaborated with team members to ensure successful planning and execution of campus events. Developed leadership, teamwork, communication, and organizational skills.',
    }
  ];

  return (
    <section id="leadership" className="bg-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-100">
      <AnimatedBackground />
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white">
            Community & Growth
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Leadership <span className="text-[#ff2a2a]">& Activities</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-8 md:px-10">
          {leadershipData.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#ff2a2a] group-hover:w-3 transition-all duration-300"></div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{item.organization}</h3>
              <h4 className="text-lg font-bold text-[#ff2a2a] mb-6 uppercase tracking-wide">{item.role}</h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
