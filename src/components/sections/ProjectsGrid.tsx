"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Lock, 
  Sparkles, 
  ShieldCheck, 
  QrCode, 
  Clock, 
  Layers
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export function ProjectsGrid() {
  const gogymProject = portfolioData.projects.find((p) => p.slug === "gogym") || portfolioData.projects[0];

  return (
    <section
      id="proyectos"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 sm:mb-16 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <Layers className="w-4 h-4" />
          <span>Ingeniería de Software & Arquitectura</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Proyectos & Case Studies
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Soluciones de software productivas desarrolladas desde cero, con énfasis en seguridad, consistencia de datos y rendimiento de backend.
        </p>
      </div>

      {/* Featured Flagship Card: GoGym */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-gradient-to-b from-[#091a33] to-[#061325] border border-sky-500/30 overflow-hidden shadow-2xl shadow-sky-950/40 p-6 sm:p-8 lg:p-10"
      >
        {/* Top Tag & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff7a00]/15 text-[#ff9833] border border-[#ff7a00]/30">
              Proyecto Técnico Integrador
            </span>
            <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {gogymProject.status}
            </span>
          </div>

          <span className="text-xs text-slate-400 font-mono">
            Duración: {gogymProject.duration}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
          {/* Left: Image / Mockup preview */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group-hover:border-sky-500/40 transition-colors duration-300">
              <Image
                src={gogymProject.thumbnail}
                alt={`Captura del proyecto ${gogymProject.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Quick Badge Under Image */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-sky-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                {gogymProject.role}
              </span>
              <span>NestJS + MongoDB Atlas</span>
            </div>
          </div>

          {/* Right: Info & Deep Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {gogymProject.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {gogymProject.shortDescription}
              </p>
            </div>

            {/* Backend Highlights List */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Aspectos Destacados de Ingeniería Backend:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Auth JWT & Roles RBAC (Admin/Client)</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <QrCode className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Check-in / Tótem QR en Tiempo Real</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Cron Jobs para Expiración de Planes</span>
                </li>
                <li className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>CI/CD Pipeline Automatizado en Render</span>
                </li>
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-wrap gap-2">
                {gogymProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/projects/gogym"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 hover:from-sky-500 hover:to-blue-600 shadow-lg shadow-sky-600/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Ver Case Study Técnico</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/80 text-slate-400 border border-slate-800 cursor-not-allowed select-none">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Repo Privado (SaaS)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
