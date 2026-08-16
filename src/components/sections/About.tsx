"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  GraduationCap, 
  Send, 
  Award, 
  Terminal, 
  CheckCircle2 
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";
import { GitHubIcon } from "@/src/components/icons/SocialIcons";

export function About() {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="sobre-mi"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 sm:mb-16 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <Terminal className="w-4 h-4" />
          <span>Trayectoria & Enfoque</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Sobre mí
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bio & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed"
        >
          {personalInfo.bioParagraphs.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300">
              {paragraph}
            </p>
          ))}

          {/* Key Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Universidad Nacional del Oeste</h4>
                <p className="text-xs text-slate-400">Lic. en Informática & Tec. Web (Promedios 8.6+)</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Oracle Cloud Certified</h4>
                <p className="text-xs text-slate-400">Infraestructura, computación y despliegue cloud</p>
              </div>
            </div>
          </div>

          {/* Location & Quick Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-sm">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>{personalInfo.location}</span>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors shadow-md shadow-sky-600/20"
            >
              <Send className="w-4 h-4" />
              <span>Contactame</span>
            </a>

            <a
              href="https://github.com/Calegaris"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image with Glow & Card Framing */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group max-w-sm w-full">
            {/* Background Glow */}
            <div 
              className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none" 
              aria-hidden="true"
            />

            {/* Card Frame */}
            <div className="relative rounded-2xl bg-[#08182f] border border-sky-500/30 overflow-hidden shadow-2xl p-3">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/perfil-calegari.final.jpg"
                  alt={`Foto de perfil de ${personalInfo.name} - Desarrollador Backend`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  priority
                />
                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182f]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Caption Bar under image */}
              <div className="p-3 text-center space-y-1">
                <h3 className="font-bold text-white text-base">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-sky-400 font-medium">
                  {personalInfo.specialization}
                </p>
                <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Código limpio · Arquitectura modular</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
