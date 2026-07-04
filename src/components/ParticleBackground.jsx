import React, { useEffect, useRef } from "react";

/**
 * ParticleBackground - An interactive canvas-based particle network background.
 * 
 * Features:
 * - Standalone fixed-position canvas (renders behind everything without wrapping children).
 * - Bright, crisp particles and connecting web lines for a premium tech aesthetic.
 * - Cosmic nebula radial gradient following the cursor for a space atmosphere.
 * - Direct Push LERP Physics (particles pushed cleanly out of mouse radius, return in straight lines with no bouncing).
 * - 3D Multi-Layered Parallax (size, opacity, drift speed, scroll speed, and webs scaled by dynamic depth).
 * - High-DPI/Retina display scaling support.
 * - Memory leak cleanup & debounced resize handling.
 */
export default function ParticleBackground({
  particleColor = "rgba(245, 245, 240, 0.7)",  // Bright cream-white particles
  lineColor = "rgba(245, 245, 240, 0.14)",      // Subtle connecting web lines
  particleCountDensity = 4500,                  // High density particle count
  mouseRadius = 100,                            // Subtle radius of hover repel interaction
  ambientSpeedMultiplier = 1.6,                 // Speed of background drifting
}) {
  const canvasRef = useRef(null);
  
  // Track mouse coordinates in a ref to avoid triggering React re-renders on every mouse move
  const mouseRef = useRef({
    x: undefined,
    y: undefined,
    radius: mouseRadius,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    
    // Update mouse radius if the prop changes
    mouseRef.current.radius = mouseRadius;

    /**
     * Particle Class - Implements 3D Multi-Layered Parallax Physics
     */
    class Particle {
      constructor(canvasWidth, canvasHeight) {
        // Continuous depth from 0.6 (far background) to 3.0 (near foreground)
        this.depth = Math.random() * 2.4 + 0.6;

        // Random starting position on screen
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        
        // Home coordinate where the particle floats/drifts around
        this.baseX = this.x;
        this.baseY = this.y;
        
        // Size proportional to depth (far stars are smaller, near stars are larger)
        this.size = this.depth * 0.95;
        
        // Density factor (for scroll speed scaling)
        this.density = this.depth;
        
        // Ambient drift velocity scaled by depth (creates ambient 3D depth parallax)
        this.ambientVx = (Math.random() - 0.5) * 0.08 * ambientSpeedMultiplier * this.depth;
        this.ambientVy = (Math.random() - 0.5) * 0.08 * ambientSpeedMultiplier * this.depth;
        
        // Dynamic opacity proportional to depth (foreground stars are brighter)
        this.opacity = this.depth * 0.22 + 0.15;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(canvasWidth, canvasHeight) {
        // 1. Move home position (ambient drift)
        this.baseX += this.ambientVx;
        this.baseY += this.ambientVy;

        // Wrap around boundaries for ambient positions
        if (this.baseX < 0) this.baseX = canvasWidth;
        if (this.baseX > canvasWidth) this.baseX = 0;
        if (this.baseY < 0) this.baseY = canvasHeight;
        if (this.baseY > canvasHeight) this.baseY = 0;

        // 2. Calculate target position (pushed away from mouse if inside radius)
        let targetX = this.baseX;
        let targetY = this.baseY;

        const mouse = mouseRef.current;
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = this.baseX - mouse.x;
          const dy = this.baseY - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Foreground particles have a larger interaction bubble than background ones
          const dynamicRadius = mouse.radius * (this.depth * 0.35 + 0.3);
          
          if (distance < dynamicRadius) {
            // Push target position to the exact edge of the interaction circle
            const forceDirectionX = dx / (distance || 1);
            const forceDirectionY = dy / (distance || 1);
            
            targetX = mouse.x + forceDirectionX * dynamicRadius;
            targetY = mouse.y + forceDirectionY * dynamicRadius;
          }
        }

        // 3. Smooth LERP movement towards target (no speed/pegas variables, no velocity bounces)
        const lerpSpeed = 0.12; 
        this.x += (targetX - this.x) * lerpSpeed;
        this.y += (targetY - this.y) * lerpSpeed;
      }
    }

    /**
     * Canvas initialization (handles Retina/High-DPI sharp rendering)
     */
    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const area = width * height;
      const numParticles = Math.floor(area / particleCountDensity);

      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(width, height));
      }
    };

    init();

    /**
     * Draw connections (subtle network webs) between close particles
     */
    const drawConnections = () => {
      const maxDistance = 90; // Connection limit in pixels
      const particlesLength = particles.length;

      for (let a = 0; a < particlesLength; a++) {
        for (let b = a + 1; b < particlesLength; b++) {
          // Only connect particles within a similar depth layer (creates gorgeous 3D parallax web)
          if (Math.abs(particles[a].depth - particles[b].depth) > 0.6) continue;

          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          
          // Optimization: Check squared distance first to avoid heavy Math.sqrt calls
          const distSq = dx * dx + dy * dy;
          const maxDistSq = maxDistance * maxDistance; // 90 * 90 = 8100

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq); // Only compute square root for actual drawn lines
            const opacity = (1 - distance / maxDistance) * 0.22;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    /**
     * Animation Loop
     */
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Draw space gradient glow centered at the cursor
      const mouse = mouseRef.current;
      if (mouse.x !== undefined && mouse.y !== undefined) {
        const glowRadius = 260; // Large atmospheric glow
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, glowRadius
        );
        // Cosmic colors: violet to deep blue to transparent
        gradient.addColorStop(0, "rgba(96, 165, 250, 0.12)");   // Space blue
        gradient.addColorStop(0.4, "rgba(139, 92, 246, 0.06)"); // Nebula violet
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");           // Fade to space void
        
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & Draw points
      particles.forEach((particle) => {
        particle.update(width, height);
        particle.draw();
      });

      // Draw web links
      drawConnections();

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        mouseRef.current.x = event.touches[0].clientX;
        mouseRef.current.y = event.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      const height = window.innerHeight;

      particles.forEach((particle) => {
        // Scroll shift speed scaled by 3D depth (foreground scrolls fast, background scrolls slow)
        const scrollFactor = 0.18 * particle.density;
        const shift = difference * scrollFactor;
        
        // Shift both actual position and base position together
        particle.y -= shift;
        particle.baseY -= shift;

        // Synchronous wrap-around to prevent coordinates mismatch
        if (particle.baseY < 0) {
          particle.baseY += height;
          particle.y += height;
        } else if (particle.baseY > height) {
          particle.baseY -= height;
          particle.y -= height;
        }
      });
    };

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleColor, lineColor, particleCountDensity, mouseRadius, ambientSpeedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        display: "block",
        background: "transparent",
      }}
    />
  );
}
