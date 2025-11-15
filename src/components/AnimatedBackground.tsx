import { motion, useTransform, MotionValue } from "framer-motion";

interface AnimatedBackgroundProps {
  scrollY: MotionValue<number>;
}

export const AnimatedBackground = ({ scrollY }: AnimatedBackgroundProps) => {
  return (
    <motion.div
      className="fixed inset-0 -z-10 transition-all duration-1000"
      style={{
        background: useTransform(scrollY, (latest) => {
          if (latest < 500) {
            return "linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #dbeafe 100%)";
          }
          if (latest < 1000) {
            return "linear-gradient(135deg, #dbeafe 0%, #f3e8ff 50%, #fce7f3 100%)";
          }
          if (latest < 1500) {
            return "linear-gradient(135deg, #fce7f3 0%, #dbeafe 50%, #f3e8ff 100%)";
          }
          return "linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #dbeafe 100%)";
        }),
      }}
    />
  );
};

