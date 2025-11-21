import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Filter, Search, ExternalLink, Github, Briefcase, Users, Calendar, Globe } from "lucide-react";
import { Project } from "../types/content";

interface ProjectsSectionProps {
  projects: Project[];
  projectFilter: string;
  onFilterChange: (filter: string) => void;
  projectSearch: string;
  onSearchChange: (value: string) => void;
}

export const ProjectsSection = ({
  projects,
  projectFilter,
  onFilterChange,
  projectSearch,
  onSearchChange,
}: ProjectsSectionProps) => {
  const filteredProjects = projects.filter((project) => {
    const matchesFilter = projectFilter === "all" || project.category === projectFilter;
    const lowerSearch = projectSearch.toLowerCase();
    const matchesSearch =
      lowerSearch === "" ||
      project.title.toLowerCase().includes(lowerSearch) ||
      project.description.toLowerCase().includes(lowerSearch) ||
      project.tech.some((tech) => tech.toLowerCase().includes(lowerSearch));
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { label: "Total Projects", icon: Briefcase },
    { label: "Happy Clients", icon: Users },
    { label: "Years Experience", icon: Calendar },
    { label: "Countries", icon: Globe },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white/80 dark:bg-black/40 backdrop-blur-2xl border-y border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search projects..."
              value={projectSearch}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-black/10 dark:focus:ring-white outline-none"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["all", "Mobile App", "Web Platform", "Healthcare", "AI/ML"].map((filter) => (
              <Button
                key={filter}
                variant={projectFilter === filter ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${projectFilter === filter
                  ? "bg-gray-900 text-white hover:bg-black"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-white/30 dark:text-gray-200 dark:hover:bg-white/10"
                  }`}
                onClick={() => onFilterChange(filter)}
              >
                {filter === "all" ? (
                  <>
                    <Filter className="w-4 h-4 mr-1" />
                    All
                  </>
                ) : (
                  filter
                )}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-white dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/40"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-gray-900 dark:text-white" />
              <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-white/10 rounded-3xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/40 border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-black/70 transition-all duration-300"
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
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors" />
                <div className="absolute top-4 right-4">
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
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-900 dark:bg-white/15 dark:text-white rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200 rounded-full text-xs font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-full text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
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
  );
};

