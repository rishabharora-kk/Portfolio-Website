"use client"

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react"

type Theme = "dark" | "light"

type ThemeProviderContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: (buttonPosition?: { x: number; y: number }) => void
  isAnimating: boolean
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

// Optimized selectors for better performance
const TEXT_SELECTORS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "a",
  "button",
  "label",
  "input",
  "textarea",
  "li",
  "td",
  "th",
] as const

const ANIMATION_CONFIG = {
  RIPPLE_DURATION: 1000,
  FADE_OUT_DURATION: 400,
  FADE_IN_DURATION: 300,
  THEME_CHANGE_DELAY: 400,
  GLOW_DELAY: 500,
  CLEANUP_DELAY: 1200,
  MAX_STAGGER_OUT: 150,
  MAX_STAGGER_IN: 100,
} as const

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")
  const [isAnimating, setIsAnimating] = useState(false)

  // Memoized theme initialization
  useEffect(() => {
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem("theme") as Theme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

      setTheme(initialTheme)
      document.documentElement.classList.toggle("dark", initialTheme === "dark")
    }

    initializeTheme()
  }, [])

  // Optimized element animation functions
  const animateElements = useCallback((elements: NodeListOf<Element>, fadeIn: boolean) => {
    const maxStagger = fadeIn ? ANIMATION_CONFIG.MAX_STAGGER_IN : ANIMATION_CONFIG.MAX_STAGGER_OUT
    const duration = fadeIn ? ANIMATION_CONFIG.FADE_IN_DURATION : ANIMATION_CONFIG.FADE_OUT_DURATION
    const targetOpacity = fadeIn ? "1" : "0.2"
    const baseDelay = fadeIn ? 200 : 0

    elements.forEach((el, index) => {
      if (el instanceof HTMLElement) {
        const delay = Math.min(index * (fadeIn ? 2 : 3), maxStagger)
        el.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, color 0.6s ease-out, background-color 0.6s ease-out`

        setTimeout(() => {
          el.style.opacity = targetOpacity
        }, delay + baseDelay)
      }
    })
  }, [])

  // Optimized ripple creation with better performance
  const createRippleElements = useCallback((buttonPosition: { x: number; y: number }, newTheme: Theme) => {
    const maxDistance = Math.sqrt(
      Math.pow(Math.max(buttonPosition.x, window.innerWidth - buttonPosition.x), 2) +
        Math.pow(Math.max(buttonPosition.y, window.innerHeight - buttonPosition.y), 2),
    )

    const rippleConfig = {
      colors:
        newTheme === "dark"
          ? {
              primary: "linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%)",
              secondary: "rgba(31, 41, 55, 0.3)",
              glow: "0 0 200px rgba(16, 185, 129, 0.1), 0 0 100px rgba(20, 184, 166, 0.05)",
            }
          : {
              primary: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
              secondary: "rgba(248, 250, 252, 0.3)",
              glow: "0 0 200px rgba(59, 130, 246, 0.1), 0 0 100px rgba(99, 102, 241, 0.05)",
            },
      size: maxDistance * 2.2,
    }

    // Create optimized ripple elements
    const createRipple = (isSecondary = false) => {
      const ripple = document.createElement("div")
      ripple.className = isSecondary ? "theme-ripple-secondary" : "theme-ripple-main"

      const size = isSecondary ? rippleConfig.size * 1.1 : rippleConfig.size
      const background = isSecondary ? rippleConfig.colors.secondary : rippleConfig.colors.primary
      const zIndex = isSecondary ? 9997 : 9998

      ripple.style.cssText = `
        position: fixed;
        top: ${buttonPosition.y}px;
        left: ${buttonPosition.x}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: ${background};
        transform: translate(-50%, -50%);
        z-index: ${zIndex};
        pointer-events: none;
        transition: all ${ANIMATION_CONFIG.RIPPLE_DURATION}ms cubic-bezier(0.23, 1, 0.32, 1);
        will-change: transform, width, height;
        ${!isSecondary ? `box-shadow: 0 0 100px rgba(0,0,0,0.1);` : ""}
      `

      document.body.appendChild(ripple)
      return { ripple, finalSize: `${size}px` }
    }

    return {
      primary: createRipple(false),
      secondary: createRipple(true),
      glow: rippleConfig.colors.glow,
    }
  }, [])

  // Main animation orchestrator
  const createAdvancedRippleAnimation = useCallback(
    (buttonPosition: { x: number; y: number }) => {
      const newTheme = theme === "light" ? "dark" : "light"
      const allTextElements = document.querySelectorAll(TEXT_SELECTORS.join(", "))

      // Create ripple elements
      const { primary, secondary, glow } = createRippleElements(buttonPosition, newTheme)

      // Phase 1: Start text fade-out
      animateElements(allTextElements, false)

      // Phase 2: Trigger ripple expansion
      requestAnimationFrame(() => {
        primary.ripple.style.width = primary.finalSize
        primary.ripple.style.height = primary.finalSize

        setTimeout(() => {
          secondary.ripple.style.width = secondary.finalSize
          secondary.ripple.style.height = secondary.finalSize
        }, 100)
      })

      // Phase 3: Change theme and start text fade-in
      setTimeout(() => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
        animateElements(allTextElements, true)
      }, ANIMATION_CONFIG.THEME_CHANGE_DELAY)

      // Phase 4: Add glow effect
      setTimeout(() => {
        primary.ripple.style.boxShadow = glow
      }, ANIMATION_CONFIG.GLOW_DELAY)

      // Phase 5: Cleanup
      setTimeout(() => {
        ;[primary.ripple, secondary.ripple].forEach((ripple) => {
          ripple.parentNode?.removeChild(ripple)
        })

        allTextElements.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.transition = ""
            el.style.opacity = ""
          }
        })

        setIsAnimating(false)
      }, ANIMATION_CONFIG.CLEANUP_DELAY)
    },
    [theme, createRippleElements, animateElements],
  )

  // Optimized toggle function with debouncing
  const toggleTheme = useCallback(
    (buttonPosition?: { x: number; y: number }) => {
      if (isAnimating) return

      setIsAnimating(true)

      if (buttonPosition) {
        createAdvancedRippleAnimation(buttonPosition)
      } else {
        // Fallback without animation
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
        setIsAnimating(false)
      }
    },
    [isAnimating, theme, createAdvancedRippleAnimation],
  )

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme, isAnimating }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
