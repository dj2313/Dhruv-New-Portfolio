import { motion } from "framer-motion";
import { Code, Users, TrendingUp, Award, GraduationCap, CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const focusAreas = [
    { title: "Full-Stack Development", description: "Shipping polished mobile + web experiences end-to-end.", icon: Code },
    { title: "UI/UX Systems", description: "Building scalable design systems and intuitive flows.", icon: Users },
    { title: "Performance & Reliability", description: "Benchmarking, observability, and responsive performance tuning.", icon: TrendingUp },
    { title: "Quality Engineering", description: "Clean architecture, testing discipline, and maintainable codebases.", icon: Award },
  ];

  const quickFacts = [
    { label: "Clean Code", value: "100%", icon: Code },
    { label: "Team Player", value: "Always", icon: Users },
    { label: "Growth Mindset", value: "∞", icon: TrendingUp },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white/80 dark:bg-black/40 backdrop-blur-2xl border-t border-b border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed text-center mb-10 max-w-3xl mx-auto">
            I combine product thinking with engineering craft to turn rough concepts into production-ready software. My process is equal parts
            discovery, rapid prototyping, and rigorous quality so teams can launch confidently.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/40"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Focus Areas</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-100">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900/10 dark:bg-white/15 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {quickFacts.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-white/10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/40"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gray-900/10 dark:bg-white/15 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{item.value}</div>
                <div className="text-base text-gray-600 dark:text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/10 rounded-3xl p-8 shadow-xl shadow-black/10 dark:shadow-black/40 border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gray-900/10 dark:bg-white/15 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">Bachelor's in Computer Engineering</h4>
                <p className="text-base text-gray-700 dark:text-gray-300 mt-1">SPEC</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-2">2021-2024</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/10 rounded-3xl p-8 shadow-xl shadow-black/10 dark:shadow-black/40 border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gray-900/10 dark:bg-white/15 flex items-center justify-center">
                  <Award className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {[
                  "SAP Cloud Analytics, IoT & Cyber Security",
                  "Game Development - Bug Solving (Electronic Arts)",
                  "Software Engineering - REST APIs & Kafka (JP Morgan Chase & Co.)",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                    <CheckCircle className="w-5 h-5 text-gray-900 dark:text-white flex-shrink-0" />
                    <span className="text-base text-gray-700 dark:text-gray-200">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

