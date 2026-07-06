import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.getAttribute("data-cursor") === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#00F0FF]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.7 : isHovered ? 0.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
      />

      {/* Glowing Spotlight / Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-accent/40 rounded-full pointer-events-none z-[9998] bg-accent/5 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.9 : isHovered ? 2.2 : 1,
          borderColor: isHovered ? "rgba(0, 240, 255, 0.8)" : "rgba(0, 240, 255, 0.3)",
          backgroundColor: isHovered ? "rgba(0, 240, 255, 0.1)" : "rgba(0, 240, 255, 0.03)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.4,
        }}
      />
    </>
  );
};
