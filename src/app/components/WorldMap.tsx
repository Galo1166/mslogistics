import { useEffect, useRef } from "react";

interface Route {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
}

export function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    // Major shipping routes (simplified world map)
    const routes: Route[] = [
      // Trans-Pacific
      { from: { x: 0.15, y: 0.4 }, to: { x: 0.75, y: 0.35 }, delay: 0 },
      // Trans-Atlantic
      { from: { x: 0.25, y: 0.35 }, to: { x: 0.5, y: 0.4 }, delay: 1 },
      // Asia-Europe
      { from: { x: 0.75, y: 0.45 }, to: { x: 0.55, y: 0.35 }, delay: 2 },
      // Americas route
      { from: { x: 0.2, y: 0.3 }, to: { x: 0.25, y: 0.6 }, delay: 1.5 },
      // Asia-Middle East
      { from: { x: 0.75, y: 0.4 }, to: { x: 0.6, y: 0.45 }, delay: 0.5 },
    ];

    // Major port cities
    const ports = [
      { x: 0.15, y: 0.4, name: "Los Angeles" },
      { x: 0.25, y: 0.35, name: "New York" },
      { x: 0.5, y: 0.4, name: "Rotterdam" },
      { x: 0.55, y: 0.35, name: "Hamburg" },
      { x: 0.75, y: 0.35, name: "Shanghai" },
      { x: 0.78, y: 0.45, name: "Singapore" },
      { x: 0.6, y: 0.45, name: "Dubai" },
      { x: 0.25, y: 0.6, name: "Santos" },
    ];

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      // Clear canvas with slight fade for trail effect
      ctx.fillStyle = "rgba(3, 105, 161, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw world map silhouette (simplified continents)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      
      // Draw simplified continent outlines
      drawContinents(ctx, canvas.width, canvas.height);

      // Draw routes
      routes.forEach((route) => {
        const fromX = route.from.x * canvas.width;
        const fromY = route.from.y * canvas.height;
        const toX = route.to.x * canvas.width;
        const toY = route.to.y * canvas.height;

        // Draw static route line
        ctx.strokeStyle = "rgba(56, 189, 248, 0.2)";
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        
        // Curved line for routes
        const midX = (fromX + toX) / 2;
        const midY = (fromY + toY) / 2 - 50;
        ctx.quadraticCurveTo(midX, midY, toX, toY);
        ctx.stroke();

        // Animated pulse along route
        const progress = ((time + route.delay) % 3) / 3;
        const pulseX = fromX + (toX - fromX) * progress;
        const pulseY = fromY + (toY - fromY) * progress - 50 * Math.sin(progress * Math.PI);

        // Draw pulse
        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 8);
        gradient.addColorStop(0, "rgba(56, 189, 248, 1)");
        gradient.addColorStop(1, "rgba(56, 189, 248, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw ports
      ports.forEach((port) => {
        const x = port.x * canvas.width;
        const y = port.y * canvas.height;

        // Port marker
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing ring
        const pulseSize = 8 + Math.sin(time * 2) * 2;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
}

function drawContinents(ctx: CanvasRenderingContext2D, width: number, height: number) {
  // North America
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.25);
  ctx.lineTo(width * 0.15, height * 0.2);
  ctx.lineTo(width * 0.25, height * 0.25);
  ctx.lineTo(width * 0.3, height * 0.35);
  ctx.lineTo(width * 0.25, height * 0.45);
  ctx.lineTo(width * 0.15, height * 0.4);
  ctx.closePath();
  ctx.stroke();

  // Europe
  ctx.beginPath();
  ctx.moveTo(width * 0.45, height * 0.25);
  ctx.lineTo(width * 0.55, height * 0.28);
  ctx.lineTo(width * 0.52, height * 0.38);
  ctx.lineTo(width * 0.48, height * 0.35);
  ctx.closePath();
  ctx.stroke();

  // Asia
  ctx.beginPath();
  ctx.moveTo(width * 0.6, height * 0.25);
  ctx.lineTo(width * 0.8, height * 0.22);
  ctx.lineTo(width * 0.85, height * 0.35);
  ctx.lineTo(width * 0.8, height * 0.48);
  ctx.lineTo(width * 0.65, height * 0.45);
  ctx.closePath();
  ctx.stroke();
}
