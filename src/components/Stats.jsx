import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Custom hook for count-up animation
const useCountUp = (target, duration = 1500, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out effect
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (target - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);

  return count;
};

// Individual stat card with count-up
const StatCard = ({ stat, variants, isVisible }) => {
  // Parse the number and suffix (e.g. "12+" -> 12, "+")
  const numericValue = parseInt(stat.number.replace(/\D/g, ''), 10);
  const suffix = stat.number.replace(/[0-9]/g, '');

  const [hovered, setHovered] = useState(false);
  const [localCount, setLocalCount] = useState(0);
  const animFrameRef = useRef(null);

  const runCountUp = () => {
    // Cancel any running animation
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setLocalCount(0);
    const duration = 1000;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setLocalCount(Math.floor(easeOut * numericValue));
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setLocalCount(numericValue);
      }
    };
    animFrameRef.current = requestAnimationFrame(animate);
  };

  const scrollCount = useCountUp(numericValue, 1500, isVisible);
  const displayCount = hovered ? localCount : scrollCount;

  return (
    <motion.div
      variants={variants}
      className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-[#ff2a2a]/50 hover:shadow-xl transition-all duration-300 cursor-pointer shadow-md"
      onMouseEnter={() => { setHovered(true); runCountUp(); }}
      onMouseLeave={() => { setHovered(false); }}
      onTouchStart={() => { setHovered(true); runCountUp(); }}
      onTouchEnd={() => { setTimeout(() => setHovered(false), 1000); }}
    >
      {stat.icon}
      <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
        {`${displayCount}${suffix}`}
      </h3>
      <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      ),
      number: '12+',
      label: 'Certifications Earned'
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
      number: '2',
      label: 'Hackathons Participated'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      number: '4',
      label: 'Internships Completed'
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6"></path>
        </svg>
      ),
      number: '6+',
      label: 'Projects Built'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 relative w-full overflow-hidden border-t border-gray-100">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Animated floating orbs */}
      <div className="absolute top-4 left-8 w-32 h-32 rounded-full bg-[#ff2a2a]/10 blur-2xl animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-2 right-16 w-48 h-48 rounded-full bg-[#ff2a2a]/8 blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 left-1/3 w-40 h-40 rounded-full bg-[#ff2a2a]/6 blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 right-1/4 w-28 h-28 rounded-full bg-[#ff2a2a]/10 blur-xl animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }}></div>

      {/* Floating ring 1 */}
      <div className="absolute top-6 left-1/4 w-16 h-16 rounded-full border-2 border-[#ff2a2a]/20 animate-ping" style={{ animationDuration: '4s' }}></div>
      {/* Floating ring 2 */}
      <div className="absolute bottom-20 right-1/3 w-10 h-10 rounded-full border-2 border-[#ff2a2a]/15 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      {/* Floating ring 3 */}
      <div className="absolute top-1/2 right-12 w-20 h-20 rounded-full border border-[#ff2a2a]/10 animate-ping" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>

      {/* Floating dots */}
      {[
        { top: '15%', left: '5%', size: 'w-2 h-2', delay: '0s', dur: '3s' },
        { top: '60%', left: '12%', size: 'w-3 h-3', delay: '1s', dur: '4s' },
        { top: '30%', left: '88%', size: 'w-2 h-2', delay: '0.5s', dur: '5s' },
        { top: '75%', left: '80%', size: 'w-3 h-3', delay: '2s', dur: '3.5s' },
        { top: '20%', left: '50%', size: 'w-2 h-2', delay: '1.5s', dur: '4.5s' },
        { top: '80%', left: '45%', size: 'w-2 h-2', delay: '3s', dur: '4s' },
      ].map((dot, i) => (
        <div
          key={i}
          className={`absolute ${dot.size} rounded-full bg-[#ff2a2a]/30 animate-bounce`}
          style={{ top: dot.top, left: dot.left, animationDelay: dot.delay, animationDuration: dot.dur }}
        />
      ))}

      {/* Diagonal decorative lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.04]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-[#ff2a2a] rotate-12 transform origin-top"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-[#ff2a2a] -rotate-6 transform origin-top"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-[#ff2a2a] rotate-3 transform origin-top"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
              variants={itemVariants}
              isVisible={isVisible}
            />
          ))}
        </motion.div>
      </div>

      {/* Curved wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20 translate-y-[1px]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"/>
        </svg>
      </div>
    </section>
  );
};

export default Stats;
