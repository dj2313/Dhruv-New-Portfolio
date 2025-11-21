import React, { useEffect, useMemo, useState, Suspense } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Home, User, Layers, Briefcase, Mail } from "lucide-react";
import { SpaceBackground } from "./components/SpaceBackground";
import { StarsCanvas } from "./components/Stars";
import { ModernNavbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { projects, languageLogos, backendLogos } from "./data/content";

const AboutSection = React.lazy(() => import("./sections/AboutSection").then((mod) => ({ default: mod.AboutSection })));
const SkillsSection = React.lazy(() => import("./sections/SkillsSection").then((mod) => ({ default: mod.SkillsSection })));
const ProjectsSection = React.lazy(() =>
  import("./sections/ProjectsSection").then((mod) => ({ default: mod.ProjectsSection }))
);
const ContactSection = React.lazy(() =>
  import("./sections/ContactSection").then((mod) => ({ default: mod.ContactSection }))
);
const FooterSection = React.lazy(() =>
  import("./sections/FooterSection").then((mod) => ({ default: mod.FooterSection }))
);

const sectionIds = ["home", "about", "skills", "projects", "contact"] as const;

const PortfolioWebsite = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [projectSearch, setProjectSearch] = useState("");
  const [activeSection, setActiveSection] = useState<string>("home");

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.6]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home", icon: Home },
      { name: "About", href: "#about", icon: User },
      { name: "Skills", href: "#skills", icon: Layers },
      { name: "Projects", href: "#projects", icon: Briefcase },
      { name: "Contact", href: "#contact", icon: Mail },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .map((entry) => entry.target.id)[0];
        if (visible) {
          setActiveSection(visible);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.2, 0.5, 0.75] }
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToSection = (id: string) => {
    const normalized = id.startsWith("#") ? id.substring(1) : id;
    const element = document.getElementById(normalized);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeNavName = useMemo(() => {
    const match = navItems.find((item) => item.href.replace("#", "") === activeSection);
    return match?.name ?? "Home";
  }, [activeSection, navItems]);

  return (
    <div className="min-h-screen relative overflow-x-hidden text-gray-900 dark:text-gray-50 bg-white dark:bg-black">
      <SpaceBackground scrollY={scrollY} />
      <StarsCanvas />
      <ModernNavbar activeSection={activeNavName} onNavigate={scrollToSection} items={navItems} />

      <HeroSection heroOpacity={heroOpacity} heroScale={heroScale} scrollToSection={scrollToSection} />
      <Suspense fallback={<div className="py-24 text-center text-white/60">Loading...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="py-24 text-center text-white/60">Loading...</div>}>
        <SkillsSection languageLogos={languageLogos} backendLogos={backendLogos} />
      </Suspense>
      <Suspense fallback={<div className="py-24 text-center text-white/60">Loading...</div>}>
        <ProjectsSection
          projects={projects}
          projectFilter={projectFilter}
          onFilterChange={setProjectFilter}
          projectSearch={projectSearch}
          onSearchChange={setProjectSearch}
        />
      </Suspense>
      <Suspense fallback={<div className="py-24 text-center text-white/60">Loading...</div>}>
        <ContactSection formData={formData} onChange={handleInputChange} onSubmit={handleSubmit} formSubmitted={formSubmitted} />
      </Suspense>
      <Suspense fallback={<div className="py-12 text-center text-white/60">Loading footer...</div>}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default PortfolioWebsite;

