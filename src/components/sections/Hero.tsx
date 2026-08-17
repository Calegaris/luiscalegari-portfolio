"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  ArrowDown, 
  Server, 
  ShieldCheck, 
  Database,
  ExternalLink 
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";
import { 
  LinkedInIcon, 
  GitHubIcon 
} from "@/src/components/icons/SocialIcons";

export function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Gradients & Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 shadow-lg shadow-sky-950/40 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-slate-200">Disponible para nuevos desafíos</span>
        </motion.div>

        {/* Main Title & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            Hola, soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-blue-500">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 max-w-3xl mx-auto">
            Desarrollador{" "}
            <span className="text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
              Full Stack
            </span>{" "}
            especializado en APIs RESTful y arquitecturas escalables
          </p>

          <p className="text-sm sm:text-base text-slate-400 font-mono max-w-2xl mx-auto pt-2">
            Java (Spring Boot) · Node.js (NestJS) · TypeScript · SQL & NoSQL · Oracle Cloud OCI
          </p>
        </motion.div>

        {/* Feature Highlights Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-slate-300"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
            <Server className="w-3.5 h-3.5 text-sky-400" />
            <span>Inyección de Dependencias</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Auth JWT & RBAC</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span>MongoDB & PostgreSQL</span>
          </div>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 hover:from-sky-500 hover:to-blue-600 shadow-lg shadow-sky-600/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <FileText className="w-5 h-5" />
            <span>Mirá mi CV</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>

          <a
            href="#proyectos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span>Ver Proyectos</span>
            <ArrowDown className="w-4 h-4 text-sky-400" />
          </a>
        </motion.div>

        {/* Quick Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 pt-6 text-slate-400"
        >
          <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Perfiles:</span>
          <a
            href="https://www.linkedin.com/in/luis-angel-calegari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Luis Calegari"
            className="p-2 rounded-lg bg-slate-900/60 hover:bg-sky-500/10 text-slate-400 hover:text-sky-300 border border-slate-800 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Calegaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Luis Calegari"
            className="p-2 rounded-lg bg-slate-900/60 hover:bg-sky-500/10 text-slate-400 hover:text-sky-300 border border-slate-800 transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
