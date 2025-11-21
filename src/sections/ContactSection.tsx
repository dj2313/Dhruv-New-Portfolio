import { motion } from "framer-motion";
import { FormEvent } from "react";
import { Button } from "../components/ui/button";
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter } from "lucide-react";

interface ContactSectionProps {
  formData: { name: string; email: string; message: string };
  onChange: (field: "name" | "email" | "message", value: string) => void;
  onSubmit: (e: FormEvent) => void;
  formSubmitted: boolean;
}

export const ContactSection = ({ formData, onChange, onSubmit, formSubmitted }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-24 px-6 bg-white/80 dark:bg-black/40 backdrop-blur-2xl border-y border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={onSubmit} className="space-y-6">
              {[
                { label: "Name", type: "text", field: "name" as const },
                { label: "Email", type: "email", field: "email" as const },
              ].map((input) => (
                <div key={input.field}>
                  <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">{input.label}</label>
                  <input
                    type={input.type}
                    value={formData[input.field]}
                    onChange={(e) => onChange(input.field, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-black/20 dark:focus:ring-white outline-none transition-all shadow-sm shadow-black/10 dark:shadow-black/40"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-black/20 dark:focus:ring-white outline-none transition-all resize-none shadow-sm shadow-black/10 dark:shadow-black/40"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-2xl shadow-xl shadow-black/20 dark:shadow-black/40 hover:shadow-2xl hover:shadow-black/30 dark:hover:shadow-black/60 transition-all duration-300"
              >
                {formSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-semibold text-gray-900 dark:text-white">Available for Work</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Currently accepting new projects. Response time: Within 24 hours.</p>
            </div>

            <div className="bg-white dark:bg-white/10 rounded-3xl p-8 shadow-xl shadow-black/10 dark:shadow-black/40 border border-gray-200 dark:border-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

              <div className="space-y-4">
                {[
                  {
                    label: "Email",
                    value: "trivedidhruv127.dev@gmail.com",
                    icon: Mail,
                    href: "mailto:trivedidhruv127.dev@gmail.com",
                  },
                  { label: "Location", value: "Available Worldwide", icon: MapPin },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center border border-gray-300 dark:border-white/20">
                      <item.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium.text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/dj2313/", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/trivedi-dhruv127/", label: "LinkedIn" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition-all hover:scale-110 border border-gray-300 dark:border-white/20"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-900 dark:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

