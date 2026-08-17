"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Milestone, 
  Zap, 
  Radio, 
  GitMerge, 
  Mail,
  CheckCircle2,
  Flame,
  ArrowLeft
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export function RoadmapSection() {
  const project = portfolioData.projects.find((p) => p.slug === "gogym") || portfolioData.projects[0];
  const { roadmap } = project;

  if (!roadmap) return null;

  const getPhaseIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-5 h-5 text-[#ff7a00]" />;
      case 1:
        return <Radio className="w-5 h-5 text-white" />;
      case 2:
        return <GitMerge className="w-5 h-5 text-amber-400" />;
      default:
        return <Milestone className="w-5 h-5 text-[#ff7a00]" />;
    }
  };

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff8e26]">
          <Milestone className="w-4 h-4 text-[#ff7a00]" />
          <span>Visión & Escalabilidad</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Roadmap Técnico & Evolución de Arquitectura
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl">
          Estrategias planificadas para soportar alta concurrencia, integración de pagos automatizados y evolución hacia microservicios distribuidos.
        </p>
      </div>

      {/* Roadmap Phases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {roadmap.map((phaseItem, idx) => (
          <motion.div
            key={phaseItem.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 lg:p-8 rounded-2xl bg-gradient-to-b from-zinc-950 via-[#13141b] to-zinc-950 border border-zinc-800 hover:border-orange-500/40 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-xl shadow-black/50 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Phase Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner">
                  {getPhaseIcon(idx)}
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-200 border border-zinc-800">
                  {phaseItem.phase}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white leading-snug">
                {phaseItem.title}
              </h3>

              {/* Items List */}
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-zinc-300">
                {phaseItem.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call To Action Card with GoGym Branding & Portfolio link */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#181922] via-zinc-950 to-black border border-orange-500/30 text-center space-y-6 shadow-2xl shadow-orange-950/20 overflow-hidden">
        {/* Glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#ff7a00]/10 rounded-full blur-[100px] pointer-events-none -z-10" 
          aria-hidden="true"
        />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#ff7a00]/10 text-[#ff8e26] border border-orange-500/20">
          <Flame className="w-3.5 h-3.5" />
          <span>Backend Engineer Portfolio Case Study</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white max-w-2xl mx-auto">
          ¿Buscás un Desarrollador Backend con sólida capacidad técnica y criterio arquitectónico?
        </h3>
        <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Estoy listo para aportar valor en proyectos desafiantes utilizando Java (Spring Boot), Node.js (NestJS) y soluciones cloud escalables.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Primary Action: GoGym Vibrant Orange */}
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-[#ff9500] via-[#ff7a00] to-[#ff5500] hover:from-[#ff8500] hover:to-[#ff4500] shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Contactame para Propuestas</span>
          </Link>

          {/* Secondary Action: Returns to portfolio with Sky blue accent on hover */}
          <Link
            href="/#proyectos"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 hover:text-sky-300 bg-zinc-900/90 hover:bg-sky-950/40 border border-zinc-800 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/20 transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-sky-400 group-hover:-translate-x-1 transition-all" />
            <span>Volver a Proyectos</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
