# 💼 Luis Ángel Calegari — Software Engineer Portfolio

<p align="center">
  <img src="public/images/profile/luis.png" alt="Luis Ángel Calegari" width="120" style="border-radius: 50%;" />
</p>

<p align="center">
  <b>Desarrollador Full Stack & Backend Lead</b><br>
  Especializado en arquitecturas resilientes con <b>Java (Spring Boot 3)</b>, <b>Node.js (NestJS)</b>, <b>Python (FastAPI / Flask)</b> y <b>Next.js 16 / React 19</b>.
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/luis-angel-calegari/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/Calegaris">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:lcalegari97@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

## 🌟 Descripción del Proyecto

Este repositorio contiene el código fuente de mi **Portfolio Profesional de Ingeniería de Software**, diseñado para presentar de forma interactiva y estructurada mis proyectos reales, certificaciones oficiales de la industria (Oracle OCI, IBM AI) y trayectoria técnica.

La aplicación fue desarrollada con las últimas tecnologías del ecosistema moderno de desarrollo web, priorizando una experiencia de usuario de alto impacto visual, arquitectura de componentes modular, accesibilidad y rendimiento extremo.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Framework Web** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Biblioteca UI** | [React 19](https://react.dev/) |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) (Tipado estricto) |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) • Vanilla CSS Tokens |
| **Animaciones** | [Framer Motion](https://www.framer.com/motion/) |
| **Iconografía** | [Lucide React](https://lucide.dev/) • Devicons personalizados |
| **Formularios & Contacto** | [Formspree API](https://formspree.io/) con feedback de estado reactivo |
| **Optimización & Rendimiento**| `next/image` con LCP eager loading • SSG (Static Site Generation) |

---

## ✨ Características Principales

* 🎛️ **Catálogo de Proyectos con Filtro Reactivo:** Barra interactiva de selección por especialidad (*Todos, Backend, Full Stack, Frontend*) con conteos dinámicos en tiempo real.
* ⏭️ **Paginación 2 en 2:** Carrusel ergonómico por bloques de 2 tarjetas sin solapamientos en escritorio.
* 🏆 **Insignias y Acciones Especiales:** Badges pulsantes interactivos de Hackathon (Oracle ONE / No Country), botón dedicado para Video Demo en YouTube y enlaces independientes a repositorios de Backend y Frontend.
* 🎓 **Galería de Certificaciones 6 + 3:** Cuadrícula con apertura modal en alta resolución para credenciales oficiales e invitación interactiva a LinkedIn con efecto de latido azul.
* 🌓 **Estética Dark Engineering:** Paleta armónica de azules profundos, marcos con glassmorphism, halos sutiles y micro-interacciones al hacer hover.
* 📱 **Diseño 100% Responsivo:** Adaptabilidad ergonómica fluida para smartphones, tablets y pantallas de escritorio.

---

## 📂 Estructura del Proyecto

```text
migrafolio/
├── app/
│   ├── layout.tsx              # Layout principal, fuentes Geist y metadatos SEO
│   ├── page.tsx                # Página principal del portfolio
│   ├── api/                    # Endpoints internos (OpenGraph dinámico)
│   └── projects/[slug]/        # Páginas dinámicas de Case Studies (SSG)
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar flotante, Footer
│   │   ├── sections/           # Hero, SobreMí, ProjectsGrid, Certificates, Contacto
│   │   ├── icons/              # Iconos técnicos y de redes sociales
│   │   └── projects/           # Componentes modulares de Case Studies
│   └── data/
│       └── portfolioData.ts    # Fuente de verdad centralizada y tipada de todo el portfolio
├── public/
│   ├── docs/                   # CV descargable en formato PDF
│   └── images/
│       ├── profile/            # Fotos de perfil
│       ├── projects/           # Capturas de pantalla de proyectos
│       └── certificados/       # Certificados oficiales
├── package.json
└── tsconfig.json
```

---

## 🚀 Inicio Rápido en Desarrollo Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Calegaris/luiscalegari-portfolio.git
cd luiscalegari-portfolio/migrafolio
```

### 2. Instalar dependencias con `pnpm` (o `npm` / `yarn`)
```bash
pnpm install
```

### 3. Ejecutar el servidor de desarrollo
```bash
pnpm dev
```
Abrí [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### 4. Compilar para Producción
```bash
pnpm build
pnpm start
```

---

## 🧪 Pruebas y Validación de Código

```bash
# Comprobación de tipos TypeScript
pnpm exec tsc --noEmit

# Análisis estático con ESLint
pnpm lint
```

---

## 👤 Autor

**Luis Ángel Calegari**  
*Desarrollador Full Stack / Backend Lead*  
*Estudiante de Licenciatura en Informática & Tecnicatura en Tecnologías Web (UNO)*

* 🌐 Portfolio: [luiscalegari.vercel.app](https://github.com/Calegaris)
* 💼 LinkedIn: [linkedin.com/in/luis-angel-calegari](https://www.linkedin.com/in/luis-angel-calegari/)
* 🐙 GitHub: [github.com/Calegaris](https://github.com/Calegaris)
* 📧 Email: [lcalegari97@gmail.com](mailto:lcalegari97@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
