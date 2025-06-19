"use client"

import { motion } from "framer-motion"
import { forwardRef, type ButtonHTMLAttributes } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

interface ThemeToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
  variant?: "header" | "mobile"
}

const ThemeToggleButton = forwardRef<HTMLButtonElement, ThemeToggleButtonProps>(
  ({ size = "md", variant = "header", className = "", ...props }, ref) => {
    const { theme, isAnimating } = useTheme()

    const sizeClasses = {
      sm: "p-2",
      md: "p-3",
      lg: "p-4",
    }

    const iconSizes = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-7 h-7",
    }

    const variantClasses = {
      header: "shadow-lg shadow-gray-900/10",
      mobile: "shadow-xl shadow-gray-900/20",
    }

    return (
      <motion.button
        ref={ref}
        disabled={isAnimating}
        className={`
          relative ${sizeClasses[size]} rounded-full bg-gradient-to-r transition-all duration-300 overflow-hidden group
          ${
            theme === "dark"
              ? "from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 shadow-gray-900/20"
              : "from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100"
          }
          ${variantClasses[variant]}
          ${isAnimating ? "cursor-not-allowed opacity-75" : "cursor-pointer"}
          ${className}
        `}
        whileHover={!isAnimating ? { scale: 1.1, y: -2 } : {}}
        whileTap={!isAnimating ? { scale: 0.95 } : {}}
        aria-label="Toggle dark mode"
        {...props}
      >
        {/* Animated background glow */}
        <motion.div
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
              : "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
          }`}
          animate={isAnimating ? { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] } : {}}
          transition={{ duration: 0.6, repeat: isAnimating ? Number.POSITIVE_INFINITY : 0 }}
        />

        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10"
        >
          {theme === "dark" ? (
            <Sun className={`${iconSizes[size]} text-yellow-400 drop-shadow-sm`} />
          ) : (
            <Moon className={`${iconSizes[size]} text-slate-600 drop-shadow-sm`} />
          )}
        </motion.div>

        {/* Ripple indicator */}
        {isAnimating && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-emerald-400"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        )}
      </motion.button>
    )
  },
)

ThemeToggleButton.displayName = "ThemeToggleButton"

export default ThemeToggleButton
