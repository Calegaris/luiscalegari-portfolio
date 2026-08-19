import React from "react";
import { Wrench } from "lucide-react";

export function getTechIcon(name: string, className = "w-5 h-5") {
  const normalized = name.toLowerCase();

  // 1. JAVA
  if (normalized === "java" || (normalized.includes("java") && !normalized.includes("script"))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M8.8 17.2c2.4.3 4.8.4 7.2-.2.6-.1 1.2.2 1.3.8.1.6-.2 1.2-.8 1.3-3 .7-6 .6-9-.2-.6-.2-.9-.7-.7-1.3.1-.5.6-.7 1.2-.4z" fill="#E76F00"/>
        <path d="M7.5 19.8c3.2.4 6.5.4 9.7-.3.6-.1 1.2.3 1.3.9.1.6-.3 1.2-.9 1.3-3.8.8-7.7.8-11.5-.3-.6-.2-.9-.7-.8-1.3.2-.6.7-.7 1.2-.3z" fill="#E76F00"/>
        <path d="M12.5 2c.8 1.5-.4 2.8-1.1 3.9-.7 1.1-.9 2.2-.4 3.4-1.2-1.3-.9-2.8-.2-4.1.8-1.2 1.5-2.2 1.7-3.2z" fill="#5382A1"/>
        <path d="M15.5 4.5c.6 1.1-.3 2.1-.8 3-.5.9-.7 1.7-.3 2.6-.9-1-.7-2.1-.2-3.1.6-.9 1.1-1.7 1.3-2.5z" fill="#5382A1"/>
        <path d="M9.8 14.5c2.1.2 4.2.3 6.3-.1.5-.1 1 .2 1.1.7.1.5-.2 1-.7 1.1-2.6.5-5.2.4-7.8-.1-.5-.1-.8-.6-.7-1.1.1-.4.5-.6 1-.5z" fill="#E76F00"/>
        <path d="M16.9 12.2c-.4-.5-1-.8-1.6-.9.6-.5 1-1.2 1.1-2 .1-1.1-.4-2.1-1.3-2.7-.4-.3-.9-.4-1.4-.4-1.3 0-2.4.8-2.9 2-.4 1-.1 2.2.7 2.9-.6.2-1.2.5-1.7 1-.9.9-1.3 2.2-1.1 3.4.2 1.5 1.4 2.7 2.9 3 2.3.4 4.7.2 6.9-.5.6-.2.9-.7.7-1.3-.1-.5-.6-.8-1.2-.7-1.8.6-3.8.7-5.7.4-1-.2-1.8-1-1.9-2-.1-.8.2-1.7.8-2.3.6-.6 1.4-.9 2.3-.9h.6c1.1 0 2-.6 2.4-1.5.3-.7.2-1.5-.3-2-.3-.3-.8-.5-1.3-.5-.7 0-1.3.4-1.6 1-.2.5-.7.7-1.2.5-.5-.2-.7-.7-.5-1.2.5-1.1 1.6-1.8 2.8-1.8.9 0 1.7.3 2.3.8.7.6 1 1.4.9 2.3-.1.6-.4 1.1-.8 1.5.7.3 1.3.8 1.6 1.5.4.9.3 1.9-.3 2.7z" fill="#5382A1"/>
      </svg>
    );
  }

  // 2. SPRING BOOT
  if (normalized.includes("spring")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.2 11.2c-.4-1.8-1.5-3.3-3.1-4.3l.5-.8c.3-.5.1-1.1-.4-1.4-.5-.3-1.1-.1-1.4.4l-.5.9c-2.3-1-5-.9-7.2.2C5.3 8 2.8 11.7 3.1 15.7c.3 3.9 3.2 7.1 7.1 7.8 4 .7 7.9-1.3 9.7-4.9 1.1-2.2 1.6-4.8 1.3-7.4zm-9.3 9.7c-3.7 0-6.8-2.8-7.2-6.5-.4-3.7 1.9-7.2 5.5-8.2 3.6-1 7.4.7 8.9 4.1 1.5 3.4.3 7.5-2.9 9.3-1.3.9-2.8 1.3-4.3 1.3z" fill="#6DB33F"/>
        <path d="M15.4 12.3c-.3-.2-.7-.1-.9.2-.7 1.1-1.8 1.8-3.1 1.8-1.9 0-3.5-1.6-3.5-3.5 0-1.3.7-2.4 1.8-3.1.3-.2.4-.6.2-.9-.2-.3-.6-.4-.9-.2-1.5.9-2.4 2.5-2.4 4.2 0 2.7 2.2 4.9 4.9 4.9 1.7 0 3.3-.9 4.2-2.4.1-.4 0-.8-.3-1z" fill="#6DB33F"/>
      </svg>
    );
  }

  // 3. NESTJS
  if (normalized.includes("nest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E0234E">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.42 3.12 7.24L12 22l6.88-2.76C20.8 17.42 22 14.85 22 12c0-5.52-4.48-10-10-10zm0 3.5l5 7h-3v4.5h-4V12.5H7l5-7z"/>
      </svg>
    );
  }

  // 4. PYTHON
  if (normalized.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.4 0-6 1.3-6 3.5v2h6v1H4.5C2.5 8.5 1 10.3 1 12.5S2.5 16.5 4.5 16.5h2v-2.5c0-1.7 1.3-3 3-3h5.5c1.4 0 2.5-1.1 2.5-2.5V5.5c0-2.2-2.7-3.5-6-3.5zm-2 2a1 1 0 110 2 1 1 0 010-2z" fill="#387EB8"/>
        <path d="M12.1 22c3.4 0 6-1.3 6-3.5v-2h-6v-1h7.4c2 0 3.5-1.8 3.5-4s-1.5-4-3.5-4h-2v2.5c0 1.7-1.3 3-3 3H8.5c-1.4 0-2.5 1.1-2.5 2.5v3c0 2.2 2.7 3.5 6 3.5zm2-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFE052"/>
      </svg>
    );
  }

  // 5. FASTAPI
  if (normalized.includes("fastapi")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#05998B"/>
        <path d="M11 5L6 14h5l-1 5 6-9h-5l1-5z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 6. NODE.JS
  if (normalized.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.2L3.5 7.1v9.8l8.5 4.9 8.5-4.9V7.1L12 2.2zm0 2.3l6.5 3.8v7.4L12 19.5l-6.5-3.8V8.3L12 4.5z" fill="#5FA04E"/>
        <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="#5FA04E"/>
      </svg>
    );
  }

  // 7. EXPRESS
  if (normalized.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#18181B"/>
        <path d="M5.5 16V8h4.5v1.5H7.2v1.8h2.5v1.4H7.2v1.8H10V16H5.5zm6.2 0l2.1-3.8-2-3.7h1.8l1.1 2.3 1.1-2.3h1.8l-2 3.7 2.1 3.8h-1.8l-1.2-2.4-1.2 2.4h-1.9z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 8. TYPESCRIPT
  if (normalized.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M11.5 9.5H6.5v1.8h1.6v6.2h1.8v-6.2h1.6V9.5zm6.8 2.2c-.3-.4-.8-.7-1.5-.7-.6 0-1.1.2-1.4.5-.3.3-.4.7-.4 1.1 0 .4.1.7.4 1 .2.2.6.5 1.2.7.7.3 1.2.6 1.5.9.3.4.5.8.5 1.4 0 .7-.3 1.3-.8 1.8-.5.5-1.3.7-2.2.7-.8 0-1.5-.2-2-.6-.5-.4-.8-1-1-1.6l1.6-.7c.1.4.3.7.6.9.3.2.7.3 1.1.3.5 0 .9-.1 1.2-.4.3-.2.4-.6.4-.9 0-.3-.1-.6-.3-.8-.2-.2-.6-.4-1.2-.6-.8-.3-1.4-.6-1.7-1-.3-.4-.5-.9-.5-1.5 0-.7.3-1.3.8-1.7.5-.5 1.2-.7 2-.7.7 0 1.3.2 1.8.5.5.3.8.8 1 1.3l-1.5.8z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 9. JAVASCRIPT
  if (normalized === "javascript" || normalized.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M6 17.5l1.6-.9c.3.5.6.8 1.1.8.6 0 1-.3 1-1.2v-6.7h1.9v6.8c0 1-.3 1.8-.8 2.3-.5.5-1.3.8-2.2.8-1.2 0-2.1-.6-2.6-1.9zm7.8-.3l1.6-.9c.4.7.9 1.1 1.7 1.1.7 0 1.2-.4 1.2-.9 0-.5-.4-.8-1.3-1.1l-.8-.3c-1.3-.5-2.1-1.2-2.1-2.4 0-.8.3-1.5.9-2 .6-.5 1.5-.8 2.4-.8 1.1 0 1.9.3 2.5 1l-1.5 1c-.3-.4-.7-.6-1.1-.6-.5 0-.9.2-.9.6 0 .4.3.7 1 .9l.8.3c1.5.6 2.4 1.3 2.4 2.6 0 .9-.4 1.7-1 2.2-.7.5-1.6.8-2.7.8-1.4 0-2.4-.6-3.1-1.9z" fill="#000000"/>
      </svg>
    );
  }

  // 10. REACT
  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
      </svg>
    );
  }

  // 11. NEXT.JS
  if (normalized.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000000" stroke="#333333" strokeWidth="1.2"/>
        <path d="M15.5 8.5v7m-4-7l5.2 7.2M8.5 8.5v7" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // 12. HTML5
  if (normalized.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 2.5l1.6 17.5 6.4 1.8 6.4-1.8 1.6-17.5H4z" fill="#E34F26"/>
        <path d="M12 4.2v16.1l5.1-1.4 1.3-14.7H12z" fill="#EF652A"/>
        <path d="M12 8.2H8.3l.2 2.4H12v-2.4zm0 4.8H8.5l.2 2.4 3.3.9V14l-2-.5-.1-1.1H12v.6zM15.7 8.2H12v2.4h3.5l-.3 3.4-3.2.9v2.4l5.1-1.4.6-7.7z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 13. CSS / TAILWIND
  if (normalized.includes("tailwind") || normalized.includes("css")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.3-1.8 3.8-1.5 1 .2 1.6.8 2.3 1.5 1.2 1.2 2.6 2.5 5.4 2.5 2.7 0 4.3-1.3 5-4-1 1.3-2.3 1.8-3.8 1.5-1-.2-1.6-.8-2.3-1.5C16.2 7.3 14.8 6 12 6zm-7 6.5c-2.7 0-4.3 1.3-5 4 1-1.3 2.3-1.8 3.8-1.5 1 .2 1.6.8 2.3 1.5 1.2 1.2 2.6 2.5 5.4 2.5 2.7 0 4.3-1.3 5-4-1 1.3-2.3 1.8-3.8 1.5-1-.2-1.6-.8-2.3-1.5-1.2-1.2-2.6-2.5-5.4-2.5z" fill="#38BDF8"/>
      </svg>
    );
  }

  // 14. MONGODB
  if (normalized.includes("mongo") && !normalized.includes("mongoose")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C11.6 2.5 7 8 7 13.2c0 3.3 2.2 6.1 5 6.8 2.8-.7 5-3.5 5-6.8C17 8 12.4 2.5 12 2z" fill="#47A248"/>
        <path d="M12 2v18c.2 0 .4 0 .6-.1 2.5-.7 4.4-3.3 4.4-6.7 0-5-4.4-10.4-5-11.2z" fill="#499D4A"/>
        <path d="M12 21.5c-.3.4-.6.5-.6.5s.4.1.6-.5z" fill="#3FA037"/>
      </svg>
    );
  }

  // 15. MONGOOSE
  if (normalized.includes("mongoose")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#880000"/>
        <path d="M7 17l2.5-6.5L12 14l2.5-3.5L17 17H7z" fill="#FFFFFF"/>
        <circle cx="12" cy="7.5" r="2" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 16. POSTGRESQL
  if (normalized.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 3c-4.4 0-8 3.4-8 7.6 0 2.8 1.6 5.3 4 6.6v2.8l3.2-1.6c.3 0 .5.1.8.1 4.4 0 8-3.4 8-7.6S16.4 3 12 3z" fill="#336791"/>
        <path d="M12 6.5c-2.8 0-5 2.1-5 4.8 0 1.8 1 3.3 2.5 4.1v1.8l2-1c.2 0 .3.1.5.1 2.8 0 5-2.1 5-4.8s-2.2-5-5-5z" fill="#FFFFFF" fillOpacity="0.3"/>
      </svg>
    );
  }

  // 17. MYSQL
  if (normalized.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 7 3 12c0 2.2.8 4.2 2.1 5.8l1.4-1.4C5.4 15.1 4.8 13.6 4.8 12c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2c0 1.6-.5 3.1-1.5 4.3l1.4 1.4C20.2 16.2 21 14.2 21 12c0-5-4-9-9-9z" fill="#00758F"/>
        <path d="M15.5 12c0 1.9-1.6 3.5-3.5 3.5S8.5 13.9 8.5 12 10.1 8.5 12 8.5s3.5 1.6 3.5 3.5z" fill="#F29111"/>
      </svg>
    );
  }

  // 18. PRISMA
  if (normalized.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12.5 2.5l8.5 15.5-5 3.5-11-7 7.5-12z" fill="#16A394"/>
        <path d="M12.5 2.5l3.5 19-11-7 7.5-12z" fill="#2D3748"/>
      </svg>
    );
  }

  // 19. SQLALCHEMY
  if (normalized.includes("sqlalchemy")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l-6 10.5h12L12 2z" fill="#D71E00"/>
        <circle cx="12" cy="17" r="4" fill="#D71E00"/>
        <circle cx="12" cy="17" r="2" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 20. ORACLE
  if (normalized.includes("oracle")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="7" stroke="#F80000" strokeWidth="3" fill="none"/>
      </svg>
    );
  }

  // 21. DOCKER
  if (normalized.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13 3h2v2h-2V3zm-3 0h2v2h-2V3zM7 3h2v2H7V3zm6 3h2v2h-2V6zm-3 0h2v2h-2V6zm-3 0h2v2H7V6zm-3 0h2v2H4V6zm9 3h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2H7V9zm-3 0h2v2H4V9zm-3 0h2v2H1V9zm22.5 2.5c-.3-.2-1.2-.4-2.1-.2-.2-.6-.6-1.1-1.1-1.5-.7-.5-1.7-.7-2.6-.4-.3-.7-.9-1.3-1.6-1.6l-.6-.2-.3.5c-.5.8-.6 1.7-.3 2.5-.5.3-.9.7-1.2 1.2H1v1.6c0 1.6.5 3.2 1.5 4.5 1.3 1.7 3.2 2.8 5.4 3.1 4.5.6 9.1-.5 12.8-3.1 1.4-1 2.3-2.4 2.8-4.1.3-1.1.1-2-.5-2.3z"/>
      </svg>
    );
  }

  // 22. GIT
  if (normalized === "git" || (normalized.includes("git") && !normalized.includes("hub"))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.7 10.7l-8.4-8.4c-.9-.9-2.5-.9-3.4 0L8.2 4 10.4 6.2c.7-.2 1.5-.1 2.1.5.6.6.7 1.4.5 2.1l2.5 2.5c.7-.2 1.5-.1 2.1.5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.7-1.4-.5-2.1L11.6 10.2v4.8c.2.2.4.4.5.7.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.8-.8-.8-2.2 0-3 .3-.3.6-.5 1-.6v-4.9c-.4-.1-.7-.3-1-.6-.6-.6-.7-1.4-.5-2.1L6.4 5.8 2.3 9.9c-.9.9-.9 2.5 0 3.4l8.4 8.4c.9.9 2.5.9 3.4 0l7.6-7.6c.9-.9.9-2.4 0-3.4z" fill="#F05032"/>
      </svg>
    );
  }

  // 23. GITHUB
  if (normalized.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    );
  }

  // 24. RENDER
  if (normalized.includes("render")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 17V7l8-4 8 4v10l-8 4-8-4z" stroke="#46E3B7" strokeWidth="2"/>
        <path d="M12 3v18M4 7l16 10M20 7L4 17" stroke="#46E3B7" strokeWidth="1.5" strokeOpacity="0.5"/>
      </svg>
    );
  }

  // 25. POSTMAN
  if (normalized.includes("postman")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
        <path d="M16.5 12l-7.5-4.5v9l7.5-4.5z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 26. JIRA
  if (normalized.includes("jira")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.5 2H6.8C4.1 2 2 4.1 2 6.8v4.7l9.5-9.5z" fill="#0052CC"/>
        <path d="M16.2 6.8H11.5L2 16.3v.9c0 2.7 2.1 4.8 4.8 4.8h4.7l9.5-9.5-4.8-5.7z" fill="#2684FF"/>
        <path d="M20.9 11.5h-4.7L6.8 21h.9c2.7 0 4.8-2.1 4.8-4.8v-.9l8.4-3.8z" fill="#0052CC"/>
      </svg>
    );
  }

  // 27. TRELLO
  if (normalized.includes("trello")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0079BF"/>
        <rect x="4.5" y="4.5" width="6.5" height="13" rx="1.5" fill="#FFFFFF"/>
        <rect x="13" y="4.5" width="6.5" height="8.5" rx="1.5" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 28. JWT & BCRYPT
  if (normalized.includes("jwt") || normalized.includes("bcrypt") || normalized.includes("shield")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 5v6.5c0 5 3.4 9.7 8 10.5 4.6-.8 8-5.5 8-10.5V5l-8-3z" fill="#00B9F1" fillOpacity="0.2" stroke="#00B9F1" strokeWidth="1.8"/>
        <path d="M9 12l2 2 4-4" stroke="#D63AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  return <Wrench className={`${className} text-slate-400`} />;
}
