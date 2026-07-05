import React, { useEffect, useRef } from 'react';

const SKILLS = [
  { text: 'Python',           color: '#ff2a2a', size: 22 },
  { text: 'Machine Learning', color: '#cc1111', size: 20 },
  { text: 'Deep Learning',    color: '#ff2a2a', size: 19 },
  { text: 'NLP',              color: '#ff6b6b', size: 17 },
  { text: 'TensorFlow',       color: '#cc1111', size: 16 },
  { text: 'React.js',         color: '#ff2a2a', size: 17 },
  { text: 'JavaScript',       color: '#ff6b6b', size: 16 },
  { text: 'TypeScript',       color: '#cc1111', size: 15 },
  { text: 'Node.js',          color: '#ff6b6b', size: 15 },
  { text: 'Next.js',          color: '#ff2a2a', size: 15 },
  { text: 'SQL',              color: '#ff6b6b', size: 17 },
  { text: 'MongoDB',          color: '#cc1111', size: 16 },
  { text: 'Flask',            color: '#ff6b6b', size: 15 },
  { text: 'Streamlit',        color: '#ff2a2a', size: 15 },
  { text: 'Pandas',           color: '#ff6b6b', size: 16 },
  { text: 'Gen AI',           color: '#ff2a2a', size: 18 },
  { text: 'LLMs',             color: '#cc1111', size: 17 },
  { text: 'Figma',            color: '#ff6b6b', size: 15 },
  { text: 'Tailwind CSS',     color: '#ff2a2a', size: 15 },
  { text: 'HTML & CSS',       color: '#ff6b6b', size: 15 },
];

function fibonacciSphere(count, radius) {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return points;
}

/** Draw the glowing globe in the center */
function drawGlobe(ctx, cx, cy, globeR, angle) {
  // Outer glow
  const glow = ctx.createRadialGradient(cx, cy, globeR * 0.3, cx, cy, globeR * 1.5);
  glow.addColorStop(0,   'rgba(180, 20, 20, 0.18)');
  glow.addColorStop(0.5, 'rgba(180, 20, 20, 0.07)');
  glow.addColorStop(1,   'rgba(0,0,0,0)');
  ctx.save();
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(cx, cy, globeR * 1.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Globe body gradient (dark sphere)
  const body = ctx.createRadialGradient(cx - globeR * 0.3, cy - globeR * 0.3, globeR * 0.1, cx, cy, globeR);
  body.addColorStop(0,   'rgba(80, 10, 10, 0.85)');
  body.addColorStop(0.5, 'rgba(40,  5,  5, 0.88)');
  body.addColorStop(1,   'rgba(15,  2,  2, 0.92)');
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
  ctx.fillStyle = body;
  ctx.fill();
  ctx.restore();

  // Clip all grid lines inside globe
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
  ctx.clip();

  // Latitude lines (horizontal ellipses)
  const latCount = 7;
  for (let i = 1; i < latCount; i++) {
    const t = (i / latCount) * Math.PI;
    const y = cy + globeR * Math.cos(t);
    const rx = globeR * Math.sin(t);
    const ry = rx * 0.28; // squish for perspective
    ctx.beginPath();
    ctx.ellipse(cx, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 80, 80, 0.2)';
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }

  // Longitude lines (vertical ellipses rotating with globe)
  const lonCount = 8;
  for (let i = 0; i < lonCount; i++) {
    const phi = angle + (i / lonCount) * Math.PI;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(phi);
    ctx.beginPath();
    ctx.ellipse(0, 0, globeR * 0.28, globeR, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 80, 80, 0.2)';
    ctx.lineWidth = 0.6;
    ctx.stroke();
    ctx.restore();
  }

  ctx.restore(); // end clip

  // Globe rim highlight
  ctx.save();
  const rim = ctx.createRadialGradient(cx, cy, globeR * 0.85, cx, cy, globeR);
  rim.addColorStop(0,   'rgba(255,80,80,0)');
  rim.addColorStop(0.7, 'rgba(255,80,80,0.06)');
  rim.addColorStop(1,   'rgba(255,80,80,0.25)');
  ctx.beginPath();
  ctx.arc(cx, cy, globeR, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 80, 80, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = rim;
  ctx.fill();
  ctx.restore();
}

const SkillsCloud = () => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const angleRef  = useRef(0);

  useEffect(() => {
    const canvas  = canvasRef.current;
    if (!canvas) return;
    const ctx     = canvas.getContext('2d');
    const W       = canvas.width;
    const H       = canvas.height;
    const cx      = W / 2;
    const cy      = H / 2;
    const radius  = Math.min(W, H) * 0.42;
    const globeR  = Math.min(W, H) * 0.22;
    const fov     = 600;

    const basePositions = fibonacciSphere(SKILLS.length, radius);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const angle = angleRef.current;
      const cosA  = Math.cos(angle);
      const sinA  = Math.sin(angle);
      const tiltX = 0.15;
      const cosTX = Math.cos(tiltX);
      const sinTX = Math.sin(tiltX);

      const projected = basePositions.map((p, i) => {
        const rx = p.x * cosA - p.z * sinA;
        const rz = p.x * sinA + p.z * cosA;
        const ry = p.y;
        const fy = ry * cosTX - rz * sinTX;
        const fz = ry * sinTX + rz * cosTX;
        const scale = fov / (fov + fz);
        const sx    = cx + rx * scale;
        const sy    = cy + fy * scale;
        return { sx, sy, scale, fz, i };
      });

      // Draw back-layer skills (behind globe)
      const behind = projected.filter(p => p.fz < 0).sort((a, b) => a.fz - b.fz);
      behind.forEach(({ sx, sy, scale, i }) => {
        const skill   = SKILLS[i];
        const opacity = 0.15 + 0.35 * ((scale - 0.4) / 0.6);
        const fs      = Math.round(skill.size * scale * 0.85);
        ctx.save();
        ctx.globalAlpha  = Math.max(0, Math.min(0.45, opacity));
        ctx.font         = `bold ${fs}px 'Inter', sans-serif`;
        ctx.fillStyle    = skill.color;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.text, sx, sy);
        ctx.restore();
      });

      // Draw the glowing globe in center
      drawGlobe(ctx, cx, cy, globeR, angle);

      // Draw front-layer skills (in front of globe)
      const front = projected.filter(p => p.fz >= 0).sort((a, b) => a.fz - b.fz);
      front.forEach(({ sx, sy, scale, i }) => {
        const skill   = SKILLS[i];
        const opacity = 0.35 + 0.65 * ((scale - 0.4) / 0.6);
        const fs      = Math.round(skill.size * scale);
        ctx.save();
        ctx.globalAlpha  = Math.max(0, Math.min(1, opacity));
        ctx.font         = `bold ${fs}px 'Inter', sans-serif`;
        ctx.fillStyle    = skill.color;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.text, sx, sy);
        ctx.restore();
      });

      angleRef.current += 0.004;
      animRef.current   = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] select-none"
    />
  );
};

export default SkillsCloud;
