"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ZoomIn, 
  X, 
  Flame, 
  QrCode, 
  ShieldCheck, 
  BarChart3, 
  Maximize2,
  Video
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge: string;
  icon: typeof BarChart3;
  metrics?: string;
  highlights: string[];
}

const galleryItems: GalleryItem[] = [
  {
    id: "admin-dashboard",
    title: "Dashboard Administrativo & Analítica",
    category: "Panel de Gestión",
    badge: "Métricas en Tiempo Real",
    icon: BarChart3,
    description: "Panel de control integral para recepcionistas y dueños de gimnasio. Permite monitorear socios activos, altas de planes, ingresos mensuales y ocupación en sala.",
    image: "/images/goGym.png",
    metrics: "Auditoría en tiempo real",
    highlights: [
      "Gráficos de afluencia diaria por franja horaria",
      "Control de altas, bajas y estados de membresías",
      "Exportación de reportes de cobro y asistencia"
    ]
  },
  {
    id: "client-portal",
    title: "Portal del Socio & QR Digital",
    category: "Experiencia del Usuario",
    badge: "Credencial Dinámica",
    icon: QrCode,
    description: "Interfaz responsive para clientes donde consultan el estado de su plan, días restantes de vigencia y generan su código QR intransferible para el acceso.",
    image: "/images/goGym.png",
    metrics: "< 200ms tiempo de respuesta",
    highlights: [
      "Token QR dinámico con vencimiento por sesión",
      "Historial de asistencias y permanencia",
      "Notificación de renovación anticipada"
    ]
  },
  {
    id: "totem-scanner",
    title: "Tótem de Check-In Autónomo",
    category: "Punto de Acceso",
    badge: "Validación Instantánea",
    icon: ShieldCheck,
    description: "Módulo de recepción autónomo con react-webcam que escanea el QR del socio o permite ingreso manual por DNI, confirmando la membresía activa en milisegundos.",
    image: "/images/goGym.png",
    metrics: "Zero-Latency Access",
    highlights: [
      "Validación de estado ACTIVE en MongoDB Atlas",
      "Cálculo de hora de ingreso y egreso (Check-Out)",
      "Prevención de ingresos simultáneos duplicados"
    ]
  }
];

export function ProjectGallery() {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Close Lightbox on ESC key and handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
        setIsPlayingVideo(false);
      }
    };

    if (activeModalItem || isPlayingVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalItem, isPlayingVideo]);

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff7a00]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff8e26]">
          <Flame className="w-4 h-4 text-[#ff7a00]" />
          <span>Demostración Visual & Módulos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Recorrido Visual del Sistema
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl">
          Visualización de las interfaces principales del software: panel de administración, credencial digital del cliente y punto de acceso por tótem QR.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Main Large Bento Item: Dashboard de Administración (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 group rounded-3xl bg-gradient-to-b from-zinc-950 via-[#13141c] to-zinc-950 border border-orange-500/25 hover:border-orange-500/50 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-black/60 transition-all duration-300"
        >
          <div className="space-y-4">
            {/* Header / Badges */}
            <div className="flex items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff7a00]/15 text-[#ff8e26] border border-orange-500/30 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{galleryItems[0].badge}</span>
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {galleryItems[0].category}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-200 transition-colors">
                {galleryItems[0].title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {galleryItems[0].description}
              </p>
            </div>

            {/* Image Preview with Lightbox Trigger */}
            <div
              onClick={() => setActiveModalItem(galleryItems[0])}
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer group/img shadow-lg"
            >
              <Image
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-[#ff7a00] text-black text-xs font-bold flex items-center gap-1.5 shadow-xl shadow-orange-600/40">
                  <Maximize2 className="w-4 h-4" />
                  <span>Ver en Alta Resolución</span>
                </span>
              </div>
            </div>

            {/* Highlights Chips */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs text-zinc-300">
              {galleryItems[0].highlights.map((highlight, idx) => (
                <li key={idx} className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00]" />
                  <span className="truncate">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column Bento Items: Portal Cliente & Tótem (Span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {galleryItems.slice(1).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              className="group rounded-3xl bg-gradient-to-b from-zinc-950 via-[#13141c] to-zinc-950 border border-zinc-800 hover:border-orange-500/40 p-6 flex flex-col justify-between backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 flex-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-zinc-900 text-orange-300 border border-orange-500/20">
                    {item.badge}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-orange-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Thumbnail */}
                <div
                  onClick={() => setActiveModalItem(item)}
                  className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer group/img"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-zinc-900/90 text-white border border-zinc-700 text-xs font-semibold flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5 text-[#ff7a00]" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Demonstration / Technical Walkthrough Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-gradient-to-r from-zinc-950 via-[#161722] to-zinc-950 border border-orange-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden"
      >
        {/* Subtle Background Mesh */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7a00]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#ff7a00]/15 text-[#ff8e26] border border-orange-500/30">
              <Video className="w-3.5 h-3.5" />
              <span>Demostración en Video</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Walkthrough Técnico del Flujo de Accesos
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Mirá el recorrido en video del flujo completo: desde el registro y activación de membresía, hasta la lectura del código QR en el tótem con validación en tiempo real.
            </p>

            <div className="space-y-2 pt-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff7a00]" />
                <span>Flujo de usuario: Login JWT ➔ Consulta de estado ➔ QR dinámico</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Flujo administrativo: Asignación de plan ➔ Auditoría de ingreso</span>
              </div>
            </div>
          </div>

          {/* Right Video Player Mockup */}
          <div className="lg:col-span-6">
            <div
              onClick={() => setIsPlayingVideo(true)}
              className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-orange-500/30 shadow-2xl cursor-pointer group flex items-center justify-center"
            >
              <Image
                src="/images/goGym.png"
                alt="Demo GoGym Walkthrough"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
              />

              {/* Centered Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ff7a00] text-black flex items-center justify-center shadow-xl shadow-orange-600/50 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 fill-black translate-x-0.5" />
                </div>
                <span className="px-3 py-1 rounded-lg bg-black/80 text-white text-xs font-semibold border border-zinc-700 backdrop-blur-md">
                  Ver Video Walkthrough
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* High-Resolution Image Lightbox Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 w-full max-w-5xl bg-[#0e0f14] border border-orange-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              role="dialog"
              aria-modal="true"
              aria-label={activeModalItem.title}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black/60">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-xs text-[#ff8e26] font-medium">
                    {activeModalItem.category} · {activeModalItem.badge}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Area */}
              <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/80">
                <Image
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-2xl object-contain max-h-[65vh] w-auto select-none"
                  priority
                />
              </div>

              {/* Footer info */}
              <div className="px-6 py-4 border-t border-zinc-800 bg-black/60 text-xs sm:text-sm text-zinc-300 flex items-center justify-between">
                <span className="text-zinc-400">{activeModalItem.description}</span>
                <span className="font-mono text-[#ff8e26] font-semibold">{activeModalItem.metrics}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {isPlayingVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlayingVideo(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 w-full max-w-4xl bg-zinc-950 border border-orange-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Video Walkthrough GoGym"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black/80">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#ff7a00]" />
                  <h3 className="text-base font-bold text-white">
                    GoGym: Demostración Técnica en Vivo
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPlayingVideo(false)}
                  className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Cerrar reproductor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Container Area */}
              <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#ff7a00] flex items-center justify-center">
                  <Play className="w-8 h-8 fill-[#ff7a00] translate-x-0.5" />
                </div>
                <div className="space-y-1 max-w-md">
                  <h4 className="text-lg font-bold text-white">Demostración en Video del Sistema</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    La grabación del flujo end-to-end (NestJS + MongoDB Atlas + React Totem QR) se encuentra disponible para entrevistas técnicas y presentaciones con clientes.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full text-xs bg-zinc-900 border border-zinc-800 text-zinc-300">
                    Duración: 3:45 min
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-orange-500/15 border border-orange-500/30 text-[#ff8e26]">
                    Audio explicativo en Español
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
