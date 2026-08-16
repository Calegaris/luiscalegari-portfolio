"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Habilidades", href: "#skills" },
  { name: "Formación", href: "#formacion" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Certificados", href: "#certificados" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isGoGymPage = pathname.includes("gogym");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const getHref = (hash: string) => {
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isGoGymPage
            ? "bg-[#08090d]/90 backdrop-blur-md border-b border-orange-500/25 py-3 shadow-xl shadow-black/60"
            : "bg-[#040d1a]/85 backdrop-blur-md border-b border-sky-500/15 py-3 shadow-lg shadow-black/40"
          : isGoGymPage
            ? "bg-[#08090d]/60 backdrop-blur-sm border-b border-transparent py-4"
            : "bg-[#040d1a]/50 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href={isHomePage ? "#hero" : "/"}
          className={`group flex items-center gap-1 text-xl font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 rounded-md px-1 ${
            isGoGymPage ? "focus-visible:ring-orange-400" : "focus-visible:ring-sky-400"
          }`}
          aria-label="Ir al inicio de Luis Calegari"
        >
          <span className={`text-slate-100 transition-colors ${
            isGoGymPage ? "group-hover:text-orange-300" : "group-hover:text-sky-300"
          }`}>
            Luis
          </span>
          <span className={isGoGymPage ? "text-[#ff7a00] font-black" : "text-sky-400 font-black"}>
            .
          </span>
          <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 ml-1 rounded transition-all ${
            isGoGymPage 
              ? "bg-orange-500/15 text-[#ff8e26] border border-orange-500/30 group-hover:bg-orange-500/25" 
              : "bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500/20"
          }`}>
            Dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = isHomePage && activeSection === sectionId;

            return (
              <Link
                key={item.name}
                href={getHref(item.href)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all rounded-lg ${
                  isActive
                    ? isGoGymPage
                      ? "text-orange-300 bg-orange-500/15"
                      : "text-sky-300 bg-sky-500/10"
                    : isGoGymPage
                      ? "text-zinc-300 hover:text-white hover:bg-zinc-800/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                      isGoGymPage
                        ? "bg-gradient-to-r from-orange-400 to-[#ff7a00]"
                        : "bg-gradient-to-r from-sky-400 to-blue-600"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (CV) & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center gap-1.5 text-xs lg:text-sm font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 ${
              isGoGymPage
                ? "bg-orange-600/20 text-[#ff8e26] hover:text-white border border-orange-500/40 hover:bg-[#ff7a00] hover:text-black focus-visible:ring-orange-400"
                : "text-slate-100 bg-sky-600/20 hover:bg-sky-500/30 text-sky-300 hover:text-white border border-sky-500/30 hover:border-sky-400/50 focus-visible:ring-sky-400"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 ${
              isGoGymPage
                ? "hover:bg-zinc-800/80 border border-zinc-800 focus-visible:ring-orange-400"
                : "hover:bg-slate-800/80 border border-slate-700/50 focus-visible:ring-sky-400"
            }`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/80 backdrop-blur-md md:hidden z-40"
              aria-hidden="true"
            />

            {/* Menu Dropdown */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full left-0 right-0 backdrop-blur-xl shadow-2xl md:hidden z-50 px-6 py-6 flex flex-col gap-2 ${
                isGoGymPage
                  ? "bg-[#08090d]/95 border-b border-orange-500/30"
                  : "bg-[#061325]/95 border-b border-sky-500/20"
              }`}
              aria-label="Menú móvil"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={getHref(item.href)}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    isGoGymPage
                      ? "text-zinc-200 hover:text-[#ff8e26] hover:bg-orange-500/10"
                      : "text-slate-200 hover:text-sky-300 hover:bg-sky-500/10"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className={`text-xs font-mono ${
                    isGoGymPage ? "text-orange-400/60" : "text-sky-400/60"
                  }`}>
                    #
                  </span>
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col gap-2">
                <a
                  href={portfolioData.personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-colors shadow-lg ${
                    isGoGymPage
                      ? "bg-[#ff7a00] text-black hover:bg-[#ff8e26] shadow-orange-600/30"
                      : "bg-sky-600 text-white hover:bg-sky-500 shadow-sky-600/30"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver Curriculum Vitae (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
