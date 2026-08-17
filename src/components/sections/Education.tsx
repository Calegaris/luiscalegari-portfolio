"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="formacion"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 sm:mb-16 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <GraduationCap className="w-4 h-4" />
          <span>Rigor Universitario</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Formación Académica
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Estudiante avanzado en informática y desarrollo web en la Universidad Nacional del Oeste (UNO), con sólido rendimiento académico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {education.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative rounded-2xl p-6 lg:p-8 bg-slate-900/60 border border-slate-800/90 hover:border-sky-500/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              {/* Header / Institution */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{item.institution}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {item.degree}
                  </h3>
                </div>

                <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {item.period}
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Materias Aprobadas</div>
                  <div className="text-lg sm:text-xl font-bold text-white mt-1 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-sky-400" />
                    <span>{item.subjectsCompleted}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Promedio Académico</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{item.gpa} / 10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* University Plan Button Link */}
            {item.programUrl && (
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-400">Plan de estudios oficial</span>
                <a
                  href={item.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white bg-sky-500/10 hover:bg-sky-600/30 border border-sky-500/20 hover:border-sky-400/50 px-3 py-1.5 rounded-lg transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label={`Ver plan de carrera de ${item.degree} en la Universidad Nacional del Oeste`}
                >
                  <span>Ver carrera en UNO</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
