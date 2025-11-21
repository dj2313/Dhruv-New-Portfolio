import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Home, Briefcase, Mail, User, Code, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface ModernNavbarProps {
  items?: NavItem[];
  logo?: {
    text: string;
    href: string;
  };
  className?: string;
  activeSection?: string;
  onNavigate?: (href: string) => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  items = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Layers },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ],
  logo = { text: "Dhruv Trivedi's Portfolio", href: "#home" },
  className = "",
  activeSection = "Home",
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const navHeight = useTransform(scrollY, [0, 100], [80, 56]);
  const navPadding = useTransform(scrollY, [0, 100], [24, 12]);
  const logoSize = useTransform(scrollY, [0, 100], [1, 0.8]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.92, 0.96]);
  const navBlur = useTransform(scrollY, [0, 50], [12, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  }, []);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(href);
      } else {
        scrollToSection(href);
      }
    },
    [onNavigate, scrollToSection]
  );

  const handleNavItemClick = useCallback(
    (href: string) => {
      if (onNavigate) {
        onNavigate(href);
      } else {
        scrollToSection(href);
      }
    },
    [onNavigate, scrollToSection]
  );

  const handleMobileNavItemClick = useCallback(
    (href: string) => {
      handleNavItemClick(href);
      setMobileMenuOpen(false);
    },
    [handleNavItemClick]
  );

  return (
    <motion.nav
      ref={navRef}
      style={{
        height: navHeight,
        paddingLeft: navPadding,
        paddingRight: navPadding,
      }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${className}`}
    >
      <motion.div
        style={{
          opacity: navOpacity,
        }}
        className={`h-full mx-auto max-w-7xl backdrop-blur-xl bg-white/80 dark:bg-black/70 text-gray-900 dark:text-white border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-lg transition-all duration-300 ${isScrolled ? "shadow-xl shadow-black/20 dark:shadow-black/40" : ""
          }`}
      >
        <div className="h-full flex items-center justify-between px-6">
          <motion.a
            href={logo.href}
            style={{ scale: logoSize }}
            onClick={(e) => handleLogoClick(e, logo.href)}
            className="flex items-center space-x-2 font-bold text-xl"
            aria-label="Go to home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 rounded-xl flex items-center justify-center shadow-md">
              <Code className="text-white dark:text-black text-sm" size={20} />
            </div>
            <span className="hidden sm:inline font-bold text-xl">
              {logo.text}
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-2">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavItemClick(item.href)}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`relative z-10 flex items-center gap-2 ${isActive
                        ? "text-white dark:text-black"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gray-900 dark:bg-white rounded-xl shadow-md"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-xl" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] rounded-l-2xl border-l border-border">
              <div className="flex flex-col space-y-4 mt-8">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleMobileNavItemClick(item.href)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeSection === item.name
                          ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-md"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                        }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  );
                })}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between px-4">
                    <span className="text-sm font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.nav>
  );
};