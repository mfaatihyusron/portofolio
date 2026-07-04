import React, { useEffect, useRef } from "react";

/**
 * ParticleBackground - An interactive canvas-based particle network background.
 * Equipped with a premium colorful cursor smoke trail and a synchronized stagger pop-up entrance animation.
 */
export default function ParticleBackground({
  reveal = false,
  particleColor = "rgba(245, 245, 240, 0.7)",  // Fallback prop
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

  // Track the reveal status in a ref so the canvas loop can read it in real time
  const revealRef = useRef(reveal);
  useEffect(() => {
    revealRef.current = reveal;
  }, [reveal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let smokeParticles = [];
    
    // Frame counter for stagger pop-up entrance
    let revealFrameCount = 0;
    
    // Track previous mouse position to LERP-spawn particles between mouse movements (prevents gaps)
    let lastMouseX = undefined;
    let lastMouseY = undefined;
    
    // Update mouse radius if the prop changes
    mouseRef.current.radius = mouseRadius;

    /**
     * Particle Class - Implements 3D Multi-Layered Parallax Physics & Staggered Pop-Up
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

        // High-contrast, vibrant cyber colors mirroring the loading screen theme
        const colorRand = Math.random();
        if (colorRand < 0.50) {
          this.color = "rgba(255, 255, 255, 0.95)"; // Stark Solid White
        } else if (colorRand < 0.75) {
          this.color = "rgba(0, 240, 255, 0.9)";   // Vibrant Cyber Cyan
        } else {
          this.color = "rgba(255, 230, 0, 0.9)";    // Vibrant Cyber Neon Yellow
        }

        // Pop-up animation state variables
        this.scale = 0;
        this.opacityMult = 0;
        // Random frames delay to stagger their appearance quickly (0 to 75 frames ~ 0 to 1.25s)
        this.revealDelay = Math.random() * 75;
      }

      draw() {
        if (!revealRef.current) return; // Keep invisible before reveal is triggered

        // Draw particle only if it has started scaling up
        if (this.scale > 0.01) {
          ctx.globalAlpha = this.opacity * this.opacityMult;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * this.scale, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }
      }

      update(canvasWidth, canvasHeight) {
        // 1. Staggered reveal growth physics
        if (revealRef.current) {
          if (revealFrameCount > this.revealDelay) {
            // Quick pop-up easing transition (growth and opacity rise)
            this.scale += (1 - this.scale) * 0.16;
            this.opacityMult += (1 - this.opacityMult) * 0.16;
          }
        }

        // 2. Move home position (ambient drift)
        this.baseX += this.ambientVx;
        this.baseY += this.ambientVy;

        // Wrap around boundaries for ambient positions
        if (this.baseX < 0) this.baseX = canvasWidth;
        if (this.baseX > canvasWidth) this.baseX = 0;
        if (this.baseY < 0) this.baseY = canvasHeight;
        if (this.baseY > canvasHeight) this.baseY = 0;

        // 3. Calculate target position (pushed away from mouse if inside radius)
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

        // 4. Smooth LERP movement towards target
        const lerpSpeed = 0.12; 
        this.x += (targetX - this.x) * lerpSpeed;
        this.y += (targetY - this.y) * lerpSpeed;
      }
    }

    /**
     * Spawn cursor smoke puff particle
     */
    const spawnSmoke = (x, y) => {
      const smokeColors = [
        "rgba(0, 240, 255, 0.25)", // Soft Glowing Cyan
        "rgba(255, 230, 0, 0.22)",  // Soft Glowing Neon Yellow
        "rgba(255, 255, 255, 0.25)" // Soft Glowing White
      ];

      const size = 8 + Math.random() * 6;
      const maxSize = 38 + Math.random() * 22; // Smoke expands as it rises

      smokeParticles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -0.15 - Math.random() * 0.35, // Upward drift
        size,
        maxSize,
        opacity: 0.16 + Math.random() * 0.1,
        decay: 0.0035 + Math.random() * 0.002, // Fades out in ~1-2 seconds
        color: smokeColors[Math.floor(Math.random() * smokeColors.length)]
      });
    };

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
      if (!revealRef.current) return;
      const maxDistance = 90; // Connection limit in pixels
      const particlesLength = particles.length;

      for (let a = 0; a < particlesLength; a++) {
        for (let b = a + 1; b < particlesLength; b++) {
          // Both particles must be visible/active to start drawing webs
          if (particles[a].scale < 0.15 || particles[b].scale < 0.15) continue;
          
          // Only connect particles within a similar depth layer (creates gorgeous 3D parallax web)
          if (Math.abs(particles[a].depth - particles[b].depth) > 0.6) continue;

          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          
          const distSq = dx * dx + dy * dy;
          const maxDistSq = maxDistance * maxDistance;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            // Apply scale/opacity parameters of both connected nodes to connect organically
            const opacity = (1 - distance / maxDistance) * 0.22 * particles[a].opacityMult * particles[b].opacityMult;
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

      // Increment local reveal frame counter if reveal is active
      if (revealRef.current) {
        revealFrameCount++;
      }

      // 1. Draw atmospheric mouse glow
      const mouse = mouseRef.current;
      if (mouse.x !== undefined && mouse.y !== undefined) {
        const glowRadius = 260;
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, glowRadius
        );
        gradient.addColorStop(0, "rgba(0, 240, 255, 0.1)");   // Space cyan glow
        gradient.addColorStop(0.5, "rgba(255, 230, 0, 0.04)"); // Soft yellow outer nebula
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Update & Draw interactive cursor smoke particles (volumetric gas blend)
      ctx.globalCompositeOperation = "screen";
      for (let i = smokeParticles.length - 1; i >= 0; i--) {
        const p = smokeParticles[i];
        p.vx *= 0.98; // Friction
        p.vy -= 0.008; // Thermal upward acceleration
        p.x += p.vx;
        p.y += p.vy;
        p.size += (p.maxSize - p.size) * 0.035; // Expand radius
        p.opacity -= p.decay;

        if (p.opacity <= 0 || p.size <= 0.1) {
          smokeParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.globalCompositeOperation = "source-over"; // Reset composite operation

      // 3. Update & Draw stars network background
      particles.forEach((particle) => {
        particle.update(width, height);
        particle.draw();
      });

      // 4. Draw connection webs
      drawConnections();

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners LERP-spawning smoke trail to keep it gap-free on fast swipes
    const handleMouseMove = (event) => {
      const mx = event.clientX;
      const my = event.clientY;
      mouseRef.current.x = mx;
      mouseRef.current.y = my;

      if (lastMouseX === undefined || lastMouseY === undefined) {
        lastMouseX = mx;
        lastMouseY = my;
        return;
      }

      const dx = mx - lastMouseX;
      const dy = my - lastMouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 6) {
        const steps = Math.max(1, Math.min(Math.floor(dist / 8), 10));
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const sx = lastMouseX + dx * t;
          const sy = lastMouseY + dy * t;
          spawnSmoke(sx, sy);
        }
        lastMouseX = mx;
        lastMouseY = my;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
      lastMouseX = undefined;
      lastMouseY = undefined;
    };

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const tx = event.touches[0].clientX;
        const ty = event.touches[0].clientY;
        mouseRef.current.x = tx;
        mouseRef.current.y = ty;

        if (lastMouseX === undefined || lastMouseY === undefined) {
          lastMouseX = tx;
          lastMouseY = ty;
          return;
        }

        const dx = tx - lastMouseX;
        const dy = ty - lastMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 6) {
          const steps = Math.max(1, Math.min(Math.floor(dist / 8), 8));
          for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const sx = lastMouseX + dx * t;
            const sy = lastMouseY + dy * t;
            spawnSmoke(sx, sy);
          }
          lastMouseX = tx;
          lastMouseY = ty;
        }
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
      lastMouseX = undefined;
      lastMouseY = undefined;
    };

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      const height = window.innerHeight;

      particles.forEach((particle) => {
        const scrollFactor = 0.18 * particle.density;
        const shift = difference * scrollFactor;
        
        particle.y -= shift;
        particle.baseY -= shift;

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
