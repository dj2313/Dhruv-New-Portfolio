import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface SpaceBackgroundProps {
  scrollY: MotionValue<number>;
}

export const SpaceBackground = ({ scrollY }: SpaceBackgroundProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Background that changes based on scroll position
  const backgroundGradient = useTransform(scrollY, (latest) => {
    if (isDark) {
      // Dark mode: Deep space colors
      if (latest < 500) {
        return "radial-gradient(ellipse at top, #1a0a2e 0%, #16213e 50%, #0f3460 100%)";
      }
      if (latest < 1000) {
        return "radial-gradient(ellipse at top, #0f3460 0%, #1a0a2e 50%, #16213e 100%)";
      }
      if (latest < 1500) {
        return "radial-gradient(ellipse at top, #16213e 0%, #0f3460 50%, #1a0a2e 100%)";
      }
      return "radial-gradient(ellipse at top, #1a0a2e 0%, #16213e 50%, #0f3460 100%)";
    } else {
      // Light mode: Soft space colors
      if (latest < 500) {
        return "radial-gradient(ellipse at top, #f3e8ff 0%, #fce7f3 50%, #dbeafe 100%)";
      }
      if (latest < 1000) {
        return "radial-gradient(ellipse at top, #dbeafe 0%, #f3e8ff 50%, #fce7f3 100%)";
      }
      if (latest < 1500) {
        return "radial-gradient(ellipse at top, #fce7f3 0%, #dbeafe 50%, #f3e8ff 100%)";
      }
      return "radial-gradient(ellipse at top, #f3e8ff 0%, #fce7f3 50%, #dbeafe 100%)";
    }
  });

  // Stars opacity based on scroll
  const starsOpacity = useTransform(scrollY, [0, 1000], [1, 0.3]);

  return (
    <>
      {/* Main Background */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{
          background: backgroundGradient,
        }}
      />
      
      {/* Animated Stars Layer */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ opacity: starsOpacity }}
      >
        {/* Stars Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 55% 20%, white, transparent),
            radial-gradient(2px 2px at 10% 50%, white, transparent)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
          animation: 'twinkle 20s infinite',
        }} />
        
        <style>{`
          @keyframes twinkle {
            0%, 100% { background-position: 0% 0%; opacity: 1; }
            50% { background-position: 100% 100%; opacity: 0.8; }
          }
        `}</style>
      </motion.div>

      {/* Nebula Effect */}
      <motion.div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          background: useTransform(scrollY, (latest) => {
            const progress = (latest % 1500) / 1500;
            if (isDark) {
              return `radial-gradient(circle at ${30 + progress * 40}% ${20 + progress * 30}%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at ${70 - progress * 20}% ${80 - progress * 20}%, rgba(255, 20, 147, 0.2) 0%, transparent 50%)`;
            }
            return `radial-gradient(circle at ${30 + progress * 40}% ${20 + progress * 30}%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at ${70 - progress * 20}% ${80 - progress * 20}%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`;
          }),
        }}
      />
    </>
  );
};

