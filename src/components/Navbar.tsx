import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Home, Briefcase, Mail, User, Code } from "lucide-react";
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
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  items = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ],
  logo = { text: "Dhruv Trivedi's Portfolio", href: "#home" },
  className = "",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const navHeight = useTransform(scrollY, [0, 100], [80, 60]);
  const navPadding = useTransform(scrollY, [0, 100], [24, 16]);
  const logoSize = useTransform(scrollY, [0, 100], [1, 0.85]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.8, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

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
        style={{ opacity: navOpacity }}
        className={`h-full mx-auto max-w-7xl backdrop-blur-md bg-background/80 dark:bg-gray-900/80 border border-border rounded-full shadow-lg transition-all duration-300 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <div className="h-full flex items-center justify-between px-6">
          <motion.a
            href={logo.href}
            style={{ scale: logoSize }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(logo.href);
            }}
            className="flex items-center space-x-2 font-bold text-xl text-foreground"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Code className="text-white text-sm" size={16} />
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {logo.text}
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    setActiveSection(item.name);
                    scrollToSection(item.href);
                  }}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
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
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setActiveSection(item.name);
                        scrollToSection(item.href);
                      }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.name
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "text-muted-foreground hover:bg-muted"
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

