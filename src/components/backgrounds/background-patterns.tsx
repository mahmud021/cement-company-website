"use client"

interface BackgroundPatternProps {
  variant?: "grid" | "hexagon" | "blueprint" | "concrete" | "radial"
  intensity?: "subtle" | "medium" | "strong"
  className?: string
}

export const BackgroundPattern = ({
  variant = "grid",
  intensity = "subtle",
  className = "",
}: BackgroundPatternProps) => {
  const getOpacity = () => {
    switch (intensity) {
      case "subtle":
        return "opacity-[0.03]"
      case "medium":
        return "opacity-[0.06]"
      case "strong":
        return "opacity-[0.1]"
      default:
        return "opacity-[0.03]"
    }
  }

  const patterns = {
    grid: (
      <div
        className={`absolute inset-0 ${getOpacity()} ${className}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
    ),
    hexagon: (
      <div
        className={`absolute inset-0 ${getOpacity()} ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    ),
    blueprint: (
      <div
        className={`absolute inset-0 ${getOpacity()} ${className}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px),
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
        }}
      />
    ),
    concrete: (
      <div
        className={`absolute inset-0 ${getOpacity()} ${className}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fillOpacity='1'%3E%3Cpolygon fill='%23000' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
    ),
    radial: (
      <div
        className={`absolute inset-0 ${className}`}
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(59,130,246,0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(16,185,129,0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(249,115,22,0.03) 0%, transparent 50%)
          `,
        }}
      />
    ),
  }

  return patterns[variant]
}
