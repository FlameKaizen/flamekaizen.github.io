"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CosmicButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function CosmicButton({ children, onClick, variant = "primary", size = "md", className }: CosmicButtonProps) {
  const baseClasses = "relative overflow-hidden group transition-all duration-300"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white cosmic-glow",
    secondary:
      "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white cosmic-glow",
    outline: "galaxy-border text-accent hover:bg-accent/10 hover:text-accent bg-transparent",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button onClick={onClick} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
        <span className="relative z-10">{children}</span>
        {variant !== "outline" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        )}
      </Button>
    </motion.div>
  )
}
