"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ExternalLink } from "lucide-react";
import { CertificateItem } from "@/src/data/portfolioData";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const [scale, setScale] = useState(1);

  // Close on Escape key and lock scroll
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setScale(1);
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  const handleClose = () => {
    setScale(1);
    onClose();
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-4xl bg-[#091a33] border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-label={certificate.title}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#061325]/80">
              <div className="min-w-0 pr-4">
                <h3 className="text-base sm:text-lg font-bold text-white truncate">
                  {certificate.title}
                </h3>
                <p className="text-xs text-sky-400 font-medium">
                  Emisor: {certificate.issuer}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Aumentar zoom"
                  title="Aumentar zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Reducir zoom"
                  title="Reducir zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors ml-2"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/40 min-h-[300px]">
              <div
                style={{ transform: `scale(${scale})`, transition: "transform 0.2s ease-out" }}
                className="relative max-w-full"
              >
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={900}
                  height={650}
                  className="rounded-lg shadow-lg object-contain max-h-[65vh] w-auto select-none"
                  draggable={false}
                  priority
                />
              </div>
            </div>

            {/* Modal Footer with Credential Link */}
            {certificate.credentialUrl && (
              <div className="px-6 py-3 border-t border-slate-800 bg-[#061325]/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Certificación oficial verificable</span>
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold"
                >
                  <span>Verificar credencial en emisor</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
