import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarsCanvas } from "./components/Stars";
import { AnimatedTextCycle } from "./components/AnimatedTextCycle";
import { SpaceBackground } from "./components/SpaceBackground";
import { ModernNavbar } from "./components/Navbar";
import { TestimonialSlider } from "./components/TestimonialSlider";
import { LogoCloud } from "./components/ui/logo-cloud-4";
import { Button } from "./components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Code,
  Send,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Users,
  Award,
  TrendingUp,
  Heart,
  Coffee,
  Rocket,
  Download,
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle,
  Filter,
  Search,
  Globe,
  Zap,
  Target,
  Lightbulb,
  Sparkles,
  Star as StarIcon,
  Palette,
  Cpu,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
  category: string;
  year: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

const PortfolioWebsite = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [projectSearch, setProjectSearch] = useState("");

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.6]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const projects: Project[] = [
    {
      title: "SafeRoute",
      description: "Real-time route safety app using Maps + Firebase for Android. Features include live traffic updates, crime statistics, and community-driven safety ratings.",
      tech: ["Android", "Java", "Firebase", "Google Maps API"],
      category: "Mobile App",
      year: "2024",
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    },
    {
      title: "MediTrack",
      description: "Comprehensive medication management system with reminders, analytics, and health insights. Built with Flutter for cross-platform compatibility.",
      tech: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
      category: "Healthcare",
      year: "2023",
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    },
    {
      title: "AgriAssist",
      description: "Farmer assistant portal connecting buyers directly with farmers. Features include inventory management, payment processing, and delivery tracking.",
      tech: ["React.js", "Laravel", "MySQL", "TypeScript"],
      category: "Web Platform",
      year: "2023",
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text: "Transformed our idea into a production-ready app in 8 weeks. Great UX & performance. The attention to detail and communication throughout the project was exceptional.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Tech Startup Inc.",
      rating: 5,
    },
    {
      text: "Exceptional at simplifying complex flows and shipping quickly. The developer understood our vision and delivered beyond expectations. Highly recommended!",
      author: "Michael Chen",
      role: "Product Manager",
      company: "Innovation Labs",
      rating: 5,
    },
    {
      text: "Reliable, detail-oriented, and delivers before deadlines. The code quality is excellent and the app performance is outstanding. A true professional.",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "E-commerce Solutions",
      rating: 5,
    },
  ];

  // Logo arrays for LogoCloud component
  const languageLogos = [
    { src: "https://svgl.app/library/react.svg", alt: "React" },
    { src: "https://svgl.app/library/typescript.svg", alt: "TypeScript" },
    { src: "https://svgl.app/library/javascript.svg", alt: "JavaScript" },
    { src: "https://svgl.app/library/python.svg", alt: "Python" },
    { src: "https://svgl.app/library/android.svg", alt: "Android" },
    { src: "https://svgl.app/library/flutter.svg", alt: "Flutter" },
    { src: "https://svgl.app/library/laravel.svg", alt: "Laravel" },
    { src: "https://svgl.app/library/nodejs.svg", alt: "Node.js" },
    { src: "https://svgl.app/library/java.svg", alt: "Java" },
    { src: "https://svgl.app/library/dart.svg", alt: "Dart" },
  ];

  const backendLogos = [
    { src: "https://svgl.app/library/firebase.svg", alt: "Firebase" },
    { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
    { src: "https://svgl.app/library/mysql.svg", alt: "MySQL" },
    { src: "https://svgl.app/library/mongodb.svg", alt: "MongoDB" },
    { src: "https://svgl.app/library/postgresql.svg", alt: "PostgreSQL" },
    { src: "https://svgl.app/library/redis.svg", alt: "Redis" },
    { src: "https://svgl.app/library/aws.svg", alt: "AWS" },
    { src: "https://svgl.app/library/docker.svg", alt: "Docker" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Space Background */}
      <SpaceBackground scrollY={scrollY} />

      <ModernNavbar />

      {/* Hero Section with Avatar */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        <StarsCanvas />

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="relative z-10"
              style={{ opacity: heroOpacity, scale: heroScale }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full border border-cyan-500/30 dark:border-cyan-500/50"
                >
                  <span className="text-sm font-medium text-cyan-500 dark:text-cyan-400">
                    👋 Full-Stack Developer
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                  I turn{" "}
                  <AnimatedTextCycle
                    words={["real-world problems", "ideas", "concepts", "challenges", "visions"]}
                    interval={3000}
                    className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent"
                  />
                  <br />
                  into delightful apps
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
              >
                Full-stack developer specializing in mobile & web solutions. I blend UI/UX thinking
                with full-stack engineering to create products that people love.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/50"
                  onClick={() => scrollToSection("projects")}
                >
                  <Rocket className="w-5 h-5" />
                  See my work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-500/20"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-5 h-5" />
                  Contact me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500/10 dark:border-fuchsia-400 dark:text-fuchsia-400 dark:hover:bg-fuchsia-500/20"
                  onClick={() => {
                    // Add your resume download link here
                    window.open("/resume.pdf", "_blank");
                  }}
                >
                  <Download className="w-5 h-5" />
                  Resume
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 justify-center mb-8"
              >
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 transition-all hover:scale-110 border border-cyan-500/30 dark:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/50"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                  </a>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-3 gap-6"
              >
                <div>
                  <div className="text-3xl font-bold text-cyan-500 dark:text-cyan-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-fuchsia-500 dark:text-fuchsia-400">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-500 dark:text-cyan-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Avatar Container */}
                <motion.div
                  className="relative w-96 h-96 mx-auto"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Gradient Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 opacity-30 blur-3xl animate-pulse" />
                  
                  {/* Avatar Circle */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-cyan-400 p-2 shadow-lg shadow-cyan-500/50">
                    <div className="w-full h-full rounded-full bg-gray-900 dark:bg-black flex items-center justify-center overflow-hidden">
                      {/* Revolving Tech Globe */}
                      <motion.div
                        className="relative w-full h-full"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {/* Tech Globe Sphere */}
                        <div className="relative w-full h-full">
                          {/* Globe Base */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                            {/* Tech Grid Pattern */}
                            <svg className="w-full h-full" viewBox="0 0 400 400">
                              {/* Latitude Lines */}
                              {[0, 30, 60, 90, 120, 150, 180].map((lat, i) => (
                                <circle
                                  key={`lat-${i}`}
                                  cx="200"
                                  cy="200"
                                  r={200 - (lat * 200) / 180}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="0.5"
                                  className="text-cyan-500/30"
                                />
                              ))}
                              {/* Longitude Lines */}
                              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((lon, i) => {
                                const angle = (lon * Math.PI) / 180;
                                return (
                                  <line
                                    key={`lon-${i}`}
                                    x1={200 + 200 * Math.cos(angle)}
                                    y1={200 + 200 * Math.sin(angle)}
                                    x2={200 - 200 * Math.cos(angle)}
                                    y2={200 - 200 * Math.sin(angle)}
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-cyan-500/30"
                                  />
                                );
                              })}
                              {/* Tech Nodes */}
                              {Array.from({ length: 50 }).map((_, i) => {
                                const angle = (i * 360) / 50;
                                const radius = 150 + Math.random() * 50;
                                const x = 200 + radius * Math.cos((angle * Math.PI) / 180);
                                const y = 200 + radius * Math.sin((angle * Math.PI) / 180);
                                return (
                                  <circle
                                    key={`node-${i}`}
                                    cx={x}
                                    cy={y}
                                    r="2"
                                    fill="currentColor"
                                    className="text-cyan-500"
                                  />
                                );
                              })}
                              {/* Connection Lines */}
                              {Array.from({ length: 20 }).map((_, i) => {
                                const angle1 = (i * 360) / 20;
                                const angle2 = ((i + 5) * 360) / 20;
                                const r1 = 160;
                                const r2 = 170;
                                const x1 = 200 + r1 * Math.cos((angle1 * Math.PI) / 180);
                                const y1 = 200 + r1 * Math.sin((angle1 * Math.PI) / 180);
                                const x2 = 200 + r2 * Math.cos((angle2 * Math.PI) / 180);
                                const y2 = 200 + r2 * Math.sin((angle2 * Math.PI) / 180);
                                return (
                                  <line
                                    key={`line-${i}`}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-fuchsia-500/40"
                                  />
                                );
                              })}
                            </svg>
                          </div>
                          {/* Glowing Tech Ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.5)]" />
                          <div className="absolute inset-0 rounded-full border border-fuchsia-500/30 shadow-[0_0_20px_rgba(217,70,239,0.3)]" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Icons - Multiple Icons Around Avatar */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-900 rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center border-2 border-cyan-500/50 dark:border-cyan-500 z-10"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Rocket className="w-8 h-8 text-cyan-500" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-900 rounded-full shadow-lg shadow-fuchsia-500/50 flex items-center justify-center border-2 border-fuchsia-500/50 dark:border-fuchsia-500 z-10"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <Award className="w-8 h-8 text-fuchsia-500" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/4 -left-6 w-14 h-14 bg-white dark:bg-gray-900 rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center border-2 border-cyan-500/50 dark:border-cyan-500 z-10"
                    animate={{
                      x: [0, -5, 0],
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Zap className="w-7 h-7 text-cyan-500" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 -right-6 w-14 h-14 bg-white dark:bg-gray-900 rounded-full shadow-lg shadow-fuchsia-500/50 flex items-center justify-center border-2 border-fuchsia-500/50 dark:border-fuchsia-500 z-10"
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    <Sparkles className="w-7 h-7 text-fuchsia-500" />
                  </motion.div>

                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-900 rounded-full shadow-lg shadow-cyan-500/50 flex items-center justify-center border-2 border-cyan-500/50 dark:border-cyan-500 z-10"
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                  >
                    <StarIcon className="w-6 h-6 text-cyan-500" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-cyan-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white [text-shadow:0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(217,70,239,0.3)]">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8">
              I'm an app developer who specializes in designing and engineering digital solutions that
              make real-world impact. I blend UI/UX thinking with full-stack engineering to convert
              raw ideas into functional products that people love.
            </p>
            
            {/* Additional About Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 dark:from-cyan-500/20 dark:to-fuchsia-500/20 rounded-2xl border border-cyan-500/30 dark:border-cyan-500/50"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                What I Do
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Full-Stack Development</p>
                    <p>Building end-to-end solutions from mobile apps to web platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">UI/UX Design</p>
                    <p>Creating intuitive and beautiful user experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Performance Optimization</p>
                    <p>Ensuring fast, scalable, and efficient applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Best Practices</p>
                    <p>Following industry standards and clean code principles</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 mb-8">
              {[
                { icon: Code, label: "Clean Code", value: "100%" },
                { icon: Users, label: "Team Player", value: "Always" },
                { icon: TrendingUp, label: "Growth Mindset", value: "∞" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg shadow-cyan-500/20 border border-cyan-500/30 dark:border-cyan-500/50"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-cyan-500 dark:text-cyan-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Additional Icons Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { icon: Zap, label: "Fast Delivery", color: "yellow" },
                { icon: Target, label: "Precision", color: "blue" },
                { icon: Lightbulb, label: "Innovation", color: "orange" },
                { icon: Sparkles, label: "Excellence", color: "purple" },
                { icon: StarIcon, label: "Quality", color: "pink" },
                { icon: Palette, label: "Design", color: "indigo" },
                { icon: Cpu, label: "Performance", color: "green" },
                { icon: Code, label: "Clean Code", color: "teal" },
              ].map((item, index) => {
                const colorClasses = {
                  yellow: "text-yellow-500 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20",
                  blue: "text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
                  orange: "text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20",
                  purple: "text-purple-500 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
                  pink: "text-pink-500 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20",
                  indigo: "text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20",
                  green: "text-green-500 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
                  teal: "text-teal-500 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20",
                };
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 rounded-xl ${colorClasses[item.color as keyof typeof colorClasses]} flex flex-col items-center gap-2 cursor-pointer transition-all`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span className="text-xs font-medium text-center">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg shadow-cyan-500/20 border border-cyan-500/30 dark:border-cyan-500/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Bachelor's in Computer Science
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">University Name</p>
                    <p className="text-xs text-cyan-500 dark:text-cyan-400">2015 - 2019</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg shadow-fuchsia-500/20 border border-fuchsia-500/30 dark:border-fuchsia-500/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-fuchsia-500 dark:text-fuchsia-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Certifications
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Google Android Developer",
                    "AWS Certified Developer",
                    "React Professional",
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-fuchsia-500 dark:text-fuchsia-400" />
                      {cert}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/50"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white [text-shadow:0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(217,70,239,0.3)]"
          >
            Skills & Technologies
          </motion.h2>

          {/* Languages & Frameworks Logo Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-cyan-500 dark:text-cyan-400">
              Languages & Frameworks
            </h3>
            <LogoCloud logos={languageLogos} />
          </motion.div>

          {/* Databases & Backend Logo Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-fuchsia-500 dark:text-fuchsia-400">
              Databases & Backend
            </h3>
            <LogoCloud logos={backendLogos} />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white [text-shadow:0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(217,70,239,0.3)]"
          >
            Featured Projects
          </motion.h2>

          {/* Project Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col md:flex-row gap-4"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={projectSearch}
                onChange={(e) => setProjectSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-cyan-500/30 dark:border-cyan-500/50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["all", "Mobile App", "Web Platform", "Healthcare"].map((filter) => (
                <Button
                  key={filter}
                  variant={projectFilter === filter ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setProjectFilter(filter)}
                >
                  {filter === "all" ? (
                    <>
                      <Filter className="w-4 h-4" />
                      All
                    </>
                  ) : (
                    filter
                  )}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Project Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Total Projects", value: "50+", icon: Briefcase },
              { label: "Happy Clients", value: "30+", icon: Users },
              { label: "Years Experience", value: "5+", icon: Calendar },
              { label: "Countries", value: "10+", icon: Globe },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-cyan-500/30 dark:border-cyan-500/50 shadow-lg shadow-cyan-500/20"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-cyan-500 dark:text-cyan-400" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => {
                const matchesFilter =
                  projectFilter === "all" || project.category === projectFilter;
                const matchesSearch =
                  projectSearch === "" ||
                  project.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
                  project.description.toLowerCase().includes(projectSearch.toLowerCase()) ||
                  project.tech.some((tech) =>
                    tech.toLowerCase().includes(projectSearch.toLowerCase())
                  );
                return matchesFilter && matchesSearch;
              })
              .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-cyan-500/30 dark:border-cyan-500/50 hover:shadow-2xl hover:shadow-fuchsia-500/30 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-cyan-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 dark:bg-cyan-500/30 text-cyan-500 dark:text-cyan-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-full"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white [text-shadow:0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(217,70,239,0.3)]"
          >
            Client Testimonials
          </motion.h2>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white [text-shadow:0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(217,70,239,0.3)]"
          >
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-cyan-500/30 dark:border-cyan-500/50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-cyan-500/30 dark:border-cyan-500/50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-cyan-500/30 dark:border-cyan-500/50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white rounded-full shadow-lg shadow-cyan-500/50"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Availability Status */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-900/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Available for Work
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently accepting new projects. Response time: Within 24 hours
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg shadow-cyan-500/20 border border-cyan-500/30 dark:border-cyan-500/50">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full flex items-center justify-center border border-cyan-500/50">
                      <Mail className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <a 
                        href="mailto:trivedidhruv127.dev@gmail.com"
                        className="font-medium text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        trivedidhruv127.dev@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fuchsia-500/20 dark:bg-fuchsia-500/30 rounded-full flex items-center justify-center border border-fuchsia-500/50">
                      <Phone className="w-6 h-6 text-fuchsia-500 dark:text-fuchsia-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <a 
                        href="tel:+919999999999"
                        className="font-medium text-gray-900 dark:text-white hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition-colors"
                      >
                        +91 99999 99999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full flex items-center justify-center border border-cyan-500/50">
                      <MapPin className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-cyan-500/30 dark:border-cyan-500/50">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Follow me on social media
                  </p>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "#", label: "GitHub" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full flex items-center justify-center hover:bg-cyan-500/30 dark:hover:bg-cyan-500/50 transition-all hover:scale-110 border border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/50"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-black dark:from-black dark:via-gray-950 dark:to-black text-white overflow-hidden border-t border-cyan-500/20">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Dhruv Trivedi
                  </span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
                  Full-stack developer passionate about creating digital experiences that make a difference. 
                  Turning complex problems into elegant solutions.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                    { icon: Mail, href: "mailto:trivedidhruv127.dev@gmail.com", label: "Email" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-bold mb-6 text-xl"
              >
                Navigation
              </motion.h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-bold mb-6 text-xl"
              >
                Get In Touch
              </motion.h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:trivedidhruv127.dev@gmail.com" className="hover:text-cyan-400 transition-colors">
                    trivedidhruv127.dev@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-fuchsia-400" />
                  <span>Available Worldwide</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>Remote & On-site</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
                <p className="text-gray-300">Get notified about new projects and updates</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white rounded-lg shadow-lg shadow-cyan-500/50"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <p>© {new Date().getFullYear()} Dhruv Trivedi. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-fuchsia-400 fill-fuchsia-400 animate-pulse" />
                  <span>and</span>
                  <Coffee className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
