import React from "react";
import { 
  Server, 
  Database, 
  Layout, 
  Wrench, 
  Code2, 
  ShieldCheck, 
  Cloud, 
  GitBranch 
} from "lucide-react";

export function getTechIcon(name: string, className = "w-5 h-5") {
  const normalized = name.toLowerCase();

  if (normalized.includes("spring")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#6db33f" />
      </svg>
    );
  }
  if (normalized.includes("nest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#e0234e">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.42 3.12 7.24L12 22l6.88-2.76C20.8 17.42 22 14.85 22 12c0-5.52-4.48-10-10-10zm0 3.5l5 7h-3v4.5h-4V12.5H7l5-7z"/>
      </svg>
    );
  }
  if (normalized.includes("java")) {
    return <Code2 className={`${className} text-orange-400`} />;
  }
  if (normalized.includes("node")) {
    return <Server className={`${className} text-emerald-400`} />;
  }
  if (normalized.includes("mongo")) {
    return <Database className={`${className} text-emerald-500`} />;
  }
  if (normalized.includes("postgres")) {
    return <Database className={`${className} text-sky-400`} />;
  }
  if (normalized.includes("mysql")) {
    return <Database className={`${className} text-blue-400`} />;
  }
  if (normalized.includes("oracle")) {
    return <Cloud className={`${className} text-red-400`} />;
  }
  if (normalized.includes("react")) {
    return <Layout className={`${className} text-cyan-400`} />;
  }
  if (normalized.includes("next")) {
    return <Layout className={`${className} text-white`} />;
  }
  if (normalized.includes("jwt") || normalized.includes("bcrypt") || normalized.includes("shield")) {
    return <ShieldCheck className={`${className} text-emerald-400`} />;
  }
  if (normalized.includes("git")) {
    return <GitBranch className={`${className} text-orange-500`} />;
  }
  if (normalized.includes("render")) {
    return <Cloud className={`${className} text-indigo-400`} />;
  }
  return <Wrench className={`${className} text-slate-400`} />;
}
