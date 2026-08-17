"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Filter, 
  ZoomIn, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";
import { portfolioData, CertificateItem } from "@/src/data/portfolioData";
import { CertificateModal } from "./CertificateModal";
import { LinkedInIcon } from "@/src/components/icons/SocialIcons";

const INITIAL_LIMIT = 6;

export function Certificates() {
  const { certificates } = portfolioData;
  const [selectedEmitter, setSelectedEmitter] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);

  const isFiltered = selectedEmitter !== "all" || selectedArea !== "all";

  const allFilteredCertificates = certificates.filter((cert) => {
    const matchEmitter = selectedEmitter === "all" || cert.emitterKey === selectedEmitter;
    const matchArea = selectedArea === "all" || cert.areaKey === selectedArea;
    return matchEmitter && matchArea;
  });

  const displayedCertificates = isFiltered || showAll 
    ? allFilteredCertificates 
    : allFilteredCertificates.slice(0, INITIAL_LIMIT);

  const remainingCount = Math.max(0, allFilteredCertificates.length - INITIAL_LIMIT);

  return (
    <section
      id="certificados"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center sm:text-left mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <Award className="w-4 h-4" />
          <span>Validación & Formación Continua</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Certificados & Logros
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Certificaciones técnicas oficiales en Cloud Computing (Oracle OCI), Inteligencia Artificial (IBM), Java Backend y Desarrollo Web.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="mb-10 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-wrap items-center gap-4 justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
          <Filter className="w-4 h-4 text-sky-400" />
          <span>Filtrar por:</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Emitter Select */}
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="emitter-filter" className="text-xs text-slate-400 font-medium">
              Emisor:
            </label>
            <select
              id="emitter-filter"
              value={selectedEmitter}
              onChange={(e) => {
                setSelectedEmitter(e.target.value);
                setShowAll(true);
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="all">Todos los emisores</option>
              <option value="oracle-cloud">Oracle Cloud</option>
              <option value="ibm">IBM</option>
              <option value="educacionit">EducaciónIT</option>
              <option value="alura-latam">Alura Latam</option>
              <option value="talento-tech">Talento Tech</option>
            </select>
          </div>

          {/* Area Select */}
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="area-filter" className="text-xs text-slate-400 font-medium">
              Área:
            </label>
            <select
              id="area-filter"
              value={selectedArea}
              onChange={(e) => {
                setSelectedArea(e.target.value);
                setShowAll(true);
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="all">Todas las áreas</option>
              <option value="cloud">Cloud (OCI)</option>
              <option value="backend">Back-End / Java</option>
              <option value="ia">Inteligencia Artificial</option>
              <option value="frontend">Front-End</option>
            </select>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {displayedCertificates.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-sky-500/40 p-4 flex flex-col justify-between backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-950/20"
            >
              {/* Image Preview with click to open */}
              <div
                onClick={() => setActiveModalCert(cert)}
                className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-slate-950 cursor-pointer mb-4 border border-slate-800/80 group-hover:border-sky-500/30"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-sky-950/0 group-hover:bg-sky-950/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-sky-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ampliar</span>
                  </span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-slate-500 capitalize">{cert.areaKey}</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug line-clamp-2">
                  {cert.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setActiveModalCert(cert)}
                  className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Ver detalle</span>
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Credencial</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More / Show Less Toggle Button */}
      {!isFiltered && remainingCount > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-sky-500/40 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {showAll ? (
              <>
                <span>Mostrar menos</span>
                <ChevronUp className="w-4 h-4 text-sky-400" />
              </>
            ) : (
              <>
                <span>Mostrar más certificados (+{remainingCount})</span>
                <ChevronDown className="w-4 h-4 text-sky-400" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Concise LinkedIn Call to Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#004182]/20 via-[#0077b5]/10 to-slate-900/70 border border-sky-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="shrink-0 p-2.5 rounded-xl bg-[#0a66c2]/20 border border-[#0a66c2]/30 text-[#0a66c2]">
            <LinkedInIcon className="w-6 h-6 text-[#0a66c2]" />
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-white">
              ¿Buscás ver todas mis certificaciones y licencias?
            </h3>
            <p className="text-xs text-slate-400">
              Explorá mi historial académico y formación continua completa en LinkedIn.
            </p>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/luis-angel-calegari/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#0a66c2] hover:bg-[#004182] border border-[#0a66c2]/50 shadow-md hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Ver todas las certificaciones en LinkedIn"
        >
          <span>Ver todas en LinkedIn</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </motion.div>

      {/* Interactive Modal */}
      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </section>
  );
}
