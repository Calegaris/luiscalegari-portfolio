import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luiscalegari.dev"),
  title: {
    default: "Luis Ángel Calegari | Desarrollador Backend & Full Stack",
    template: "%s | Luis Ángel Calegari",
  },
  description:
    "Portfolio profesional de Luis Ángel Calegari. Especialista en arquitecturas backend escalables, APIs RESTful con Java (Spring Boot) y Node.js (NestJS), bases de datos SQL/NoSQL e infraestructura Cloud (Oracle Cloud Certified).",
  keywords: [
    "Luis Ángel Calegari",
    "Luis Calegari",
    "Desarrollador Backend",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "NestJS",
    "Node.js",
    "TypeScript",
    "MongoDB Atlas",
    "PostgreSQL",
    "Oracle Cloud Infrastructure",
    "GoGym",
    "Portfolio Backend",
    "APIs RESTful",
  ],
  authors: [{ name: "Luis Ángel Calegari", url: "https://github.com/Calegaris" }],
  creator: "Luis Ángel Calegari",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://luiscalegari.dev",
    title: "Luis Ángel Calegari | Desarrollador Backend & Full Stack",
    description:
      "Construcción de APIs RESTful robustas, arquitecturas modulares y sistemas escalables con Java Spring Boot y NestJS. Case Study GoGym y certificaciones oficiales.",
    siteName: "Luis Ángel Calegari Portfolio",
    images: [
      {
        url: "/images/perfil-calegari.final.jpg",
        width: 1200,
        height: 630,
        alt: "Luis Ángel Calegari - Desarrollador Backend & Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Ángel Calegari | Desarrollador Backend & Full Stack",
    description:
      "Desarrollo de software backend con Java Spring Boot, NestJS y Cloud Infrastructure.",
    creator: "@CalegariLuis97",
    images: ["/images/perfil-calegari.final.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${poppins.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#040d1a] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        <Navbar />
        <div className="flex-1 pt-16 sm:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
