"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  ShieldCheck, 
  QrCode, 
  Database, 
  ChevronDown, 
  Check, 
  Code2, 
  Zap
} from "lucide-react";

interface Pillar {
  id: string;
  number: string;
  title: string;
  badge: string;
  icon: typeof Clock;
  summary: string;
  codeSnippet: string;
  keyBenefits: string[];
  technicalDetails: {
    label: string;
    description: string;
  }[];
}

const pillars: Pillar[] = [
  {
    id: "cron-jobs",
    number: "01",
    title: "Cron Jobs & Automatización de Ciclo de Vida",
    badge: "@nestjs/schedule",
    icon: Clock,
    summary: "Auditoría periódica desatendida ejecutada todos los días a medianoche para evaluar fechas de caducidad, actualizar estados a EXPIRED y bloquear accesos de forma instantánea sin carga operativa humana.",
    codeSnippet: `@Injectable()
export class MembershipsCronService {
  constructor(private readonly membershipModel: Model<MembershipDocument>) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleMembershipExpirationAudit() {
    const now = new Date();
    await this.membershipModel.updateMany(
      { status: MembershipStatus.ACTIVE, endDate: { $lt: now } },
      { $set: { status: MembershipStatus.EXPIRED } }
    );
  }
}`,
    keyBenefits: [
      "Cero intervención manual del personal de recepción para cortes de servicio.",
      "Consistencia inmediata entre la base de datos y la validación en el punto de acceso.",
      "Operación en background desacoplada de los hilos de petición HTTP de los usuarios."
    ],
    technicalDetails: [
      { label: "Módulo", description: "NestJS Schedule Module integrado en el Core Engine" },
      { label: "Frecuencia", description: "00:00:00 UTC (CronExpression.EVERY_DAY_AT_MIDNIGHT)" },
      { label: "Query Atómica", description: "updateMany con filtro indexado por status y endDate" }
    ]
  },
  {
    id: "rbac-auth",
    number: "02",
    title: "Control de Acceso Multinivel (RBAC & Guards)",
    badge: "JWT + Custom Decorators",
    icon: ShieldCheck,
    summary: "Seguridad granular con tokens JWT stateless de corta duración y Guards basados en reflexión de metadatos (@Roles) para restringir rutas sensibles a Administradores o Clientes.",
    codeSnippet: `@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
@Get('analytics/revenue')
async getGymRevenueMetrics(@Query() filterDto: DateRangeDto) {
  return this.analyticsService.calculateMonthlyRevenue(filterDto);
}`,
    keyBenefits: [
      "Protección estricta de rutas de facturación, usuarios y métricas ante clientes sin privilegios.",
      "Validación de claims sin necesidad de consultas repetitivas a la base de datos (Stateless).",
      "Decorador @Roles declarativo que mantiene los controladores limpios y legibles."
    ],
    technicalDetails: [
      { label: "Hashing", description: "Bcrypt con 10 salt rounds y comparación en tiempo constante" },
      { label: "Guards", description: "JwtAuthGuard acoplado a RolesGuard con Reflector API" },
      { label: "Tokens", description: "Firma criptográfica con algoritmo HS256 y expiración estricta" }
    ]
  },
  {
    id: "qr-totem",
    number: "03",
    title: "Tótem de Check-In Autónomo en Tiempo Real",
    badge: "QR Scanner & Instant Validation",
    icon: QrCode,
    summary: "Punto de acceso autónomo que decodifica credenciales QR dinámicas generadas desde la app de los socios o ingreso por DNI, validando la membresía activa en milisegundos y registrando entradas/salidas inmutables.",
    codeSnippet: `@Post('check-in')
async processAttendance(@Body() checkInDto: CheckInDto) {
  const activeMembership = await this.membershipsService.findActiveByUser(checkInDto.userId);
  if (!activeMembership) {
    throw new ForbiddenException('Membresía inactiva o vencida');
  }
  return this.attendanceService.recordEntry(checkInDto.userId);
}`,
    keyBenefits: [
      "Flujo de ingreso en menos de 200ms sin filas en la recepción del gimnasio.",
      "Prevención de accesos simultáneos mediante validación de sesión abierta.",
      "Cálculo automático de tiempo de permanencia (duración exacta en el establecimiento)."
    ],
    technicalDetails: [
      { label: "Frontend Tótem", description: "Lector QR con react-webcam y decodificador rápido" },
      { label: "Resiliencia", description: "Manejo de códigos QR expirados y reintentos automáticos" },
      { label: "Auditoría", description: "Log inmutable de timestamp de ingreso y egreso" }
    ]
  },
  {
    id: "db-integrity",
    number: "04",
    title: "Integridad de Datos e Índices Compuestos",
    badge: "MongoDB Atlas + Mongoose",
    icon: Database,
    summary: "Diseño de esquemas fuertemente tipados con Mongoose ODM, índices únicos para prevención de colisiones e índices compuestos para consultas analíticas de alta velocidad.",
    codeSnippet: `@Schema({ timestamps: true })
export class Attendance {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, index: true })
  user: Types.ObjectId;

  @Prop({ required: true, default: Date.now })
  checkInTime: Date;

  @Prop({ type: Date, default: null })
  checkOutTime: Date;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
AttendanceSchema.index({ user: 1, checkInTime: -1 });`,
    keyBenefits: [
      "Consultas de historial de socios en tiempo sub-milisegundo gracias a índices compuestos.",
      "Esquemas con validación de tipos en runtime y hooks pre-save para sanitización.",
      "Alta disponibilidad garantizada mediante réplicas administradas en MongoDB Atlas."
    ],
    technicalDetails: [
      { label: "Índices Clave", description: "{ user: 1, checkInTime: -1 } y { status: 1, endDate: 1 }" },
      { label: "Unicidad", description: "Index unique en campo email bajo estándar RFC 5322" },
      { label: "Relaciones", description: "Referencias cruzadas pobladas mediante Mongoose populate" }
    ]
  }
];

export function BackendHighlights() {
  const [openPillar, setOpenPillar] = useState<string>("cron-jobs");

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center sm:text-left mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff8e26]">
          <Zap className="w-4 h-4 text-[#ff7a00]" />
          <span>Core Engineering Highlights</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Los 4 Pilares de Ingeniería Backend
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-3xl">
          Detalles de implementación técnica que convierten a GoGym en una plataforma resiliente, segura y con alta capacidad de concurrencia.
        </p>
      </div>

      {/* Accordion / Cards List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {pillars.map((pillar) => {
          const isOpen = openPillar === pillar.id;

          return (
            <div
              key={pillar.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-gradient-to-r from-zinc-950 via-[#14151c] to-zinc-950 border-orange-500/50 shadow-2xl shadow-orange-950/25"
                  : "bg-zinc-950/70 border-zinc-800/90 hover:border-zinc-700"
              }`}
            >
              {/* Header / Click Trigger */}
              <button
                type="button"
                onClick={() => setOpenPillar(isOpen ? "" : pillar.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl font-mono font-bold text-sm shrink-0 transition-colors ${
                    isOpen 
                      ? "bg-[#ff7a00] text-black shadow-md shadow-orange-500/30" 
                      : "bg-zinc-900 border border-zinc-800 text-[#ff8e26]"
                  }`}>
                    {pillar.number}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {pillar.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-orange-500/10 text-[#ff8e26] border border-orange-500/30">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 truncate mt-0.5">
                      {pillar.summary}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[#ff7a00] border-orange-500/30" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-zinc-800/80 px-6 pb-6 pt-4 space-y-6"
                  >
                    {/* Detailed Summary */}
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {pillar.summary}
                    </p>

                    {/* Code Snippet with GoGym Dark Terminal Styling */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                        <span className="flex items-center gap-1.5 text-[#ff8e26] font-semibold">
                          <Code2 className="w-3.5 h-3.5" />
                          <span>Implementación NestJS / TypeScript</span>
                        </span>
                        <span className="text-zinc-500">Backend Controller / Service</span>
                      </div>
                      <pre className="p-4 rounded-xl bg-black border border-zinc-800 text-xs sm:text-sm font-mono text-zinc-200 overflow-x-auto leading-relaxed shadow-inner">
                        <code>{pillar.codeSnippet}</code>
                      </pre>
                    </div>

                    {/* Key Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {pillar.keyBenefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-2.5 text-xs text-zinc-200"
                        >
                          <Check className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technical Specs Tags */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-zinc-800/80 text-xs">
                      {pillar.technicalDetails.map((detail, dIdx) => (
                        <div key={dIdx} className="space-y-0.5">
                          <span className="font-bold text-zinc-400">{detail.label}:</span>
                          <p className="text-zinc-300 font-medium">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
