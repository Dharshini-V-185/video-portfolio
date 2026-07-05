import React from 'react';

/**
 * Animated background for white sections.
 * Neural network pulsing dots, spinning orbit rings, and glowing orbs
 * matching the portfolio's red (#ff2a2a) & black color scheme.
 */

// Small floating neural-network dots
const neuralDots = [
  { top: '15%', left: '7%',  size: 10, color: '#ff2a2a', dur: '3s',   delay: '0s'   },
  { top: '30%', left: '22%', size: 7,  color: '#222',    dur: '4s',   delay: '1s'   },
  { top: '60%', left: '15%', size: 9,  color: '#ff2a2a', dur: '5s',   delay: '0.5s' },
  { top: '20%', left: '75%', size: 8,  color: '#222',    dur: '3.5s', delay: '2s'   },
  { top: '70%', left: '85%', size: 10, color: '#ff2a2a', dur: '4.5s', delay: '1.5s' },
  { top: '45%', left: '50%', size: 7,  color: '#ff2a2a', dur: '6s',   delay: '3s'   },
  { top: '80%', left: '60%', size: 9,  color: '#222',    dur: '3s',   delay: '0.5s' },
  { top: '10%', left: '45%', size: 8,  color: '#ff2a2a', dur: '5s',   delay: '2.5s' },
];

const AnimatedBackground = () => {
  return (
    <>
      <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1);   opacity: 0.5; }
          50%       { transform: scale(1.6); opacity: 1;   }
        }
        @keyframes driftX {
          0%, 100% { transform: translateX(0px)   translateY(0px);  }
          25%       { transform: translateX(12px)  translateY(-8px); }
          50%       { transform: translateX(-8px)  translateY(12px); }
          75%       { transform: translateX(6px)   translateY(-6px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* ── Neural network pulsing dots ── */}
      {neuralDots.map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="absolute pointer-events-none rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            animation: `pulseDot ${dot.dur} ease-in-out infinite, driftX ${parseFloat(dot.dur) * 1.5}s ease-in-out infinite`,
            animationDelay: dot.delay,
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Spinning decorative rings (data orbit feel) ── */}
      <div
        className="absolute pointer-events-none rounded-full border-2 border-dashed border-[#ff2a2a]/20"
        style={{ width: 120, height: 120, top: '8%', right: '6%', animation: 'spinSlow 12s linear infinite' }}
      />
      <div
        className="absolute pointer-events-none rounded-full border border-dashed border-[#222]/10"
        style={{ width: 80, height: 80, bottom: '15%', left: '5%', animation: 'spinSlow 16s linear infinite reverse' }}
      />
      <div
        className="absolute pointer-events-none rounded-full border-2 border-dashed border-[#ff2a2a]/15"
        style={{ width: 60, height: 60, top: '50%', left: '45%', animation: 'spinSlow 10s linear infinite' }}
      />

      {/* ── Subtle glowing orbs ── */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#ff2a2a]/6 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#ff2a2a]/5 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-red-100/30 blur-2xl animate-pulse pointer-events-none" style={{ animationDuration: '4s', animationDelay: '1s' }} />

      {/* ── Subtle grid ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </>
  );
};

export default AnimatedBackground;
