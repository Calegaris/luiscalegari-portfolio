import type { Metadata } from "next";
import { ProjectHero } from "@/src/components/projects/ProjectHero";
import { ArchitectureTier } from "@/src/components/projects/ArchitectureTier";
import { BackendHighlights } from "@/src/components/projects/BackendHighlights";
import { ProjectGallery } from "@/src/components/projects/ProjectGallery";
import { RoadmapSection } from "@/src/components/projects/RoadmapSection";

export const metadata: Metadata = {
  title: "GoGym — Case Study Técnico de Backend | Luis Calegari",
  description:
    "Desglose de ingeniería del sistema GoGym: Arquitectura por capas con NestJS, persistencia en MongoDB Atlas, autenticación stateless con JWT y RBAC, auditoría con Cron Jobs y control de accesos en tiempo real por QR.",
  openGraph: {
    title: "GoGym — Case Study de Arquitectura Backend (NestJS & MongoDB)",
    description:
      "Sistema de gestión integral para gimnasios con control de acceso por QR, autenticación RBAC y despliegue CI/CD en Render.",
    images: [
      {
        url: "/images/goGym.png",
        width: 1200,
        height: 630,
        alt: "GoGym - Case Study Técnico de Backend",
      },
    ],
  },
};

export default function GoGymCaseStudyPage() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden bg-[#08090d] text-zinc-100 min-h-screen">
      {/* Background Subtle Orange & Obsidian Atmospheric Mesh */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,122,0,0.12),transparent_70%),radial-gradient(ellipse_60%_40%_at_100%_60%,rgba(255,100,0,0.06),transparent_60%)]" 
        aria-hidden="true"
      />
      <ProjectHero />
      <ArchitectureTier />
      <BackendHighlights />
      <ProjectGallery />
      <RoadmapSection />
    </main>
  );
}
