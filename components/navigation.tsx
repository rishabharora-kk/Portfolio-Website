"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { useTheme } from "./theme-provider"
import ThemeToggleButton from "./optimized-button"

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const { toggleTheme } = useTheme()
  const mobileButtonRef = useRef<HTMLButtonElement>(null)

  // Optimized scroll handler with intersection observer
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
    NAV_ITEMS.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })

    // Handle scroll for floating nav visibility
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const handleMobileThemeToggle = useCallback(() => {
    if (mobileButtonRef.current) {
      const rect = mobileButtonRef.current.getBoundingClientRect()
      const buttonPosition = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }
      toggleTheme(buttonPosition)
    }
  }, [toggleTheme])

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-colors duration-300" />
        ) : (
          <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300 transition-colors duration-300" />
        )}
      </motion.button>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transition-all duration-500"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <ThemeToggleButton ref={mobileButtonRef} onClick={handleMobileThemeToggle} size="lg" variant="mobile" />

          <nav role="navigation" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className={`block text-2xl font-medium transition-all duration-300 py-2 ${
                  activeSection === item.href.substring(1)
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Desktop floating navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : 50,
          scale: isScrolled ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        style={{ pointerEvents: isScrolled ? "auto" : "none" }}
        role="navigation"
        aria-label="Floating navigation"
      >
        <motion.div
          className="flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full border border-emerald-200 dark:border-emerald-700 shadow-lg transition-all duration-500"
          animate={{
            boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                  : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Navigate to ${item.name} section`}
              aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.div>
      </motion.nav>
    </>
  )
}
