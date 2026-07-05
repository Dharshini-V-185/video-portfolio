import React, { useRef, useEffect, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/hero_video_latest.mp4';

const TITLES = [
  'AI & Data Science Engineer',
  'Problem Solver',
  'AI & Data Science Student',
  'Machine Learning Engineer',
  'GenAI Enthusiast',
  'Full Stack Developer',
];

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  // Default to true to allow browser safe autoplay constraints
  const [isMuted, setIsMuted] = useState(true);

  // Typewriter state
  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the hero section is less than 50% visible, mute it
          if (!entry.isIntersecting) {
            if (videoRef.current && !videoRef.current.muted) {
              videoRef.current.muted = true;
              setIsMuted(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const heroSection = document.getElementById('home');
    if (heroSection) observer.observe(heroSection);
    return () => { if (heroSection) observer.unobserve(heroSection); };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const typeSpeed = isDeleting ? 50 : 90;   // delete faster than type
    const pauseAfterType = 1800;              // pause before deleting
    const pauseAfterDelete = 400;            // pause before typing next

    let timeout;

    if (!isDeleting && displayedText === currentTitle) {
      // Finished typing — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting — move to next title
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }, pauseAfterDelete);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(isDeleting
          ? currentTitle.slice(0, displayedText.length - 1)
          : currentTitle.slice(0, displayedText.length + 1)
        );
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  // Switches audio states cleanly without freezing or pausing the video frame timeline
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      // Safety check: ensure the video remains playing if it dropped frame execution state
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - configured to safely launch instantly with autoplay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay factor for optimized readability without completely muddying up the red tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container - UPDATED: Changed items-center to items-start and added responsive top padding (pt-28 / md:pt-[12%]) to lift content below the navbar */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-28 md:pt-[12%]">
        
        {/* Left Side: Text and Buttons - Shifted higher up */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Availability Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="flex items-center gap-2.5 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-3 w-fit"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-white text-xs font-semibold tracking-wide">Open to internships &amp; full-time opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-2xl sm:text-3xl md:text-4xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I’m an <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] inline-block">
              {displayedText}
              {/* Blinking cursor */}
              <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            I build scalable machine learning models and intelligent data solutions using Python, Deep Learning, and NLP.
          </p>

          {/* Location */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="flex items-center gap-2 mb-6"
          >
            <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418-4.418-7-8.134-7-11A7 7 0 0112 3a7 7 0 017 10c0 2.866-2.582 6.582-7 11z" />
              <circle cx="12" cy="10" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white/60 text-xs font-medium tracking-wide">Urapakkam, Tamil Nadu — 603211</span>
          </div>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full flex-wrap"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>

            {/* Resume Button */}
            <a 
              href="/resume.pdf" 
              download="Dharshini_Resume.pdf"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side: Mute/Unmute Dynamic Audio Controller */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-12 md:mt-2 flex flex-col items-center justify-center gap-2 cursor-pointer group self-start md:self-auto"
          onClick={toggleMute}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl">
            {isMuted ? (
              // Speaker Muted Icon
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              // Speaker Audio Active Waves Icon
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity mt-1">
            {isMuted ? "Unmute Reel" : "Mute Sound"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white opacity-70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;