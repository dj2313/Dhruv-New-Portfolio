import { motion } from "framer-motion";
import { TechnologyIcons } from "./SkillIcons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Skill {
  name: string;
  icon: keyof typeof TechnologyIcons;
}

interface SkillSliderProps {
  skills: Skill[];
  title: string;
  color: "purple" | "pink";
}

export const SkillSlider = ({ skills, title, color }: SkillSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, skills.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const colorClasses = {
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      hover: "hover:bg-purple-100 dark:hover:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-100 dark:border-purple-900/30",
      button: "bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50",
    },
    pink: {
      bg: "bg-pink-50 dark:bg-pink-900/20",
      hover: "hover:bg-pink-100 dark:hover:bg-pink-900/30",
      text: "text-pink-600 dark:text-pink-400",
      border: "border-pink-100 dark:border-pink-900/30",
      button: "bg-pink-100 dark:bg-pink-900/30 hover:bg-pink-200 dark:hover:bg-pink-900/50",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="relative">
      <h3 className={`text-2xl font-bold mb-6 ${colors.text}`}>{title}</h3>
      
      <div className="relative overflow-hidden rounded-xl">
        <motion.div
          className="flex gap-4"
          animate={{
            x: `-${currentIndex * (100 / itemsPerView)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {skills.map((skill, index) => {
            const IconComponent = TechnologyIcons[skill.icon];
            return (
              <motion.div
                key={skill.name}
                className={`flex-shrink-0 w-[calc(33.333%-0.67rem)] flex flex-col items-center gap-2 p-4 ${colors.bg} ${colors.hover} rounded-lg cursor-pointer transition-colors`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={colors.text}>
                  {IconComponent && <IconComponent />}
                </div>
                <span className="text-sm text-center text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      {skills.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={prevSlide}
            className={`p-2 rounded-full ${colors.button} ${colors.text} transition-all hover:scale-110`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 rounded-full ${colors.button} ${colors.text} transition-all hover:scale-110`}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Dots Indicator */}
      {skills.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? `${colors.text.replace('text-', 'bg-')} w-6`
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

