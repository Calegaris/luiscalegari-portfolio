"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, Heart, ExternalLink } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";
import { 
  LinkedInIcon, 
  GitHubIcon, 
  XTwitterIcon, 
  InstagramIcon 
} from "@/src/components/icons/SocialIcons";

export function Footer() {
  const pathname = usePathname();
  const isGoGymPage = pathname.includes("gogym");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    const normalized = name.toLowerCase();
    if (normalized.includes("linkedin")) return <LinkedInIcon className="w-4 h-4" />;
    if (normalized.includes("github")) return <GitHubIcon className="w-4 h-4" />;
    if (normalized.includes("twitter") || normalized.includes("x")) return <XTwitterIcon className="w-4 h-4" />;
    if (normalized.includes("instagram")) return <InstagramIcon className="w-4 h-4" />;
    return <ExternalLink className="w-4 h-4" />;
  };

  return (
    <footer className={`relative border-t text-sm overflow-hidden transition-colors duration-300 ${
      isGoGymPage 
        ? "bg-[#06070a] border-zinc-800/80 text-zinc-400" 
        : "bg-[#030914] border-slate-800/80 text-slate-400"
    }`}>
      {/* Subtle top glow line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] ${
        isGoGymPage
          ? "bg-gradient-to-r from-transparent via-[#ff7a00]/40 to-transparent"
          : "bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand & Role */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xl font-bold text-white tracking-tight"
            >
              <span>Luis</span>
              <span className={isGoGymPage ? "text-[#ff7a00]" : "text-sky-400"}>.</span>
              <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 ml-1 rounded ${
                isGoGymPage
                  ? "bg-orange-500/15 text-[#ff8e26] border border-orange-500/30"
                  : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
              }`}>
                Dev
              </span>
            </Link>
            <p className={`text-sm max-w-md leading-relaxed ${isGoGymPage ? "text-zinc-400" : "text-slate-400"}`}>
              Desarrollador Full Stack enfocado en arquitecturas backend escalables, APIs RESTful de alto rendimiento y soluciones modernas con Java (Spring Boot), Node.js (NestJS) y React/Next.js.
            </p>
            <div className={`flex items-center gap-2 text-xs font-medium ${
              isGoGymPage ? "text-orange-400/90" : "text-sky-400/90"
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible para nuevos desafíos profesionales</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${isGoGymPage ? "text-zinc-200" : "text-slate-200"}`}>
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/#hero" 
                  className={`transition-colors ${isGoGymPage ? "hover:text-[#ff8e26]" : "hover:text-sky-300"}`}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  href="/#sobre-mi" 
                  className={`transition-colors ${isGoGymPage ? "hover:text-[#ff8e26]" : "hover:text-sky-300"}`}
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link 
                  href="/#proyectos" 
                  className={`transition-colors ${isGoGymPage ? "hover:text-[#ff8e26]" : "hover:text-sky-300"}`}
                >
                  Proyectos & Case Studies
                </Link>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-slate-500 cursor-not-allowed select-none">
                  <span>GoGym Case Study</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                    Próximamente
                  </span>
                </span>
              </li>
              <li>
                <Link 
                  href="/#certificados" 
                  className={`transition-colors ${isGoGymPage ? "hover:text-[#ff8e26]" : "hover:text-sky-300"}`}
                >
                  Certificados
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contacto" 
                  className={`transition-colors ${isGoGymPage ? "hover:text-[#ff8e26]" : "hover:text-sky-300"}`}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials & CV */}
          <div className="space-y-3">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${isGoGymPage ? "text-zinc-200" : "text-slate-200"}`}>
              Conectar
            </h4>
            <div className="flex flex-wrap gap-2">
              {portfolioData.personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className={`p-2.5 rounded-lg border transition-all focus:outline-none focus-visible:ring-2 ${
                    isGoGymPage
                      ? "bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-orange-500/20 border-zinc-800 hover:border-orange-500/40 focus-visible:ring-orange-400"
                      : "bg-slate-900/80 text-slate-400 hover:text-sky-300 hover:bg-sky-500/20 border-slate-800 hover:border-sky-500/40 focus-visible:ring-sky-400"
                  }`}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={portfolioData.personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border transition-colors ${
                  isGoGymPage
                    ? "text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border-zinc-750 hover:border-orange-500/40"
                    : "text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border-slate-700"
                }`}
              >
                <span>Descargar CV (PDF)</span>
                <ExternalLink className={`w-3 h-3 ${isGoGymPage ? "text-[#ff7a00]" : "text-sky-400"}`} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isGoGymPage ? "border-zinc-800/60 text-zinc-500" : "border-slate-800/60 text-slate-500"
        }`}>
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Luis Ángel Calegari. Construido con</span>
            <Heart className={`w-3.5 h-3.5 inline mx-0.5 ${isGoGymPage ? "text-[#ff7a00]" : "text-sky-400"}`} />
            <span>usando Next.js 16 & TypeScript.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
              isGoGymPage
                ? "text-zinc-400 hover:text-[#ff8e26] hover:bg-zinc-900/60"
                : "text-slate-400 hover:text-sky-300 hover:bg-slate-800/50"
            }`}
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
