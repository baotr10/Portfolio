import React, { useState } from "react";

/**
 * TiltCard - Reusable component providing 3D Tilt effect and Spotlight Glare on hover.
 * 
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {number} maxTilt - Maximum tilt angle in degrees (default 10)
 * @param {string} glareColor - Color of the spotlight glare (default rgba(37, 99, 235, 0.2))
 */
export const TiltCard = ({
  children,
  className = "",
  maxTilt = 10,
  glareColor = "rgba(37, 99, 235, 0.18)",
  ...props
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, opacity: 0, cursorX: 0, cursorY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY, opacity: 1, cursorX: x, cursorY: y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, opacity: 0, cursorX: 0, cursorY: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.opacity ? 1.02 : 1}, ${tilt.opacity ? 1.02 : 1}, 1)`,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-transform duration-200 ease-out cursor-pointer ${className}`}
      {...props}
    >
      {/* Glare spotlight overlay */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: tilt.opacity,
          background: `radial-gradient(500px circle at ${tilt.cursorX}px ${tilt.cursorY}px, ${glareColor}, transparent 60%)`,
        }}
      />

      {children}
    </div>
  );
};
