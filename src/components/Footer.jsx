import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-sans text-xs md:text-sm tracking-wide flex flex-col justify-between min-h-[50vh]">
      


      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-2">
          <p className="text-white font-bold tracking-widest uppercase text-xs mb-1">Expertise</p>
          <p className="text-white/70">Machine Learning & AI</p>
          <p className="text-white/70">Data Science</p>
          <p className="text-white/70">Full Stack Web Development</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          {/* Empty to maintain grid layout */}
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Worldwide Available</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          DHARSHINI V
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-2">
          <a href="mailto:dharshiniveera18@gmail.com" className="hover:text-white transition-colors lowercase">dharshiniveera18@gmail.com</a>
          <a href="#contact" className="hover:text-white transition-colors">+91 7010646740</a>
          <p className="text-white/60">Urapakkam, Tamilnadu - 603211</p>
        </div>
        
        <div className="flex flex-col gap-1 justify-end items-center w-full">
          <div className="bg-[#1a1a1a] rounded-2xl p-4 md:p-5 shadow-lg border border-white/10 flex items-center justify-between w-full max-w-sm mt-8 md:mt-0">
            <div className="flex items-center gap-4">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <div className="flex flex-col text-left">
                <h3 className="text-white font-bold text-sm tracking-tight">Available for work</h3>
                <p className="text-white/50 text-[10px] font-medium mt-0.5">Open to internships & full-time opportunities</p>
              </div>
            </div>
            <div className="text-white/30 hidden sm:block shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
