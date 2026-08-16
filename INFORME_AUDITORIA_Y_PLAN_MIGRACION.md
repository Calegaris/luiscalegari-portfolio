# 🏛️ Informe de Auditoría Técnica y Plan Maestro de Migración
## De Vanilla Web a Next.js 16 (App Router), React 19 y TypeScript

**Documento:** Informe Técnico de Arquitectura de Software  
**Autor del Proyecto:** Luis Ángel Calegari — *Desarrollador Backend*  
**Especialidad:** Java (Spring Boot) · Node.js (NestJS) · Cloud Infrastructure (Oracle Cloud OCI)  
**Fecha:** Agosto 2026  
**Versión:** 1.0.0 — Estado: Listo para Ejecución  

---

## 📑 Tabla de Contenidos
1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Auditoría del Proyecto Vanilla (Legacy)](#2-auditoría-del-proyecto-vanilla-legacy)
   - 2.1. Diagnóstico de Archivos y Dependencias
   - 2.2. Mapeo de Interacciones DOM a React & Framer Motion
   - 2.3. Estructuración del Modelo de Datos (`portfolioData.ts`)
3. [Arquitectura de la Aplicación en Next.js](#3-arquitectura-de-la-aplicación-en-nextjs)
   - 3.1. Estructura de Directorios Recomendada
   - 3.2. Mapa de Componentes de la Landing Principal (`/`)
   - 3.3. Arquitectura Especializada del Case Study GoGym (`/projects/gogym`)
4. [Plan de Migración Paso a Paso (Checklist Priorizado)](#4-plan-de-migración-paso-a-paso-checklist-priorizado)
5. [Estrategia de SEO, Accesibilidad y Performance](#5-estrategia-de-seo-accesibilidad-y-performance)
6. [Guía Rápida para Iniciar el Desarrollo](#6-guía-rápida-para-iniciar-el-desarrollo)

---

## 1. Resumen Ejecutivo

El presente informe establece el diagnóstico técnico y el plan de migración del portfolio profesional de **Luis Ángel Calegari** desde una arquitectura estática en HTML5/CSS3/JS Vanilla hacia una aplicación web moderna, modular y de alto rendimiento basada en **Next.js 16 (Turbopack, App Router)**, **React 19**, **TypeScript 5.9** y **Tailwind CSS 4**.

### Objetivos Clave de la Migración:
1. **Posicionamiento Profesional Backend:** Transformar el portfolio de un sitio web estático tradicional a una vitrina de ingeniería de software con diseño *premium*, tipado estricto y casos de estudio con análisis de arquitectura profunda (destacando el proyecto bandera **GoGym**).
2. **Desacoplamiento Total Datos-Vista:** Centralizar biografía, educación, habilidades por categoría, certificaciones verificables y métricas de proyectos en un repositorio de datos estructurado en TypeScript (`src/data/portfolioData.ts`).
3. **Optimización de Experiencia de Usuario (UX):** Reemplazar la manipulación manual del DOM por componentes declarativos de React, filtros fluidos con `framer-motion`, modales accesibles con gestos de zoom y navegación optimizada.
4. **Performance & SEO:** Aprovechar Server-Side Rendering (SSR) y Static Site Generation (SSG) de Next.js para lograr puntuaciones de 100/100 en Lighthouse y metadata OpenGraph dinámica para reclutadores técnicos.

---

## 2. Auditoría del Proyecto Vanilla (Legacy)

### 2.1. Diagnóstico de Archivos y Dependencias

| Archivo Original | Tipo / Tamaño | Función Principal | Diagnóstico y Estrategia de Migración |
| :--- | :--- | :--- | :--- |
| `index.html` | HTML (~19.7 KB) | Landing principal, hero, sobre mí, skills, educación, proyectos, certificados y contacto. | Descomponer en Server y Client Components en `app/page.tsx` y `src/components/sections/*`. |
| `gogym.html` | HTML (~49.1 KB) | Case study técnico del proyecto GoGym. | Migrar a la ruta dedicada `app/projects/gogym/page.tsx`, estructurada con enfoque de arquitectura backend. |
| `css/styles.css` | CSS (~42.7 KB) | Estilos generales, reset, variables de color y media queries. | Migrar tokens y paleta navy/dark a `app/globals.css` utilizando Tailwind CSS v4. |
| `css/gogym.css` | CSS (~35.9 KB) | Estilos específicos para diagramas, tablas y tarjetas de GoGym. | Modularizar en componentes estilizados con utilidades de Tailwind CSS. |
| `js/scripts.js` | JS (~8.8 KB) | Lógica de filtrado de certificados, modal con zoom/pan, form submission y mobile toggle. | Mapear a hooks y componentes de React con `useState`, `useCallback` y `framer-motion`. |
| `js/gogym.js` | JS (~8.5 KB) | Scrollspy, lightbox de imágenes/videos, copiado de endpoints al portapapeles y animaciones de scroll. | Mapear a hooks (`useScrollSpy`, `useCopyToClipboard`) y animaciones declarativas de `framer-motion`. |
| `imgs/*` | Assets (~1.5 MB) | Foto de perfil, mockup de GoGym y 9 certificados emitidos por Oracle, IBM, EducaciónIT, etc. | Migrados a `public/images/` y optimizados con el componente `<Image />` de `next/image`. |
| `docs/CV_...pdf` | Documento (425 KB) | Curriculum Vitae descargable. | Migrado a `public/docs/CV_Luis_Angel_Calegari.pdf`. |

---

### 2.2. Mapeo de Interacciones DOM a React & Framer Motion

```
[Vanilla JS (Imperativo)] ───► [React 19 + Framer Motion (Declarativo)]
 ├─ toggle.addEventListener  ───►  Navbar (useState: isOpen) + AnimatePresence
 ├─ select.addEventListener  ───►  CertificatesFilter (useState: selectedEmitter, area) + layout motion
 ├─ pointerdown / wheel zoom ───►  CertificateModal (Gestos fluidos + ESC close + scroll lock)
 ├─ form.addEventListener    ───►  ContactForm (fetch a Formspree + estados idle/loading/success)
 ├─ window.addEventListener  ───►  useScrollSpy hook + CSS scroll-smooth
 └─ IntersectionObserver     ───►  motion.div initial={{ opacity: 0, y: 20 }} whileInView
```

#### Detalle de Conversión por Componente:

1. **Navegación Móvil (Drawer):**
   - *Legacy:* `toggleBtn.addEventListener('click')` alternaba la clase CSS `.open`.
   - *React:* `const [isMobileOpen, setIsMobileOpen] = useState(false)` renderizando un menú animado con `<AnimatePresence>` que se cierra automáticamente al navegar a un ancla o hacer clic fuera del backdrop.

2. **Filtrado Reactivo de Certificados:**
   - *Legacy:* Lectura manual de `card.dataset.emitter` y manipulación de `card.style.display`.
   - *React:* Filtrado in-memory sobre el array `portfolioData.certificates`. Los cambios recalculan el array visible y Framer Motion anima la transición de posición con la propiedad `layout`.

3. **Visor de Certificados con Zoom & Panning:**
   - *Legacy:* Control de eventos `pointerdown`, `pointermove`, `pointerup` y cálculo de matriz `translate()` y `scale()`.
   - *React:* Componente `CertificateModal.tsx` con soporte para zoom interactivo, centrado dinámico, cierre accesible con <kbd>ESC</kbd> y aria-modal attributes para accesibilidad WCAG 2.1.

4. **Formulario de Contacto:**
   - *Legacy:* Captura de `e.preventDefault()`, validación rudimentaria y `fetch` directo a Formspree.
   - *React:* Componente `ContactForm.tsx` con manejo de estados (`idle` | `submitting` | `success` | `error`), validación de formato de email, bloqueo de doble clic en envío y feedback visual toast/banner.

---

### 2.3. Estructuración del Modelo de Datos (`portfolioData.ts`)

Se consolidó el archivo `src/data/portfolioData.ts` con interfaces TypeScript exportables:

```typescript
// Entidades principales tipadas
export interface SocialLink { name: string; url: string; icon: string; ariaLabel: string; }
export interface EducationItem { id: string; institution: string; degree: string; period: string; status: string; subjectsCompleted: string; gpa: string; }
export interface SkillCategory { category: string; skills: { name: string; icon: string; tooltip?: string; }[]; }
export interface CertificateItem { id: string; title: string; issuer: string; emitterKey: string; areaKey: string; image: string; credentialUrl: string; }
export interface TechnicalDecision { title: string; category: string; decision: string; rationale: string[]; tradeoffs?: string[]; outcome: string; }
export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  role: string;
  status: string;
  duration: string;
  thumbnail: string;
  repoPublic: boolean;
  repoPrivateReason?: string;
  technologies: string[];
  highlights: string[];
  overview: { roleDescription: string; scope: string; mainAchievement: string; };
  keyFeatures: { category: string; icon: string; items: string[]; }[];
  architecture: { description: string; tiers: { title: string; components: string[]; }[]; };
  domainModel: { description: string; entities: { name: string; attributes: any[]; businessRules: string[]; }[]; relationships: string[]; };
  technicalDecisions: TechnicalDecision[];
  roadmap: { phase: string; title: string; items: string[]; }[];
}
```

---

## 3. Arquitectura de la Aplicación en Next.js

### 3.1. Estructura de Directorios Recomendada

```
migrafolio/
├── app/
│   ├── layout.tsx                    # Shell global (Fuentes, Metadata SEO, Theme)
│   ├── globals.css                   # Tailwind CSS v4 tokens y utilidades
│   ├── page.tsx                      # Landing principal (Server Component que orquesta secciones)
│   └── projects/
│       └── gogym/
│           └── page.tsx              # Case Study Técnico de GoGym
├── public/
│   ├── images/
│   │   ├── perfil-calegari.final.jpg
│   │   ├── goGym.png
│   │   └── certificados/*.jpg
│   └── docs/
│       └── CV_Luis_Angel_Calegari.pdf
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Header sticky, glassmorphism, mobile drawer
│   │   │   └── Footer.tsx            # Footer y menciones técnicas
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Headline, status badge, CTA de CV
│   │   │   ├── About.tsx             # Bio estructurada, foto con glow, badges
│   │   │   ├── TechStack.tsx         # Grid categorizado con tooltips
│   │   │   ├── Education.tsx         # Timeline académica en la UNO
│   │   │   ├── ProjectsGrid.tsx      # Featured Card de GoGym
│   │   │   ├── Certificates.tsx      # Filtros reactivos y galería
│   │   │   ├── CertificateModal.tsx  # Modal de alta resolución con zoom
│   │   │   └── Contact.tsx           # Formulario Formspree + Redes sociales
│   │   └── projects/
│   │       ├── ProjectHero.tsx       # Header de case study y metadata
│   │       ├── ArchitectureTier.tsx  # Capas de arquitectura y flujo
│   │       ├── DomainModelTable.tsx  # Entidades y reglas de negocio
│   │       ├── DecisionsAccordion.tsx# Acordeón de decisiones técnicas
│   │       └── RoadmapSection.tsx    # Fases de escalabilidad futura
│   ├── data/
│   │   └── portfolioData.ts          # Single Source of Truth
│   ├── hooks/
│   │   ├── useScrollSpy.ts           # Detección de sección activa
│   │   └── useCopyToClipboard.ts     # Utilidad para copiar al portapapeles
│   └── types/
│       └── portfolio.ts              # Tipos auxiliares
```

---

### 3.2. Mapa de Componentes de la Landing Principal (`/`)

```
┌──────────────────────────────────────────────────────────────┐
│  Navbar (Sticky, Blur, Brand "Luis.Dev", Links, Mobile Menu) │
├──────────────────────────────────────────────────────────────┤
│  HeroSection                                                 │
│  - Badge: "Disponible para nuevos desafíos"                  │
│  - Título: "Hola, soy Luis Calegari 👋"                      │
│  - Subtítulo: "Desarrollador Backend | Java Spring | NestJS" │
│  - CTAs: [Mirá mi CV] (PDF) y [Ver Proyectos]               │
├──────────────────────────────────────────────────────────────┤
│  AboutSection                                                │
│  - Texto de biografía y enfoque en calidad de software       │
│  - Foto de perfil con borde sutil y glow                     │
│  - Insignia de ubicación (Moreno, Buenos Aires, Argentina)   │
├──────────────────────────────────────────────────────────────┤
│  TechStackSection (Grid Categorizado)                         │
│  - Backend: Java, Spring Boot, Node.js, NestJS, TypeScript   │
│  - Bases de Datos: MongoDB, PostgreSQL, MySQL, Oracle DB     │
│  - Frontend: React, Next.js, HTML5, CSS3/Tailwind            │
│  - Infra & DevOps: Render CI/CD, Git, GitHub, Postman        │
├──────────────────────────────────────────────────────────────┤
│  EducationSection (Timeline Universidad Nacional del Oeste)  │
│  - Licenciatura en Informática (Promedio: 8.62 | 13/16 mat.) │
│  - Tecnicatura en Tecnologías Web (Promedio: 8.73 | 11/16)   │
├──────────────────────────────────────────────────────────────┤
│  ProjectsGrid (Featured Case Study)                          │
│  - Card GoGym con badges tecnológicos                        │
│  - Botón: "Ver Case Study Técnico ➔"                         │
│  - Badge: "Código Privado (Propiedad Intelectual)"           │
├──────────────────────────────────────────────────────────────┤
│  CertificatesSection                                         │
│  - Filtros: Por Emisor (Oracle, IBM, EducaciónIT, Alura)     │
│  - Filtros: Por Área (Cloud, IA, Backend, Frontend)          │
│  - Modal interactivo de ampliación al hacer clic             │
├──────────────────────────────────────────────────────────────┤
│  ContactSection                                              │
│  - Redes: LinkedIn, GitHub, X (Twitter), Instagram           │
│  - Formulario de contacto conectado a Formspree              │
├──────────────────────────────────────────────────────────────┤
│  Footer (Copyright 2026, Stack del Portfolio)                │
└──────────────────────────────────────────────────────────────┘
```

---

### 3.3. Arquitectura Especializada del Case Study GoGym (`/projects/gogym`)

El diseño de la ruta `/projects/gogym` se estructura para reflejar el pensamiento de un **Senior Backend Engineer**:

```
                              ┌───────────────────────────────────┐
                              │  1. CAPA DE PRESENTACIÓN (CLIENT) │
                              │  - Web SPA React para Socios     │
                              │  - Tótem QR en Recepción          │
                              └─────────────────┬─────────────────┘
                                                │ (HTTPS / JSON / Bearer JWT)
                                                ▼
                              ┌───────────────────────────────────┐
                              │  2. CAPA API & NEGOCIO (NestJS)   │
                              │  - Guards: Auth JWT & RBAC        │
                              │  - Validation Pipes con DTOs      │
                              │  - Controllers & Domain Services  │
                              │  - Cron Jobs: Expiración de Planes│
                              └─────────────────┬─────────────────┘
                                                │ (Mongoose ODM)
                                                ▼
                              ┌───────────────────────────────────┐
                              │  3. CAPA DE PERSISTENCIA (DATA)   │
                              │  - MongoDB Atlas Cloud Cluster    │
                              │  - Índices en queries frecuentes  │
                              │  - Colecciones: Users, Memberships│
                              └─────────────────┬─────────────────┘
                                                │ (Auto-Deploy Webhook)
                                                ▼
                              ┌───────────────────────────────────┐
                              │  4. INFRAESTRUCTURA & CI/CD       │
                              │  - Render.com conectado a GitHub  │
                              │  - Variables de entorno seguras   │
                              │  - Certificados SSL/TLS automáticos│
                              └───────────────────────────────────┘
```

#### Pilares Técnicos a Documentar en la Página:
1. **Control de Acceso Basado en Roles (RBAC):** Separación estricta de permisos entre `ADMIN` (gestión de socios, altas de planes y analítica) y `CLIENT` (consulta de estado y generación de QR de acceso) mediante Guards de NestJS.
2. **Sistema de Acceso por Tótem QR:** Validación de credenciales en tiempo real, registro de asistencia inmutable con cálculo automático de duración de sesión y prevención de accesos simultáneos.
3. **Cron Jobs y Automatización de Membresías:** Tareas programadas en background que evalúan las fechas de expiración de planes activos y actualizan el estado de los socios sin intervención humana.
4. **Seguridad Criptográfica:** Implementación de tokens JWT sin estado (stateless) y hashing de contraseñas con `bcrypt` (10 rounds) utilizando comparación en tiempo constante para mitigar ataques de temporización.

---

## 4. Plan de Migración Paso a Paso (Checklist Priorizado)

A continuación se detalla el orden de implementación técnica recomendado:

```markdown
### 🟢 FASE 0: Inicialización y Datos (Completada)
- [x] Crear repositorio tipado `src/data/portfolioData.ts` con todos los modelos e información.
- [x] Migrar imágenes a `public/images/` y documentos a `public/docs/`.
- [x] Instalar dependencias esenciales: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.

### 🟡 FASE 1: Sistema de Diseño y Tokens Base (Prioridad Alta)
- [ ] Configurar tipografía e importación de fuentes (Inter / Poppins) en `app/layout.tsx`.
- [ ] Definir tokens de color (Navy `#082e49`, Slate `#042034`, Accent Blue `#0056b3`, GoGym Orange `#ff7a00`) en `app/globals.css`.
- [ ] Crear archivo de utilidades `src/lib/utils.ts` con helper `cn()` (clsx + twMerge).

### 🟡 FASE 2: Layout y Navegación (Prioridad Alta)
- [ ] Implementar `src/components/layout/Navbar.tsx`:
  - Efecto de vidrio (glassmorphism con backdrop-blur).
  - Enlaces con scroll suave a las anclas de la página.
  - Menú hamburguesa responsivo con `<AnimatePresence>`.
- [ ] Implementar `src/components/layout/Footer.tsx`:
  - Enlaces de navegación rápida y créditos técnicos.

### 🟡 FASE 3: Secciones de la Landing (`app/page.tsx`) (Prioridad Alta)
- [ ] Implementar `src/components/sections/Hero.tsx`:
  - Badge animado de estado ("Open to work").
  - Botón de descarga/visualización directa del CV en PDF.
- [ ] Implementar `src/components/sections/About.tsx`:
  - Párrafos de biografía, foto optimizada con Next/Image y badges de ubicación.
- [ ] Implementar `src/components/sections/TechStack.tsx`:
  - Tarjetas categorizadas (Backend, Bases de Datos, Frontend, DevOps) con hover micro-interactions.
- [ ] Implementar `src/components/sections/Education.tsx`:
  - Visualizador de formación en la Universidad Nacional del Oeste, materias y promedios.
- [ ] Implementar `src/components/sections/ProjectsGrid.tsx`:
  - Card destacada de GoGym con highlights de backend y botón al Case Study.
- [ ] Implementar `src/components/sections/Certificates.tsx` y `CertificateModal.tsx`:
  - Filtros interactivos por emisor (Oracle, IBM, Alura, etc.) y área (Cloud, IA, Backend, etc.).
  - Modal con zoom, bloqueo de scroll y atajo de cierre con tecla Escape.
- [ ] Implementar `src/components/sections/Contact.tsx`:
  - Formulario conectado a Formspree con estados de envío y links a LinkedIn/GitHub/X/Instagram.

### 🔵 FASE 4: Case Study GoGym (`app/projects/gogym/page.tsx`) (Prioridad Media)
- [ ] Crear la página dedicada `/projects/gogym` con:
  - Header técnico con badges de estado y duración.
  - Diagrama de arquitectura por capas (Presentación -> NestJS -> MongoDB -> Render).
  - Tabla de modelo de datos y reglas de negocio para User, Membership y Attendance.
  - Desglose de decisiones técnicas (RBAC, JWT, Cron Jobs, Mongoose).
  - Roadmap de escalabilidad futura (Redis, WebSockets, Microservicios).

### 🟣 FASE 5: Optimización, SEO y Validación de Build (Prioridad Final)
- [ ] Configurar metadata global y OpenGraph en `app/layout.tsx` (título, descripción, preview image).
- [ ] Verificar accesibilidad (etiquetas ARIA, contraste de colores, navegación por teclado).
- [ ] Ejecutar `pnpm build` para validar cero errores de compilación TypeScript.
```

---

## 5. Estrategia de SEO, Accesibilidad y Performance

1. **Server-Side Rendering (SSR) & Metadata API:**
   - La landing principal se renderiza como Server Component por defecto, exportando un objeto `metadata` que incluye OpenGraph tags optimizados para compartir en LinkedIn, Twitter y WhatsApp.
2. **Optimización de Imágenes con `next/image`:**
   - Todas las imágenes utilizan formato moderno WebP/AVIF automático, dimensiones explícitas para evitar Cumulative Layout Shift (CLS) y carga diferida (`loading="lazy"`).
3. **Accesibilidad (WCAG 2.1 AA):**
   - Rótulos `aria-label` en todos los botones de iconos y enlaces externos.
   - Navegación por teclado completa (foco visible en enlaces interactivos, cierre de modal con <kbd>ESC</kbd>).
4. **Performance:**
   - Zero-layout-shift gracias a la pre-reserva de espacio en cards y diagramas.
   - CSS optimizado mediante Tailwind v4 eliminando clases no utilizadas.

---

## 6. Guía Rápida para Iniciar el Desarrollo

Para ejecutar el proyecto localmente y comenzar la implementación:

```bash
# 1. Posicionarse en la carpeta del nuevo proyecto
cd migrafolio

# 2. Instalar dependencias (en caso de clonar en nuevo entorno)
pnpm install

# 3. Iniciar el servidor de desarrollo con Turbopack
pnpm dev

# 4. Abrir en el navegador
# http://localhost:3000
```

---

*Fin del Informe de Auditoría y Plan Maestro.*  
*Archivo generado para consulta técnica y ejecución de la migración.*
