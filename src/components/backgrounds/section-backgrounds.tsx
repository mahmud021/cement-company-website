"use client"
import { BackgroundPattern } from "./background-patterns"
import type React from "react"

interface SectionBackgroundProps {
  variant?: "hero" | "features" | "services" | "testimonials" | "contact" | "footer"
  children: React.ReactNode
  className?: string
}

export const SectionBackground = ({ variant = "hero", children, className = "" }: SectionBackgroundProps) => {
  const backgroundConfigs = {
    hero: {
      base: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
      pattern: "blueprint",
      intensity: "subtle" as const,
    },
    features: {
      base: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
      pattern: "radial",
      intensity: "subtle" as const,
    },
    services: {
      base: "bg-white",
      pattern: "grid",
      intensity: "subtle" as const,
    },
    testimonials: {
      base: "bg-gradient-to-r from-blue-50/50 to-green-50/50",
      pattern: "hexagon",
      intensity: "subtle" as const,
    },
    contact: {
      base: "bg-gradient-to-br from-gray-900 to-gray-800",
      pattern: "concrete",
      intensity: "medium" as const,
    },
    footer: {
      base: "bg-gray-900",
      pattern: "grid",
      intensity: "subtle" as const,
    },
  }

  const config = backgroundConfigs[variant]

  return (
    <div className={`relative ${config.base} ${className}`}>
      <BackgroundPattern variant={config.pattern as any} intensity={config.intensity} />
      {children}
    </div>
  )
}
