"use client"

interface MaterialTextureProps {
  type?: "concrete" | "steel" | "blueprint" | "paper"
  intensity?: "light" | "medium" | "strong"
  className?: string
}

export const MaterialTexture = ({ type = "concrete", intensity = "light", className = "" }: MaterialTextureProps) => {
  const getOpacity = () => {
    switch (intensity) {
      case "light":
        return "opacity-[0.02]"
      case "medium":
        return "opacity-[0.05]"
      case "strong":
        return "opacity-[0.08]"
      default:
        return "opacity-[0.02]"
    }
  }

  const textures = {
    concrete: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,

    steel: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='steel' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Crect width='10' height='10' fill='%23f0f0f0'/%3E%3Crect width='5' height='10' fill='%23e0e0e0'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23steel)'/%3E%3C/svg%3E")`,

    blueprint: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='blueprint' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Crect width='20' height='20' fill='%23f8fafc'/%3E%3Cpath d='M0 20L20 0M-5 5L5 -5M15 25L25 15' stroke='%233b82f6' strokeWidth='0.5' opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23blueprint)'/%3E%3C/svg%3E")`,

    paper: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='paper'%3E%3CfeTurbulence baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.4'/%3E%3C/svg%3E")`,
  }

  return (
    <div
      className={`absolute inset-0 ${getOpacity()} ${className}`}
      style={{
        backgroundImage: textures[type],
        backgroundSize: type === "concrete" ? "200px 200px" : "100px 100px",
      }}
    />
  )
}
