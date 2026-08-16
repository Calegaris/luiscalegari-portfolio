"use client";

import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  Layout, 
  Wrench, 
  Layers, 
  Sparkles
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";
import { getTechIcon } from "@/src/components/icons/TechIcons";

export function TechStack() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "backend":
        return <Server className="w-5 h-5 text-sky-400" />;
      case "bases de datos":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "frontend":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "infraestructura & herramientas":
      case "herramientas":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 sm:mb-16 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <Sparkles className="w-4 h-4" />
          <span>Ecosistema & Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Habilidades Técnicas
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Especialización principal en arquitecturas backend robustas, persistencia eficiente y microservicios, complementado con conocimientos en frontend moderno e infraestructura cloud.
        </p>
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {skillCategories.map((categoryGroup) => {
          const isBackend = categoryGroup.category.toLowerCase().includes("backend");

          return (
            <motion.div
              key={categoryGroup.category}
              variants={itemVariants}
              className={`rounded-2xl p-6 lg:p-8 backdrop-blur-md transition-all duration-300 ${
                isBackend
                  ? "bg-[#091a33]/90 border border-sky-500/30 shadow-xl shadow-sky-950/30"
                  : "bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {categoryGroup.skills.length} tecnologías
                    </span>
                  </div>
                </div>

                {isBackend && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    Core Focus
                  </span>
                )}
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categoryGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/30 transition-all duration-200 cursor-default"
                  >
                    <div className="shrink-0 flex items-center justify-center">
                      {getTechIcon(skill.name, "w-4 h-4")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate block">
                        {skill.name}
                      </span>
                    </div>

                    {skill.tooltip && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 px-2.5 py-1 text-[11px] font-medium text-white bg-slate-950 border border-slate-700 rounded-md shadow-xl whitespace-nowrap pointer-events-none">
                        {skill.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
