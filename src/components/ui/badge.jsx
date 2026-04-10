import React from "react";

/**
 * Reusable Badge component
 *
 * Props:
 * - children   — badge label text
 * - icon       — optional Lucide icon element shown before text
 * - variant    — "success" (default) | "warning" | "error" | "info" | "neutral"
 * - className  — extra Tailwind classes to override / extend
 */

const variantStyles = {
  success: "text-green-400 bg-green-400/10 border-green-400/20",
  warning: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  error:   "text-red-400   bg-red-400/10   border-red-400/20",
  info:    "text-blue-400  bg-blue-400/10  border-blue-400/20",
  neutral: "text-gray-400  bg-white/5      border-white/10",
};

const Badge = ({ children, icon, variant = "success", className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border rounded-full ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
