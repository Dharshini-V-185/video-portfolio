import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Certifications = () => {
  const certsData = [
    {
      issuer: 'Google',
      image: '/certificates/google_cert.png',
      courses: [
        'Introduction to Generative AI',
        'Machine Learning with TensorFlow',
        'Prompt Design in Vertex AI',
        'Google Student Ambassador'
      ]
    },
    {
      issuer: 'Microsoft',
      image: '/certificates/microsoft_cert.png',
      courses: [
        'Explore Generative AI and Copilots',
        'Microsoft Fabric and Data Analytics'
      ]
    },
    {
      issuer: 'Tata',
      image: '/certificates/tata_cert.png',
      courses: [
        'GenAI Powered Data Analytics Job Simulation',
        'Cybersecurity Analyst Job Simulation'
      ]
    },
    {
      issuer: 'MongoDB',
      image: '/certificates/mongodb_cert.png',
      courses: [
        'Introduction to MongoDB AI and Vector'
      ]
    },
    {
      issuer: 'Adobe',
      image: '/certificates/adobe_cert.png',
      courses: [
        'Digital Marketing'
      ]
    },
    {
      issuer: 'Infosys',
      image: '/certificates/infosys_cert.png',
      courses: [
        'Big 101'
      ]
    }
  ];

  return (
    <section id="certifications" className="bg-[#fcfcfc] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-100">
      <AnimatedBackground />
      {/* Background Grid Pattern matching portfolio aesthetic (Light version) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white">
            Continuous Learning
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Licenses & <span className="text-[#ff2a2a]">Certifications</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certsData.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-red-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-50 mb-6 overflow-hidden border border-gray-100 shadow-sm shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <img src={cert.image} alt={cert.issuer} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-black text-[#ff2a2a] mb-5 uppercase tracking-wide border-b border-gray-100 pb-3">{cert.issuer}</h3>
              <ul className="space-y-4">
                {cert.courses.map((course, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <svg className="w-5 h-5 text-gray-300 group-hover/item:text-[#ff2a2a] transition-colors duration-300 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium text-sm md:text-base leading-snug group-hover/item:text-black transition-colors duration-300">{course}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
