import { motion } from "framer-motion";
import { Logo } from "../types/content";
import { LogoCloud } from "../components/ui/logo-cloud-4";

interface SkillsSectionProps {
  languageLogos: Logo[];
  backendLogos: Logo[];
}

export const SkillsSection = ({ languageLogos, backendLogos }: SkillsSectionProps) => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white/80 dark:bg-black/40 backdrop-blur-2xl border-y border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Languages & Frameworks</h3>
          <LogoCloud logos={languageLogos} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Databases & Backend</h3>
          <LogoCloud logos={backendLogos} />
        </motion.div>
      </div>
    </section>
  );
};

