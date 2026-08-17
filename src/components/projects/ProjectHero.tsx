"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Server, 
  Flame 
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export function ProjectHero() {
  const project = portfolioData.projects.find((p) => p.slug === "gogym") || portfolioData.projects[0];

  return (
    <section className="relative pt-8 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glows: Vibrant GoGym Orange & Warm Dark Atmosphere */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-[#ff7a00]/12 rounded-full blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      {/* Back Button Link: Styled with portfolio blue on hover */}
      <div className="mb-8">
        <Link
          href="/#proyectos"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-sky-300 transition-all duration-300 px-4 py-2 rounded-xl bg-zinc-900/90 hover:bg-sky-950/40 border border-zinc-800 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/20 backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-sky-400 group-hover:-translate-x-1 transition-all" />
          <span>Volver al Portfolio</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity ml-1">
            Luis.Dev
          </span>
        </Link>
      </div>

      <div className="space-y-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#ff7a00]/15 text-[#ff8e26] border border-[#ff7a00]/40 flex items-center gap-1.5 shadow-sm shadow-orange-950/40">
            <Flame className="w-3.5 h-3.5 text-[#ff7a00]" />
            <span>GoGym Official Case Study</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{project.status}</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#ff7a00]" />
            <span>{project.duration}</span>
          </span>

          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-950/40 text-orange-200 border border-orange-500/30 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#ff7a00]" />
            <span>SaaS Ready / Código Privado</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            GoGym:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9500] via-[#ff7a00] to-[#ff5500]">
              Plataforma Integral de Gestión de Gimnasios
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-200 font-medium leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {project.overview?.scope}
          </p>
        </div>

        {/* Technical Role & Technologies */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-orange-500/25 backdrop-blur-xl grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl shadow-black/60">
          <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-4 md:pb-0 md:pr-6">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Rol de Ingeniería
            </span>
            <div className="text-base font-bold text-white flex items-center gap-2">
              <Server className="w-4 h-4 text-[#ff7a00]" />
              <span>{project.role}</span>
            </div>
            <p className="text-xs text-zinc-400">
              Arquitectura REST, persistencia Mongoose, seguridad y CI/CD.
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Stack Tecnológico Principal
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 text-zinc-100 border border-zinc-800 hover:border-orange-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Mockup Preview with GoGym Orange Halo Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-orange-500/30 p-2 sm:p-4 shadow-2xl shadow-orange-950/30"
        >
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-900">
            <Image
              src={project.thumbnail}
              alt="GoGym - Plataforma Integral de Gimnasios"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
