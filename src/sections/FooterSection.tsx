import { motion } from "framer-motion";
import { Code, Mail, MapPin, Globe, Heart, Coffee, Github, Linkedin, Twitter } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden border-t border-white/10">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/40">
                <Code className="w-7 h-7 text-black" />
              </div>
              <span className="text-3xl font-bold">Dhruv Trivedi</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Full-stack developer passionate about creating digital experiences that make a difference. Turning complex problems into elegant solutions.
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
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/20 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:trivedidhruv127.dev@gmail.com" className="hover:text-white transition-colors">
                  trivedidhruv127.dev@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-white" />
                <span>Available Worldwide</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Globe className="w-5 h-5 text-white" />
                <span>Remote & On-site</span>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-white/10"
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
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white shadow-sm shadow-white/10"
              />
              <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/30">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border-t border-white/10 pt-8">
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
                <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

