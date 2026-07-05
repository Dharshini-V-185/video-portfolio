import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projectsData = [
    {
      id: 1,
      title: 'Edu Path - Education App',
      badge: 'Full Stack · 2024',
      subtitle: 'Interactive learning platform',
      framework: 'React.js',
      language: 'JavaScript',
      type: 'EdTech',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Figma', 'UI/UX Design'],
      description: 'Designed and prototyped user-friendly UI/UX using Figma. Developed full-stack application with secure JWT authentication and MongoDB integration.',
      challenge: 'Creating an intuitive user experience for both students and educators while ensuring secure data management and authentication across different user roles.',
      approach: 'Utilized Figma for iterative UI/UX prototyping. Built a robust MERN stack backend with JWT for secure role-based access, and designed a responsive React frontend for seamless interaction.',
      image: '/projects/edu_path.png',
      githubLink: 'https://github.com/Dharshini-V-185',
      linkedinLink: 'https://www.linkedin.com/in/dharshini-veeramani-24bb33304'
    },
    {
      id: 2,
      title: 'SMS Spam Detection System',
      badge: 'Machine Learning · 2024',
      subtitle: 'Real-time text classification',
      framework: 'Streamlit',
      language: 'Python',
      type: 'NLP / AI',
      tech: ['Python', 'Machine Learning', 'NLP', 'Streamlit'],
      description: 'Built an NLP-based machine learning model to classify SMS messages as spam or ham. Developed a Streamlit web interface for real-time message prediction.',
      challenge: 'Accurately identifying spam messages containing disguised keywords and varying structures while maintaining a low false-positive rate for legitimate messages.',
      approach: 'Leveraged Natural Language Processing techniques for text preprocessing and feature extraction. Trained classification models and deployed them via an interactive Streamlit web interface for real-time inference.',
      image: '/projects/sms_spam.png',
      githubLink: 'https://github.com/Dharshini-V-185',
      linkedinLink: 'https://www.linkedin.com/in/dharshini-veeramani-24bb33304'
    },
    {
      id: 3,
      title: 'Small Shop Sales Prediction',
      badge: 'Data Science · 2024',
      subtitle: 'Retail forecasting model',
      framework: 'Scikit-learn',
      language: 'Python',
      type: 'Analytics',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
      description: 'Developed a machine learning model to predict future sales using historical retail data. Enabled data-driven inventory planning and business decision-making through sales forecasting.',
      challenge: 'Handling sparse and seasonal sales data to build a reliable forecasting model that small shop owners can use without technical expertise.',
      approach: 'Used Pandas and NumPy for extensive data cleaning and feature engineering. Built regression models with Scikit-learn and integrated them into a user-friendly Streamlit dashboard for accessible predictive analytics.',
      image: '/projects/sales_prediction.png',
      githubLink: 'https://github.com/Dharshini-V-185',
      linkedinLink: 'https://www.linkedin.com/in/dharshini-veeramani-24bb33304'
    },
    {
      id: 4,
      title: 'Smart Parking System',
      badge: 'IoT & ML · 2024',
      subtitle: 'Real-time parking detection',
      framework: 'FastAPI',
      language: 'Python',
      type: 'Computer Vision',
      tech: ['Python', 'IoT', 'Machine Learning'],
      description: 'Developed a smart parking solution to detect available parking slots in real time. Designed a monitoring dashboard to improve parking management and reduce traffic congestion.',
      challenge: 'Accurately detecting vehicle presence in various lighting conditions and weather states using camera feeds or IoT sensors.',
      approach: 'Implemented machine learning based object detection for real-time slot monitoring. Aggregated data to a central dashboard to provide live availability updates and optimize parking space utilization.',
      image: '/projects/smart_parking.png',
      githubLink: 'https://github.com/Dharshini-V-185',
      linkedinLink: 'https://www.linkedin.com/in/dharshini-veeramani-24bb33304'
    },
    {
      id: 5,
      title: 'Medicine Availability Finder',
      badge: 'Web App · 2024',
      subtitle: 'Healthcare location services',
      framework: 'React.js',
      language: 'JavaScript',
      type: 'Healthcare',
      tech: ['Web Development', 'Live Tracking', 'Location Services'],
      description: 'Developed a real-time healthcare platform enabling users to locate nearby pharmacies with live medicine stock availability and reservation features. Built a responsive web application integrating medicine search, pharmacy locator, and live inventory tracking to improve medicine accessibility.',
      challenge: 'Synchronizing live inventory data across multiple pharmacies and providing accurate location-based search results with low latency.',
      approach: 'Integrated geolocation APIs to track user proximity to pharmacies. Built a robust database schema to handle real-time inventory updates and created a responsive map-based search interface.',
      image: '/projects/medicine_finder.png',
      githubLink: 'https://github.com/Dharshini-V-185',
      linkedinLink: 'https://www.linkedin.com/in/dharshini-veeramani-24bb33304'
    },
    {
      id: 6,
      title: 'GFF – AI Agricultural Marketplace',
      badge: 'AI & Full Stack · 2024',
      subtitle: 'Smart farming ecosystem',
      framework: 'React + FastAPI',
      language: 'Python/JS',
      type: 'AgriTech',
      tech: ['Python', 'Scikit-learn', 'FastAPI', 'React.js', 'Node.js', 'MongoDB'],
      description: 'Developed an AI-powered agricultural marketplace connecting farmers directly with consumers and businesses. Implemented AI features including Crop Recommendation, Crop Price Prediction, Demand Forecasting, and Profit Prediction to support better farming decisions.',
      challenge: 'Integrating multiple distinct AI models (recommendation, forecasting, pricing) into a single cohesive full-stack marketplace without compromising performance.',
      approach: 'Decoupled the architecture by serving ML models via FastAPI and building the marketplace backend in Node.js. Developed a React frontend to consume these distinct services and present unified insights to the farmers.',
      image: '/projects/gff_market.png',
      githubLink: 'https://github.com/Dharshini-V-185',
      linkedinLink: 'https://www.linkedin.com/in/dharshini-veeramani-24bb33304'
    }
  ];

  return (
    <section id="projects" className="bg-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-100">
      <AnimatedBackground />
      {/* Background Grid Pattern matching portfolio aesthetic (Light version) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Featured <span className="text-[#ff2a2a]">Projects</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-red-200 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col h-full group cursor-pointer"
            >
              <div className="w-full h-48 md:h-52 bg-gray-200 rounded-2xl mb-6 overflow-hidden relative shadow-inner">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#ff2a2a] transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium text-sm mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-gray-200">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1.5 text-[11px] font-extrabold text-gray-700 uppercase tracking-wide bg-white border border-gray-200 rounded-full shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal (Dark Theme matching the screenshot) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0f1115] w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto border border-white/10 scrollbar-hide"
              onClick={e => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              {/* Header Image & Title Area */}
              <div className="relative h-64 sm:h-80 w-full shrink-0 bg-gray-900">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/80 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 md:left-10 z-10">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    {selectedProject.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{selectedProject.title}</h2>
                  <p className="text-white/70 text-sm sm:text-base font-medium">{selectedProject.subtitle}</p>
                </div>
              </div>

              {/* Tech Stats Row */}
              <div className="flex flex-col sm:flex-row gap-4 px-6 md:px-10 py-6 -mt-2">
                 <div className="flex-1 bg-[#1a1d24] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
                   <span className="text-xl sm:text-2xl font-black text-[#38bdf8] mb-1">{selectedProject.framework}</span>
                   <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Framework</span>
                 </div>
                 <div className="flex-1 bg-[#1a1d24] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
                   <span className="text-xl sm:text-2xl font-black text-[#34d399] mb-1">{selectedProject.language}</span>
                   <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Language</span>
                 </div>
                 <div className="flex-1 bg-[#1a1d24] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
                   <span className="text-xl sm:text-2xl font-black text-[#a78bfa] mb-1">{selectedProject.type}</span>
                   <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Type</span>
                 </div>
              </div>

              {/* Content Details */}
              <div className="px-6 md:px-10 pb-10 space-y-8 mt-2">
                 {/* Challenge Section */}
                 <div>
                   <div className="flex items-center gap-3 mb-3">
                     <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"></circle><circle cx="12" cy="12" r="4" strokeWidth="2"></circle></svg>
                     </div>
                     <h3 className="text-lg font-bold text-white">Challenge</h3>
                   </div>
                   <p className="text-white/70 leading-relaxed text-sm md:text-base pl-11 font-medium">{selectedProject.challenge}</p>
                 </div>
                 
                 {/* Approach Section */}
                 <div>
                   <div className="flex items-center gap-3 mb-3">
                     <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                     </div>
                     <h3 className="text-lg font-bold text-white">Approach</h3>
                   </div>
                   <p className="text-white/70 leading-relaxed text-sm md:text-base pl-11 font-medium">{selectedProject.approach}</p>
                 </div>

                 {/* Action Buttons */}
                 <div className="flex flex-wrap gap-4 pl-11 pt-4 border-t border-white/10">
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors py-2 px-6 rounded-full">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                      View GitHub
                    </a>
                 </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
