"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { useTheme } from "./theme-provider"
import ThemeToggleButton from "./optimized-button"

const NAV_ITEMS = ["About", "Experience", "Education", "Skills", "Projects", "Contact"] as const

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { toggleTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true)
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    let ticking = false

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  const handleThemeToggle = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const buttonPosition = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }
      toggleTheme(buttonPosition)
    }
  }, [toggleTheme])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-500 ease-out"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Image
              src="/images/tech-logo.png"
              alt="Tech Logo"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300"
              priority
            />
          </motion.div>

          <div className="flex items-center gap-6">
            <ThemeToggleButton ref={buttonRef} onClick={handleThemeToggle} size="md" variant="header" />

            {/* Optimized Navigation */}
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
