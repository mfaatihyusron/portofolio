import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onStartReveal, onFinished }) {
  const [progress, setProgress] = useState(0); // Loading progress 0-100%

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const animationFrameId = useRef(null);

  // Store callbacks in refs to prevent timeline coordination useEffect from re-triggering
  const onStartRevealRef = useRef(onStartReveal);
  const onFinishedRef = useRef(onFinished);

  useEffect(() => {
    onStartRevealRef.current = onStartReveal;
    onFinishedRef.current = onFinished;
  }, [onStartReveal, onFinished]);

  // Track finished state to freeze stars updates when transition completes
  const isRevealingRef = useRef(false);

  // 3D Hyperspace Speed Controller: starts slow, accelerates to hyperspeed at 100%
  const speedRef = useRef(2.5);

  // 1. TIMELINE COORDINATION (Loading progress & Warp Speed Trigger)
  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading phase
    const intervalMs = 18; 
    const totalSteps = duration / intervalMs;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.floor((currentStep / totalSteps) * 100), 100);
      setProgress(nextProgress);

      // Slightly accelerate speed as loading progress advances
      speedRef.current = 2.5 + (nextProgress / 100) * 1.5;

      if (nextProgress >= 100) {
        clearInterval(interval);
        
        // Memicu Efek Warp Hyperspace (Accelerate speed from 4 to 85 + Shrink centered text)
        const warpTl = gsap.timeline({
          onComplete: () => {
            isRevealingRef.current = true;
            
            if (onStartRevealRef.current) {
              onStartRevealRef.current(); // Trigger staggered reveal on homepage elements
            }

            // GSAP Zoom-in (Fly-through) transition
            const slideTl = gsap.timeline({
              onComplete: () => {
                if (onFinishedRef.current) {
                  onFinishedRef.current(); // Unmounts the loading screen
                }
              }
            });

            slideTl.to(containerRef.current, {
              scale: 4.5,
              opacity: 0,
              duration: 1.2,
              ease: "power2.inOut"
            }, 0);
          }
        });

        // 1. Warp Speed Boost: Accelerate Z-movement exponentially
        warpTl.to(speedRef, {
          current: 85,
          duration: 0.8,
          ease: "power3.in"
        }, 0);

        // 2. Text Vortex Shrink: Teks persentase mengecil ke pusat warp dan memudar
        warpTl.to(textRef.current, {
          scale: 0.12,
          opacity: 0,
          duration: 0.8,
          ease: "power3.in"
        }, 0);
      }
    }, intervalMs);

    return () => {
      clearInterval(interval);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // 2. 3D HYPERSPACE CANVAS ENGINE
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // 3D Star class definition
    class Star {
      constructor(width, height) {
        this.reset(width, height, true);
      }
      
      reset(width, height, randomZ = false) {
        // 3D coordinate system centered at (0, 0, z)
        this.x = (Math.random() - 0.5) * width * 2.2;
        this.y = (Math.random() - 0.5) * height * 2.2;
        this.z = randomZ ? Math.random() * 1000 : 1000;
        this.prevZ = this.z;
        
        // Stark solid theme-matched colors (Cyan, Yellow, White)
        const colors = [
          "rgba(0, 240, 255, 0.95)",  // Neon Cyan
          "rgba(255, 230, 0, 0.95)",   // Neon Yellow
          "rgba(255, 255, 255, 0.95)"  // Solid White
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.width = 1.0 + Math.random() * 1.5;
      }

      update(width, height, speed) {
        this.prevZ = this.z;
        this.z -= speed;

        // Reset star back to depth once it passes the camera (z <= 0)
        if (this.z <= 0) {
          this.reset(width, height, false);
        }
      }

      draw(ctx, width, height, fov = 350) {
        const centerX = width / 2;
        const centerY = height / 2;

        // Project 3D coordinates (x, y, z) into 2D screen coordinates (px, py)
        const px = (this.x / this.z) * fov + centerX;
        const py = (this.y / this.z) * fov + centerY;

        // Project previous Z coordinates for stretching speed lines
        const prevPx = (this.x / this.prevZ) * fov + centerX;
        const prevPy = (this.y / this.prevZ) * fov + centerY;

        // Draw line if inside boundaries
        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.width;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(prevPx, prevPy);
          ctx.lineTo(px, py);
          ctx.stroke();
        }
      }
    }

    // Initialize 420 stars for dense speed lines
    const numStars = 420;
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.fillStyle = "#0A0A0B";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const speed = speedRef.current;

      stars.forEach((star) => {
        star.update(width, height, speed);
        star.draw(ctx, width, height);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0A0A0B',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transformOrigin: 'center'
      }}
    >
      {/* 3D Hyperspace Canvas Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Centered Futuristic Percentage Indicator (Focal point of loading) */}
      <div 
        ref={textRef}
        style={{ 
          zIndex: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          transformOrigin: 'center'
        }}
      >
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
          color: 'var(--cream)',
          letterSpacing: '0.08em',
          textShadow: '0 0 12px rgba(245, 245, 240, 0.25)'
        }}>
          SYS // [ {progress.toString().padStart(2, '0')}% ]
        </div>
      </div>
    </div>
  );
}
