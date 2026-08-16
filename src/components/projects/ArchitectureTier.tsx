"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  ArrowDown, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  Box,
  Flame
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

export function ArchitectureTier() {
  const project = portfolioData.projects.find((p) => p.slug === "gogym") || portfolioData.projects[0];
  const { architecture } = project;

  const getTierIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-5 h-5 text-white" />;
      case 1:
        return <Server className="w-5 h-5 text-[#ff7a00]" />;
      case 2:
        return <Database className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Cloud className="w-5 h-5 text-orange-400" />;
      default:
        return <Layers className="w-5 h-5 text-[#ff7a00]" />;
    }
  };

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff8e26]">
          <Flame className="w-4 h-4 text-[#ff7a00]" />
          <span>Diseño de Sistema & Arquitectura</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Arquitectura por Capas & Modularidad
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl">
          {architecture.description}
        </p>
      </div>

      {/* Layer Flow Visualizer */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {architecture.tiers.map((tier, idx) => (
          <div key={tier.title} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-950 via-[#13141a] to-zinc-950 border border-orange-500/25 hover:border-orange-500/50 backdrop-blur-xl transition-all shadow-xl shadow-black/60"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0 shadow-inner">
                  {getTierIcon(idx)}
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-between">
                    <span>{tier.title}</span>
                    <span className="text-xs font-mono font-bold text-[#ff7a00] uppercase px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                      Nivel {idx + 1}
                    </span>
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300">
                    {tier.components.map((component, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/90 hover:border-orange-500/30 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a00] shrink-0" />
                        <span>{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Connecting Flow Arrow */}
            {idx < architecture.tiers.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="p-1.5 rounded-full bg-zinc-900 border border-orange-500/40 text-[#ff7a00] shadow-md shadow-orange-950/40">
                  <ArrowDown className="w-4 h-4 animate-pulse" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Architecture Highlights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-orange-500/30 transition-colors space-y-3">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#ff7a00] w-fit border border-orange-500/20">
            <Box className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white">Inyección de Dependencias (DI)</h4>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Contenedor nativo de NestJS que desacopla la lógica de negocio de los controladores, facilitando pruebas unitarias y escalabilidad horizontal.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-orange-500/30 transition-colors space-y-3">
          <div className="p-2.5 rounded-xl bg-white/10 text-white w-fit border border-white/20">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white">Validación Estricta con DTOs</h4>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Pipes de transformación y validación automática de payloads mediante <code className="text-orange-300 font-mono">class-validator</code> evitando inyecciones o datos malformados.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-orange-500/30 transition-colors space-y-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 w-fit border border-amber-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white">Módulos de Dominio Aislados</h4>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Encapsulamiento en <code className="text-orange-300 font-mono">AuthModule</code>, <code className="text-orange-300 font-mono">UsersModule</code>, <code className="text-orange-300 font-mono">MembershipsModule</code> y <code className="text-orange-300 font-mono">AttendanceModule</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
