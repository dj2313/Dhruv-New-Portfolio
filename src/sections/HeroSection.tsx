import { MotionValue, motion } from "framer-motion";
import { AnimatedTextCycle } from "../components/AnimatedTextCycle";
import { Button } from "../components/ui/button";
import { Rocket, Mail, Download, Github, Linkedin } from "lucide-react";

interface HeroSectionProps {
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
  scrollToSection: (id: string) => void;
}

export const HeroSection = ({ heroOpacity, heroScale, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="relative z-10" style={{ opacity: heroOpacity, scale: heroScale }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6 px-5 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-lg"
              >
                <span className="text-base font-semibold text-gray-900 dark:text-white">👋 Full-Stack Developer</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight">
                I turn{" "}
                <AnimatedTextCycle
                  words={["real-world problems", "ideas", "concepts", "challenges", "visions"]}
                  interval={3000}
                  className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                />
                <br />
                into delightful apps
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              Full-stack developer specializing in mobile & web solutions. I blend UI/UX thinking with full-stack
              engineering to create products that people love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                className="rounded-2xl bg-gray-900 text-white hover:bg-black shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                <Rocket className="w-5 h-5 mr-2" />
                See my work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-black text-black hover:bg-black/10 dark:border-white dark:text-white dark:hover:bg-white/10 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-gray-400 text-gray-700 hover:bg-gray-100 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-800 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center mb-12"
            >
              {[
                { icon: Github, href: "https://github.com/dj2313/", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/trivedi-dhruv127/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:trivedidhruv127.dev@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-14 h-14 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110 border border-black/10 dark:border-white/10 hover:shadow-lg hover:shadow-black/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { label: "Projects", value: "9+" },
                { label: "Client Work", value: "1+" },
                { label: "Technologies", value: "15+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-base font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
          >
            <HologramAvatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HologramAvatar = () => {
  return (
    <motion.div
      className="relative w-[400px] h-[480px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main card */}
      <div className="relative w-full h-full rounded-[32px] border border-gray-200 dark:border-white/10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black shadow-2xl overflow-hidden">

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />

        {/* Content container */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">

          {/* Avatar circle with icon */}
          <div className="relative">
            <motion.div
              className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-36 h-36 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-gray-900 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Subtle pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30 dark:border-blue-400/50"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Text content */}
          <div className="text-center space-y-3">
            <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest font-semibold">
              Full-Stack Developer
            </p>
            <h3 className="text-gray-900 dark:text-white text-2xl font-bold">
              Building Future-Ready Products
            </h3>
          </div>

          {/* Skill tags */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {["React", "Flutter", "Python"].map((label) => (
              <motion.div
                key={label}
                className="rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm py-3 text-center text-gray-700 dark:text-white text-sm font-semibold shadow-sm"
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.div>
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30">
            <motion.div
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              Available for Projects
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
