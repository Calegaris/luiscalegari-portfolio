"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Lock, 
  Sparkles, 
  ShieldCheck, 
  QrCode, 
  Clock, 
  Layers,
  ExternalLink,
  CheckCircle2,
  Code2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { portfolioData, ProjectCaseStudy } from "@/src/data/portfolioData";
import { GitHubIcon } from "@/src/components/icons/SocialIcons";

export function ProjectsGrid() {
  const featuredProject = portfolioData.projects.find((p) => p.featured) || portfolioData.projects[0];
  const standardProjects = portfolioData.projects.filter((p) => !p.featured);

  // Carousel state: slide index (0 to standardProjects.length - 1 on mobile, or based on window)
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= standardProjects.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? standardProjects.length - 1 : prev - 1));
  };

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

      <div className="space-y-14 lg:space-y-20">
        {/* 1. FEATURED FLAGSHIP CARD (GoGym) */}
        {featuredProject && (
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
                  {featuredProject.category || "Proyecto Insignia Integrador"}
                </span>
                <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {featuredProject.status}
                </span>
              </div>

              <span className="text-xs text-slate-400 font-mono">
                Duración: {featuredProject.duration}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
              {/* Left: Image / Mockup preview */}
              <div className="lg:col-span-5 relative group">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group-hover:border-sky-500/40 transition-colors duration-300">
                  <Image
                    src={featuredProject.thumbnail}
                    alt={`Captura del proyecto ${featuredProject.title}`}
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
                    {featuredProject.role}
                  </span>
                  <span>NestJS + MongoDB Atlas</span>
                </div>
              </div>

              {/* Right: Info & Deep Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {featuredProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.shortDescription}
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
                    {featuredProject.technologies.map((tech) => (
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
                    href={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 hover:from-sky-500 hover:to-blue-600 shadow-lg shadow-sky-600/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <span>Ver Case Study Técnico</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {!featuredProject.repoPublic && (
                    <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/80 text-slate-400 border border-slate-800 cursor-not-allowed select-none">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Repo Privado (SaaS)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. SCALABLE CAROUSEL FOR OTHER PROJECTS */}
        {standardProjects.length > 0 && (
          <div className="space-y-6">
            {/* Carousel Header with Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-sky-400" />
                  <span>Otros Proyectos & Desarrollos</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Explorá el catálogo de proyectos y APIs desarrolladas con diversas tecnologías.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-sky-500/40 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Proyecto anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-sky-500/40 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="Proyecto siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop & Tablet Carousel Track (Grid with Slide Offset) */}
            <div className="relative overflow-hidden py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                  {/* Item 1: Current Item */}
                  {standardProjects[currentIndex] && (
                    <ProjectCard project={standardProjects[currentIndex]} />
                  )}

                  {/* Item 2: Next Item in loop for dual-card view on desktop */}
                  {standardProjects.length > 1 && (
                    <div className="hidden md:block">
                      <ProjectCard
                        project={
                          standardProjects[(currentIndex + 1) % standardProjects.length]
                        }
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {standardProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-sky-400 shadow-sm shadow-sky-400/50"
                      : "w-2 bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-label={`Ir al proyecto ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

{/* Individual Project Card Component */}
function ProjectCard({ project }: { project: ProjectCaseStudy }) {
  return (
    <div className="group h-full rounded-2xl p-6 bg-slate-900/60 border border-slate-800/90 hover:border-sky-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl shadow-black/40 hover:shadow-sky-950/20">
      <div className="space-y-5">
        {/* Card Header: Category badge & Duration */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            {project.category || "Backend API"}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {project.duration}
          </span>
        </div>

        {/* Image / Thumbnail Preview */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
          <Image
            src={project.thumbnail}
            alt={`Captura de ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-medium">
            <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-slate-800 text-slate-300">
              {project.role}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {project.status}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
            {project.highlights.slice(0, 3).map((item, hIdx) => (
              <li key={hIdx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions / Links */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
        {project.repoPublic && (project.repoUrl || project.githubUrl) ? (
          <a
            href={project.repoUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all hover:border-slate-600"
            aria-label={`Ver código de ${project.title} en GitHub`}
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>Ver Código</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-slate-500 bg-slate-900 border border-slate-800 cursor-not-allowed">
            <Lock className="w-3 h-3" />
            <span>Código Privado</span>
          </span>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border border-sky-500/30 transition-all"
            aria-label={`Ver demo o documentación de ${project.title}`}
          >
            <span>Demo / Docs</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}
