"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  MessageSquare,
  User,
  ArrowRight
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";
import { 
  LinkedInIcon, 
  GitHubIcon, 
  XTwitterIcon, 
  InstagramIcon 
} from "@/src/components/icons/SocialIcons";

export function Contact() {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, completa todos los campos requeridos.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(personalInfo.contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al procesar el mensaje con el servidor.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Hubo un problema al enviar el formulario. Por favor, intenta de nuevo o contáctame por LinkedIn.");
    }
  };

  return (
    <section
      id="contacto"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Background Decorative Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 sm:mb-16 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
          <Mail className="w-4 h-4" />
          <span>Canales de Comunicación</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Contactame
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          ¿Tenés una propuesta laboral, proyecto en mente o querés conectar? Escribime directamente por el formulario o conectá en redes sociales.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Social Links & Value Prop */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              <span>Conectemos en Redes</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Suelo estar activo en LinkedIn y GitHub. Si querés charlar sobre desarrollo backend, Java Spring, NestJS o arquitecturas de software, ¡será un gusto conectar!
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="https://www.linkedin.com/in/luis-angel-calegari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 hover:bg-sky-500/10 border border-slate-700/60 hover:border-sky-500/30 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/20 text-sky-400">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">LinkedIn</div>
                    <div className="text-xs text-slate-400">/in/luis-angel-calegari</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://github.com/Calegaris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 hover:bg-sky-500/10 border border-slate-700/60 hover:border-sky-500/30 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-700/50 text-slate-300">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">GitHub</div>
                    <div className="text-xs text-slate-400">@Calegaris</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://x.com/CalegariLuis97"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 hover:bg-sky-500/10 border border-slate-700/60 hover:border-sky-500/30 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-700/50 text-slate-300">
                    <XTwitterIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">X (Twitter)</div>
                    <div className="text-xs text-slate-400">@CalegariLuis97</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://www.instagram.com/calegari_luis_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 hover:bg-sky-500/10 border border-slate-700/60 hover:border-sky-500/30 text-slate-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rose-600/20 text-rose-400">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Instagram</div>
                    <div className="text-xs text-slate-400">@calegari_luis_</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md space-y-6">
            <h3 className="text-xl font-bold text-white">
              Enviame un Mensaje
            </h3>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Gracias por comunicarte. Te voy a responder a la brevedad posible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {status === "error" && (
                  <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300">
                    Nombre <span className="text-slate-500 font-normal">(Opcional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre o empresa"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300">
                    Correo electrónico <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tunombre@ejemplo.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300">
                    Mensaje <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-slate-500">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 hover:from-sky-500 hover:to-blue-600 shadow-lg shadow-sky-600/30 hover:shadow-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Enviando mensaje..." : "Enviar mensaje"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
