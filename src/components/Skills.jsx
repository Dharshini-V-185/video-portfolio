import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import SkillsCloud from './SkillsCloud';

const skillsData = {
  'Languages': {
    primary: [
      { name: 'Python', percent: 90 },
      { name: 'SQL', percent: 85 },
      { name: 'HTML & CSS', percent: 88 },
      { name: 'JavaScript', percent: 82 },
      { name: 'TypeScript', percent: 75 },
    ],
    fluent: ['C++', 'Java']
  },
  'Frontend': {
    primary: [
      { name: 'React.js', percent: 85 },
      { name: 'Tailwind CSS', percent: 90 },
      { name: 'Next.js', percent: 78 },
      { name: 'Figma', percent: 80 },
    ],
    fluent: ['Redux', 'Framer Motion', 'Bootstrap']
  },
  'Backend & Data': {
    primary: [
      { name: 'Node.js', percent: 80 },
      { name: 'MongoDB', percent: 82 },
      { name: 'Flask', percent: 85 },
      { name: 'Pandas', percent: 88 },
    ],
    fluent: ['Express', 'PostgreSQL', 'NumPy']
  },
  'AI / ML': {
    primary: [
      { name: 'Machine Learning', percent: 88 },
      { name: 'Deep Learning', percent: 85 },
      { name: 'NLP', percent: 82 },
      { name: 'TensorFlow', percent: 78 },
      { name: 'LLMs', percent: 80 },
      { name: 'Streamlit', percent: 85 },
    ],
    fluent: ['PyTorch', 'Scikit-learn', 'Gen AI']
  }
};

const CircularProgress = ({ percentage }) => {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-14 h-14 shrink-0">
      <svg className="transform -rotate-90 w-14 h-14">
        <circle 
          cx="28" cy="28" r={radius} 
          stroke="currentColor" 
          strokeWidth="4" 
          fill="transparent" 
          className="text-black/5" 
        />
        <motion.circle
          cx="28" cy="28" r={radius}
          stroke="#ff2a2a"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[11px] font-bold text-black">{percentage}</span>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  return (
    <section id="skills" className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <AnimatedBackground />
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center lg:text-left"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/2 border border-black/5 rounded-full">
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
            Languages, Frameworks, and Tools I reach for <span className="text-black/30">— Visualized</span>
          </h2>
        </motion.div>

        {/* Main Content: 2 Columns */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Left Column: Rotating Globe */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full flex items-center justify-center"
            >
              <SkillsCloud />
            </motion.div>
          </div>

          {/* Right Column: Interactive Tabs & Skill Cards */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2.5 mb-8 justify-center lg:justify-start">
              {Object.keys(skillsData).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                    activeTab === tab 
                      ? 'bg-black text-white border-black shadow-md transform -translate-y-0.5' 
                      : 'bg-white text-black/60 border-black/10 hover:bg-black/5 hover:border-black/20'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {/* Primary Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {skillsData[activeTab].primary.map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white border border-black/10 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-red-500/30 transition-all duration-300 group"
                      >
                        <CircularProgress percentage={skill.percent} />
                        <div>
                          <h4 className="text-black font-bold text-sm sm:text-base group-hover:text-red-500 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-black/50 text-xs mt-0.5 font-medium">Proficiency</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Also Fluent In Section */}
                  <div>
                    <h5 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] mb-4">
                      Also Fluent In
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillsData[activeTab].fluent.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 text-xs font-semibold text-black/70 bg-black/5 border border-black/5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background ambient blurs */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-5 w-40 h-40 bg-red-500 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-48 h-48 bg-red-500 rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default Skills;