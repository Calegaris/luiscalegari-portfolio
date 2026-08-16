export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  subjectsCompleted: string;
  gpa: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  tooltip?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  emitterKey: 'ibm' | 'oracle-cloud' | 'educacionit' | 'alura-latam' | 'talento-tech' | 'other';
  areaKey: 'frontend' | 'backend' | 'databases' | 'cloud' | 'ia';
  image: string;
  credentialUrl: string;
  date?: string;
}

export interface ArchitectureTier {
  title: string;
  components: string[];
}

export interface DomainEntity {
  name: string;
  attributes: {
    name: string;
    type: string;
    description: string;
  }[];
  businessRules: string[];
}

export interface TechnicalDecision {
  title: string;
  category: string;
  decision: string;
  rationale: string[];
  tradeoffs?: string[];
  securityMeasures?: string[];
  outcome: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  role: string;
  status: string;
  duration: string;
  thumbnail: string;
  repoUrl?: string;
  repoPublic: boolean;
  repoPrivateReason?: string;
  liveUrl?: string;
  technologies: string[];
  highlights: string[];
  overview: {
    roleDescription: string;
    scope: string;
    mainAchievement: string;
  };
  keyFeatures: {
    category: string;
    icon: string;
    items: string[];
  }[];
  architecture: {
    description: string;
    tiers: ArchitectureTier[];
  };
  domainModel: {
    description: string;
    entities: DomainEntity[];
    relationships: string[];
  };
  technicalDecisions: TechnicalDecision[];
  demoItems: {
    title: string;
    description: string;
    image: string;
    type: 'image' | 'video';
  }[];
  roadmap: {
    phase: string;
    title: string;
    items: string[];
  }[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    fullName: string;
    role: string;
    specialization: string;
    bioParagraphs: string[];
    location: string;
    cvUrl: string;
    socials: SocialLink[];
    contactFormEndpoint: string;
  };
  education: EducationItem[];
  skillCategories: SkillCategory[];
  certificates: CertificateItem[];
  projects: ProjectCaseStudy[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Luis Calegari",
    fullName: "Luis Ángel Calegari",
    role: "Desarrollador Backend",
    specialization: "Java Spring Boot | NestJS | Cloud Enthusiast",
    bioParagraphs: [
      "Soy Desarrollador Backend y estudiante de la Licenciatura en Informática y Tecnicatura Universitaria en Tecnologías Web en la Universidad Nacional del Oeste. Mi especialidad es la construcción de APIs RESTful robustas y escalables, dominando tanto el ecosistema de Java (Spring Boot) como el de Node.js (NestJS). Complemento mi perfil de desarrollo con conocimientos en infraestructura cloud (Oracle Cloud Certified) y bases de datos SQL y NoSQL.",
      "Me caracterizo por la atención al detalle en la calidad del código. Disfruto del trabajo en equipo y tengo facilidad para adaptarme a nuevos desafíos técnicos. Actualmente, busco una oportunidad profesional donde pueda aportar valor desde el primer día, aplicando mis conocimientos en arquitectura de software y despliegue de aplicaciones."
    ],
    location: "Moreno, Buenos Aires, Argentina",
    cvUrl: "/docs/CV_Luis_Angel_Calegari.pdf",
    contactFormEndpoint: "https://formspree.io/f/xeogyarp",
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luis-angel-calegari/",
        icon: "Linkedin",
        ariaLabel: "LinkedIn de Luis Calegari"
      },
      {
        name: "GitHub",
        url: "https://github.com/Calegaris",
        icon: "Github",
        ariaLabel: "GitHub de Luis Calegari"
      },
      {
        name: "X (Twitter)",
        url: "https://x.com/CalegariLuis97",
        icon: "Twitter",
        ariaLabel: "X de Luis Calegari"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/calegari_luis_/",
        icon: "Instagram",
        ariaLabel: "Instagram de Luis Calegari"
      }
    ]
  },

  education: [
    {
      id: "uno-licenciatura",
      institution: "Universidad Nacional del Oeste (UNO)",
      degree: "Licenciatura en Informática (2do/3er año)",
      period: "2022 - Actualidad",
      status: "En curso",
      subjectsCompleted: "13/16 materias con final",
      gpa: "8.62"
    },
    {
      id: "uno-tecnicatura",
      institution: "Universidad Nacional del Oeste (UNO)",
      degree: "Tecnicatura Universitaria en Tecnologías Web (2do/3er año)",
      period: "2025 - Actualidad",
      status: "En curso",
      subjectsCompleted: "11/16 materias con final",
      gpa: "8.73"
    }
  ],

  skillCategories: [
    {
      category: "Backend",
      skills: [
        { name: "Java", icon: "devicon-java-plain" },
        { name: "Spring Boot", icon: "devicon-spring-plain", tooltip: "Ecosistema Spring Boot & Spring Data" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "NestJS", icon: "devicon-nestjs-plain", tooltip: "Arquitectura modular & Decorators" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "JWT & Bcrypt", icon: "shield" }
      ]
    },
    {
      category: "Bases de datos",
      skills: [
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Oracle DB", icon: "devicon-oracle-plain", tooltip: "Oracle Cloud Infrastructure & DB" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Next.js", icon: "devicon-nextjs-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "CSS3 / Tailwind", icon: "devicon-css3-plain" }
      ]
    },
    {
      category: "Infraestructura & Herramientas",
      skills: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Render CI/CD", icon: "devicon-render-plain" },
        { name: "Postman", icon: "devicon-postman-plain" },
        { name: "Figma", icon: "devicon-figma-plain" },
        { name: "Jira", icon: "devicon-jira-plain" },
        { name: "Trello", icon: "devicon-trello-plain" }
      ]
    }
  ],

  certificates: [
    {
      id: "oracle-cloud-associate",
      title: "Oracle Cloud Certified Associate",
      issuer: "Oracle",
      emitterKey: "oracle-cloud",
      areaKey: "cloud",
      image: "/images/certificados/OCIcertificado.pdf.jpg",
      credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=32A7B22B15F06845B8F617C16D6384E2BD02777679181B19E74DB5250AF4D7DB"
    },
    {
      id: "ibm-ai-fundamentals",
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      emitterKey: "ibm",
      areaKey: "ia",
      image: "/images/certificados/artificial-intelligence-fundamentals.png",
      credentialUrl: "https://www.credly.com/badges/f6fd26ae-d045-4aaf-825f-2383f0436de0/public_url"
    },
    {
      id: "educacionit-web-html",
      title: "Desarrollo Web con HTML",
      issuer: "EducaciónIT",
      emitterKey: "educacionit",
      areaKey: "frontend",
      image: "/images/certificados/Certificado-Desarrollo-Web-con-HTML-EducaciónIT.png",
      credentialUrl: "https://www.educacionit.com/perfil/luis-angel-calegari-1058939/certificado/80151?_gl"
    },
    {
      id: "educacionit-poo-ia",
      title: "Programación Orientada a Objetos con IA",
      issuer: "EducaciónIT",
      emitterKey: "educacionit",
      areaKey: "backend",
      image: "/images/certificados/Certificado-Programación-orientada-a-objetos-con-IA-EducaciónIT.jpeg",
      credentialUrl: "https://www.educacionit.com"
    },
    {
      id: "alura-java-api",
      title: "Java: Consumir API, Escribir Archivos y Manejo de Errores",
      issuer: "Alura Latam / Oracle ONE",
      emitterKey: "alura-latam",
      areaKey: "backend",
      image: "/images/certificados/Luis Angel Calegari - Curso Java_ consumir API, escribir archivos y manejar errores - Alura_page-0001.jpg",
      credentialUrl: "https://app.aluracursos.com/certificate/bda4f05a-8908-4771-b3b6-559868fad11a?lang"
    },
    {
      id: "talento-tech-frontend",
      title: "Certificado de Finalización - Front-End JS",
      issuer: "Talento Tech (GCBA)",
      emitterKey: "talento-tech",
      areaKey: "frontend",
      image: "/images/certificados/Diploma_TT.pdf.jpg",
      credentialUrl: "https://buenosaires.gob.ar/educacion/agencia-de-habilidades-para-el-futuro/talento-tech"
    },
    {
      id: "alura-logica-programacion",
      title: "Formación Lógica de Programación con JavaScript",
      issuer: "Alura Latam",
      emitterKey: "alura-latam",
      areaKey: "frontend",
      image: "/images/certificados/Luis Angel Calegari - Formación Lógica de programación con JavaScript - Alura.pdf.jpg",
      credentialUrl: "https://app.aluracursos.com"
    },
    {
      id: "alura-principiante-programacion",
      title: "Formación Principiante en Programación",
      issuer: "Alura Latam",
      emitterKey: "alura-latam",
      areaKey: "backend",
      image: "/images/certificados/Luis Angel Calegari - Formación Principiante en Programación - Alura.pdf.jpg",
      credentialUrl: "https://app.aluracursos.com"
    },
    {
      id: "alura-desarrollo-personal",
      title: "Formación Desarrollo Personal G8",
      issuer: "Alura Latam",
      emitterKey: "alura-latam",
      areaKey: "backend",
      image: "/images/certificados/Luis Angel Calegari - Formación Desarrollo personal g8 - Alura.pdf.jpg",
      credentialUrl: "https://app.aluracursos.com"
    }
  ],

  projects: [
    {
      slug: "gogym",
      title: "GoGym: Plataforma Integral de Gestión de Gimnasios",
      tagline: "Arquitectura backend escalable con NestJS, autenticación RBAC y control de acceso en tiempo real por QR",
      shortDescription: "Sistema integral de gestión para gimnasios con arquitectura modular en NestJS, base de datos MongoDB Atlas, autenticación JWT con RBAC, sistema de Check-in/Check-out con validación dinámica QR y CI/CD en Render.",
      role: "Desarrollador Backend Lead",
      status: "En producción",
      duration: "~5 meses",
      thumbnail: "/images/goGym.png",
      repoPublic: false,
      repoPrivateReason: "Código bajo confidencialidad por modelo de propiedad intelectual y futura comercialización SaaS.",
      technologies: [
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Mongoose ODM",
        "JWT",
        "Bcrypt",
        "React",
        "Render",
        "Postman"
      ],
      highlights: [
        "Arquitectura monolítica modular altamente tipada con inyección de dependencias en NestJS.",
        "Control de Acceso Basado en Roles (RBAC: ADMIN y CLIENT) mediante Guards y Custom Decorators.",
        "Sistema de control de asistencia Check-in/Check-out con validación de estados y QR dinámico.",
        "Worker / Cron Jobs programados para ciclo de vida y expiración automática de membresías.",
        "Infraestructura cloud en Render con pipeline automatizado de CI/CD conectado a GitHub."
      ],
      overview: {
        roleDescription: "Responsable del diseño e implementación integral del backend desde cero: modelado de datos en Mongoose, capas de controllers, services, guards de autorización, seguridad criptográfica y despliegue productivo.",
        scope: "Desarrollado como proyecto integrador final de Fundación Banco Nación & Fundación Pescar. Requirió solucionar flujos críticos de negocio: registro seguro, cobro/asignación de membresías, control de vencimiento y registro de accesos en tiempo real.",
        mainAchievement: "API RESTful productiva y resiliente con tiempos de respuesta óptimos, cero colisiones en accesos concurrentes y administración modular lista para escalar."
      },
      keyFeatures: [
        {
          category: "Autenticación & Autorización",
          icon: "ShieldCheck",
          items: [
            "Autenticación stateless basada en tokens JWT con claims firmados y expiración estricta.",
            "Cifrado de contraseñas mediante Bcrypt con work factor adaptativo (10 rounds).",
            "Guardias de autorización RBAC (Admin / Client) aplicadas a nivel de endpoint."
          ]
        },
        {
          category: "Gestión de Membresías",
          icon: "CreditCard",
          items: [
            "Ciclo de vida de planes (Basic, Premium, VIP) con fechas de inicio, corte y estados.",
            "Procesamiento de expiración automática mediante tareas programadas (Cron jobs).",
            "Manejo de renovaciones y suspensiones con validación de solapamientos."
          ]
        },
        {
          category: "Tótem & Control de Acceso QR",
          icon: "QrCode",
          items: [
            "Validación instantánea de credencial activa al momento del escaneo en el punto de acceso.",
            "Registro inmutable de Check-in y Check-out calculando la duración exacta de sesión.",
            "Prevención de accesos simultáneos o duplicados mediante validación de sesión abierta."
          ]
        },
        {
          category: "Arquitectura & Calidad API",
          icon: "Server",
          items: [
            "Diseño RESTful estandarizado con DTOs validados con class-validator.",
            "Manejo global de excepciones con filtros centralizados y respuestas homogéneas.",
            "Monitoreo de endpoints y documentación de contratos técnicos para frontend."
          ]
        }
      ],
      architecture: {
        description: "El sistema implementa una arquitectura en capas desacoplada y orientada a dominios dentro del ecosistema de NestJS:",
        tiers: [
          {
            title: "1. Capa de Presentación (Frontend / Clients)",
            components: [
              "Single Page Application en React con consumo de API REST",
              "Puntos de acceso móvil / web responsive para socios y panel de administración para recepcionistas"
            ]
          },
          {
            title: "2. Capa de Servicios y Lógica de Negocio (NestJS Engine)",
            components: [
              "Controllers REST con DTOs y validación estricta",
              "Services con reglas de negocio aisladas e inyección de dependencias",
              "Guards y Interceptors para autenticación JWT, RBAC y serialización de salida",
              "Módulos encapsulados: AuthModule, UsersModule, MembershipsModule, AttendanceModule"
            ]
          },
          {
            title: "3. Capa de Persistencia (Data Tier)",
            components: [
              "MongoDB Atlas con réplicas gestionadas en la nube",
              "Mongoose ODM con esquemas fuertemente tipados, índices en queries frecuentes y hooks pre-save"
            ]
          },
          {
            title: "4. Infraestructura & CI/CD",
            components: [
              "Despliegue automatizado en Render.com conectado a Git",
              "Variables de entorno aisladas y certificados SSL/TLS automáticos"
            ]
          }
        ]
      },
      domainModel: {
        description: "El modelo relacional embebido y referenciado en MongoDB fue concebido para garantizar integridad transaccional y alto desempeño en lecturas de accesos.",
        entities: [
          {
            name: "User (Usuario)",
            attributes: [
              { name: "id", type: "ObjectId", description: "Identificador único (PK)" },
              { name: "email", type: "String (Unique)", description: "Email validado bajo RFC 5322" },
              { name: "passwordHash", type: "String", description: "Hash bcrypt con salt individual" },
              { name: "role", type: "Enum (ADMIN | CLIENT)", description: "Nivel de privilegios RBAC" },
              { name: "membership", type: "Ref -> Membership", description: "Referencia a membresía activa" },
              { name: "isActive", type: "Boolean", description: "Estado de la cuenta" }
            ],
            businessRules: [
              "Email único e inmutable para login.",
              "Contraseña con longitud mínima de 8 caracteres cifrada con bcrypt.",
              "Un usuario sólo puede poseer una membresía activa en simultáneo."
            ]
          },
          {
            name: "Membership (Membresía)",
            attributes: [
              { name: "id", type: "ObjectId", description: "Identificador único (PK)" },
              { name: "plan", type: "Enum (BASIC | PREMIUM | VIP)", description: "Nivel y categoría de beneficios" },
              { name: "startDate", type: "Date", description: "Fecha de inicio de cobertura" },
              { name: "endDate", type: "Date", description: "Fecha de caducidad" },
              { name: "status", type: "Enum (ACTIVE | EXPIRED | SUSPENDED)", description: "Estado actual de habilitación" },
              { name: "user", type: "Ref -> User", description: "Relación de pertenencia" }
            ],
            businessRules: [
              "La fecha de fin debe ser estrictamente posterior a la fecha de inicio.",
              "El estado pasa automáticamente a EXPIRED una vez alcanzada la fecha de fin.",
              "Soporte para extensiones y renovaciones anticipadas."
            ]
          },
          {
            name: "Attendance (Asistencia / Accesos)",
            attributes: [
              { name: "id", type: "ObjectId", description: "Identificador único (PK)" },
              { name: "user", type: "Ref -> User", description: "Socio que efectúa el acceso" },
              { name: "checkInTime", type: "Date", description: "Timestamp exacto de ingreso" },
              { name: "checkOutTime", type: "Date (Nullable)", description: "Timestamp de egreso" },
              { name: "duration", type: "Number (ms)", description: "Tiempo total de permanencia en el establecimiento" },
              { name: "qrCode", type: "String", description: "Token efímero de validación de acceso" }
            ],
            businessRules: [
              "El socio debe contar con una membresía en estado ACTIVE para ingresar.",
              "No se permiten check-ins solapados sin cierre de sesión previo.",
              "Registro histórico inmutable para auditoría y analítica del gimnasio."
            ]
          }
        ],
        relationships: [
          "User (1) <---> (0..*) Membership: Historial de membresías contratadas, con una sola activa a la vez.",
          "User (1) <---> (0..*) Attendance: Registro cronológico de accesos del cliente.",
          "Membership status es el guardián de autorización para la creación de nuevos Attendance logs."
        ]
      },
      technicalDecisions: [
        {
          title: "Elección de NestJS sobre Express puro",
          category: "Arquitectura",
          decision: "Se adoptó NestJS como framework central del backend.",
          rationale: [
            "Tipado estricto con TypeScript que previene errores en tiempo de compilación.",
            "Contenedor de Inyección de Dependencias (DI) nativo que facilita testing y desacoplamiento.",
            "Arquitectura modular limpia que segmenta responsabilidades de negocio de forma clara.",
            "Ecosistema robusto de Guards, Interceptors y Pipes para validación declarativa."
          ],
          tradeoffs: [
            "Curva de aprendizaje inicial superior respecto a micro-frameworks como Express.",
            "Mayor boilerplate inicial compensado con creces en escalabilidad y mantenimiento."
          ],
          outcome: "Código estructurado, predecible y con clara separación entre controladores, servicios y persistencia."
        },
        {
          title: "Persistencia NoSQL con MongoDB + Mongoose",
          category: "Base de Datos",
          decision: "Selección de MongoDB Atlas con Mongoose ODM.",
          rationale: [
            "Modelo documental natural para esquemas de usuario, suscripción e historial de visitas.",
            "Facilidad de evolución del esquema sin migraciones pesadas en etapas de prototipado rápido.",
            "Alta velocidad de lectura en logs continuos de asistencias.",
            "Hosting administrado con réplicas y copias de seguridad automáticas en MongoDB Atlas."
          ],
          tradeoffs: [
            "Manejo de transacciones multi-documento requiere atención explícita si se compara con motores ACID relacionales puros."
          ],
          outcome: "Alta flexibilidad y tiempos de respuesta ultra veloces en consultas operativas diarias."
        },
        {
          title: "Estrategia de Seguridad JWT + Bcrypt",
          category: "Seguridad",
          decision: "Autenticación stateless con JSON Web Tokens y hashing Bcrypt (10 rounds).",
          rationale: [
            "Stateless: Permite escalabilidad horizontal sin necesidad de almacenar sesiones en servidor.",
            "Compatible con clientes web, tótem de lectura y futuras apps móviles.",
            "Criptografía resistente: Salt dinámico y tiempo de cómputo ajustado contra ataques de fuerza bruta."
          ],
          securityMeasures: [
            "Tokens de acceso de vida corta.",
            "Headers de seguridad HTTP y sanitización de inputs.",
            "Comparación de hash en tiempo constante para prevenir timing attacks."
          ],
          outcome: "Autenticación segura y fluida en todos los endpoints privados del sistema."
        },
        {
          title: "Control de Acceso Basado en Roles (RBAC)",
          category: "Autorización",
          decision: "Implementación de Guards personalizados para distinguir privilegios ADMIN vs CLIENT.",
          rationale: [
            "Protección granular por ruta y método HTTP.",
            "Fácil extensión futura a nuevos roles (ej. PROFESOR, RECEPCIÓN)."
          ],
          outcome: "Garantía de que sólo los administradores acceden a métricas globales y altas de membresías."
        },
        {
          title: "CI/CD Automatizado en Render",
          category: "DevOps",
          decision: "Configuración de pipeline de integración y despliegue continuo en Render.com.",
          rationale: [
            "Despliegues automáticos ante pushes a la rama principal de GitHub.",
            "Gestión segura de variables de entorno y certificados SSL automáticos.",
            "Health checks automáticos para verificar disponibilidad del servicio."
          ],
          outcome: "Despliegue sin fricción y 100% automatizado con cero tiempo de inactividad manual."
        }
      ],
      demoItems: [
        {
          title: "Flujo de Autenticación Segura",
          description: "Login con validación JWT, manejo de errores de credenciales y redirección por rol.",
          image: "/images/goGym.png",
          type: "image"
        },
        {
          title: "Panel de Socios & Membresías",
          description: "Visualización de estado del plan, días restantes y código QR de acceso.",
          image: "/images/goGym.png",
          type: "image"
        },
        {
          title: "Control de Acceso en Punto de Ingreso",
          description: "Sistema de Check-in en tiempo real con confirmación inmediata de vigencia.",
          image: "/images/goGym.png",
          type: "image"
        },
        {
          title: "Panel Administrativo y Analítica",
          description: "Gestión centralizada de socios, asignación de planes y registro global de accesos.",
          image: "/images/goGym.png",
          type: "image"
        }
      ],
      roadmap: [
        {
          phase: "Fase 1 (Corto plazo)",
          title: "Optimización & Rendimiento",
          items: [
            "Caché en Redis para lecturas masivas de membresías vigentes.",
            "Paginación por cursor para reportes extensos de asistencia.",
            "Rate limiting distribuido en rutas de autenticación."
          ]
        },
        {
          phase: "Fase 2 (Mediano plazo)",
          title: "Integraciones & Automatización",
          items: [
            "WebSockets para dashboard en vivo de ocupación en sala de máquinas.",
            "Integración de pasarela de pago (MercadoPago / Stripe) con webhooks automáticos.",
            "Notificaciones automáticas por Email/WhatsApp ante vencimiento de cuota."
          ]
        },
        {
          phase: "Fase 3 (Largo plazo)",
          title: "Arquitectura & Microservicios",
          items: [
            "Desacoplamiento del servicio de asistencia y tótem en un microservicio de baja latencia.",
            "Documentación interactiva OpenAPI / Swagger integrada en pipeline.",
            "Event-driven architecture con colas de mensajes (RabbitMQ o Kafka)."
          ]
        }
      ]
    }
  ]
};
