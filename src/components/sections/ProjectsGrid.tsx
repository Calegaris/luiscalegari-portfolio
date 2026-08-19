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
  ChevronRight,
  Users,
  Filter,
  Play,
  Trophy
} from "lucide-react";
import { portfolioData, ProjectCaseStudy } from "@/src/data/portfolioData";
import { GitHubIcon } from "@/src/components/icons/SocialIcons";

// Toggle flag para activar/desactivar temporalmente el proyecto destacado (GoGym)
const SHOW_FEATURED_PROJECT = false;

export function ProjectsGrid() {
  const featuredProject = SHOW_FEATURED_PROJECT
    ? portfolioData.projects.find((p) => p.featured)
    : null;
  const standardProjects = portfolioData.projects.filter((p) => !p.featured);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Dynamic filter categories calculation
  const categoryOrder = ["Todos", "Backend", "Full Stack", "Frontend"];
  const availableCategories = categoryOrder.filter((cat) => {
    if (cat === "Todos") return true;
    return standardProjects.some((p) => p.filterCategories?.includes(cat));
  });

  const getCategoryCount = (cat: string) => {
    if (cat === "Todos") return standardProjects.length;
    return standardProjects.filter((p) => p.filterCategories?.includes(cat)).length;
  };

  const filteredProjects = selectedCategory === "Todos"
    ? standardProjects
    : standardProjects.filter((p) => p.filterCategories?.includes(selectedCategory));

  // Carousel pagination: advances 2-by-2 (page-by-page) on filtered list
  const ITEMS_PER_PAGE = 2;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (totalPages <= 1) return;
    setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const prevPage = () => {
    if (totalPages <= 1) return;
    setCurrentPage((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentPair = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff7a00]/15 text-[#ff9833] border border-[#ff7a00]/30">
                  {featuredProject.category || "Proyecto Insignia Integrador"}
                </span>
                {featuredProject.teamSize && featuredProject.teamSize > 1 && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>Equipo ({featuredProject.teamSize} devs)</span>
                  </span>
                )}
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
                    priority
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

        {/* 2. SCALABLE CAROUSEL FOR OTHER PROJECTS WITH CATEGORY FILTER */}
        {standardProjects.length > 0 && (
          <div className="space-y-6">
            {/* Carousel Header & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-800/80">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-sky-400" />
                  <span>Otros Proyectos & Desarrollos</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Filtrá por tipo de arquitectura y explorá los proyectos desarrollados.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-start md:self-auto">
                <button
                  onClick={prevPage}
                  disabled={totalPages <= 1}
                  className={`p-2.5 rounded-xl border transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    totalPages <= 1
                      ? "bg-slate-900/40 text-slate-600 border-slate-900 cursor-not-allowed"
                      : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800 hover:border-sky-500/40"
                  }`}
                  aria-label="Página anterior de proyectos"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextPage}
                  disabled={totalPages <= 1}
                  className={`p-2.5 rounded-xl border transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    totalPages <= 1
                      ? "bg-slate-900/40 text-slate-600 border-slate-900 cursor-not-allowed"
                      : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800 hover:border-sky-500/40"
                  }`}
                  aria-label="Página siguiente de proyectos"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Pills Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 mr-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <Filter className="w-3.5 h-3.5" />
                <span>Filtrar:</span>
              </div>
              {availableCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = getCategoryCount(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(0);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      isSelected
                        ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 border border-sky-400"
                        : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[11px] font-mono ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop & Mobile Carousel Track (2-by-2 Page Grid) */}
            <div className="relative overflow-hidden py-2 min-h-[350px]">
              <AnimatePresence mode="wait">
                {currentPair.length > 0 ? (
                  <motion.div
                    key={`${selectedCategory}-${currentPage}`}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                  >
                    {currentPair.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800"
                  >
                    <p className="text-slate-400 text-sm">
                      No hay proyectos bajo esta categoría en este momento.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Indicator Dots for Pages */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPage === idx
                        ? "w-8 bg-sky-400 shadow-sm shadow-sky-400/50"
                        : "w-2 bg-slate-700 hover:bg-slate-600"
                    }`}
                    aria-label={`Ir a la página de proyectos ${idx + 1}`}
                  />
                ))}
              </div>
            )}
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
        {/* Card Header: Category badge, Award, Team size & Duration */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5 min-w-0">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              {project.category || "Backend API"}
            </span>

            {project.awardUrl && (
              <a
                href={project.awardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/award relative inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 text-amber-200 border border-amber-500/40 hover:border-amber-400 hover:scale-105 transition-all duration-300 shadow-md shadow-amber-950/40 hover:shadow-amber-500/20 shrink-0"
                title={`Ver reconocimiento oficial: ${project.awardLabel || "Hackathon"}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                <Trophy className="w-3 h-3 text-amber-400 group-hover/award:rotate-12 transition-transform duration-300" />
                <span>{project.awardLabel || "Hackathon"}</span>
                <ExternalLink className="w-2.5 h-2.5 text-amber-400/70 group-hover/award:text-amber-300 group-hover/award:translate-x-0.5 transition-all" />
              </a>
            )}

            {project.teamSize && project.teamSize > 1 && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 inline-flex items-center gap-1 shrink-0">
                <Users className="w-3 h-3 text-purple-400" />
                <span>Equipo ({project.teamSize} devs)</span>
              </span>
            )}
          </div>
          <span className="shrink-0 text-xs text-slate-400 font-mono">
            {project.duration}
          </span>
        </div>

        {/* Image / Thumbnail Preview */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
          <Image
            src={project.thumbnail}
            alt={`Captura de ${project.title}`}
            fill
            loading="eager"
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
        <div className="space-y-1.5">
          <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-2 pt-1 text-xs text-slate-300">
            {project.highlights.slice(0, 3).map((item, hIdx) => (
              <li key={hIdx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
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
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2.5">
        {/* Main Code Repo (or Backend Repo) */}
        {project.repoPublic && (project.repoUrl || project.githubUrl) ? (
          <a
            href={project.repoUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all hover:border-slate-600"
            aria-label={`Ver código de ${project.title} en GitHub`}
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>{project.frontendRepoUrl ? "Backend" : "Ver Código"}</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-slate-500 bg-slate-900 border border-slate-800 cursor-not-allowed">
            <Lock className="w-3 h-3" />
            <span>Código Privado</span>
          </span>
        )}

        {/* Optional Frontend Repo Link */}
        {project.frontendRepoUrl && (
          <a
            href={project.frontendRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all hover:border-slate-600"
            aria-label="Ver repositorio del Frontend en GitHub"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>Frontend</span>
          </a>
        )}

        {/* Video Demo Button (Active or Pending) */}
        {project.videoUrl ? (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 border border-rose-500/30 transition-all shadow-sm shadow-rose-950/20"
            title="Ver Video Demo en YouTube"
          >
            <Play className="w-3 h-3 fill-rose-400 text-rose-400" />
            <span>Video Demo</span>
          </a>
        ) : project.videoPending ? (
          <span
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-500 border border-slate-800/80 cursor-not-allowed select-none opacity-80"
            title="Video Demo: Próximamente al concluir el proyecto"
          >
            <Play className="w-3 h-3 fill-slate-600 text-slate-600" />
            <span>Video (Próximamente)</span>
          </span>
        ) : null}

        {/* Live Deploy / Web Link (Active or Pending) */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border border-sky-500/30 transition-all"
            aria-label={`Ver demo en vivo de ${project.title}`}
          >
            <span>Demo en Vivo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : project.livePending ? (
          <span
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-500 border border-slate-800/80 cursor-not-allowed select-none opacity-80"
            title="Demo en Vivo: Próximamente en despliegue"
          >
            <span>Demo (Próximamente)</span>
            <ExternalLink className="w-3 h-3 text-slate-600" />
          </span>
        ) : null}
      </div>
    </div>
  );
}
