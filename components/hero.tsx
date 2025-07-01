"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [hasLanded, setHasLanded] = useState(false)

  useEffect(() => {
    // Start drop animation after 500ms
    const dropTimer = setTimeout(() => {
      // Logo lands after 1.2s drop duration
      const landTimer = setTimeout(() => setHasLanded(true), 1200)
      return () => clearTimeout(landTimer)
    }, 500)

    return () => clearTimeout(dropTimer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-trust-50 to-innovation-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-trust-400/10 to-innovation-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-success-400/10 to-energy-400/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-trust-500 to-innovation-500 text-white rounded-full text-sm font-medium mb-4 shadow-brand">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-professional-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-trust-600 via-innovation-600 to-success-600 bg-clip-text text-transparent">
                Rishabh
              </span>
              <br />
              <span className="text-professional-700 dark:text-professional-300 text-3xl md:text-5xl lg:text-6xl">
                AI Engineer & Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-professional-600 dark:text-professional-400 mb-8 leading-relaxed max-w-2xl"
            >
              Passionate about creating intelligent solutions that bridge the gap between cutting-edge AI technology and
              real-world applications. Specializing in machine learning, web development, and innovative
              problem-solving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-trust-600 to-innovation-600 hover:from-trust-700 hover:to-innovation-700 text-white rounded-full font-medium transition-all duration-300 shadow-brand hover:shadow-brand-lg"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>

              <motion.a
                href="https://drive.google.com/drive/folders/1eWB5y1RQnb46kcBbi2pPZ4NNyUo7EdbI?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-trust-600 text-trust-600 dark:text-trust-400 hover:bg-trust-50 dark:hover:bg-trust-900/20 rounded-full font-medium transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/rishabharora-kk",
                  label: "GitHub",
                  color: "hover:text-professional-600",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rishabharora-kk",
                  label: "LinkedIn",
                  color: "hover:text-trust-600",
                },
                { icon: Mail, href: "mailto:r.arora.tech@gmail.com", label: "Email", color: "hover:text-success-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white dark:bg-gray-800 border border-professional-200 dark:border-professional-700 rounded-full text-professional-600 dark:text-professional-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Minimal Professional Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Subtle background glow - only appears after landing */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-trust-200/10 via-innovation-200/10 to-success-200/10 dark:from-trust-800/10 dark:via-innovation-800/10 dark:to-success-800/10 blur-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  hasLanded
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              {/* Main logo container with professional drop */}
              <motion.div
                className="relative w-full h-full rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-8 flex items-center justify-center shadow-2xl border border-professional-100 dark:border-professional-800 group cursor-pointer overflow-hidden"
                initial={{ y: -800 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94], // Professional easing curve
                  delay: 0.5,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                  borderColor: "rgba(59, 130, 246, 0.3)",
                }}
              >
                {/* Logo with subtle post-landing effects */}
                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  animate={
                    hasLanded
                      ? {
                          // Very subtle breathing effect
                          scale: [1, 1.02, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/tech-logo.png"
                    alt="Tech Logo"
                    width={280}
                    height={280}
                    className="object-contain w-full h-full filter group-hover:brightness-105 transition-all duration-500"
                    priority
                  />
                </motion.div>

                {/* Minimal highlight overlay on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
                  }}
                />

                {/* Single subtle accent dot */}
                <motion.div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br from-trust-400 to-innovation-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    hasLanded
                      ? {
                          opacity: [0.4, 0.8, 0.4],
                          scale: [0.8, 1, 0.8],
                        }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>

              {/* Minimal professional badges - appear after landing */}
              <motion.div
                className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-trust-500 to-innovation-500 rounded-xl flex items-center justify-center text-white text-xs font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hasLanded
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 0.6,
                  ease: "backOut",
                  delay: 0.3,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 25px -8px rgba(59, 130, 246, 0.4)",
                }}
              >
                AI
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-br from-success-500 to-energy-500 rounded-xl flex items-center justify-center text-white text-xs font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hasLanded
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 0.6,
                  ease: "backOut",
                  delay: 0.6,
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 8px 25px -8px rgba(34, 197, 94, 0.4)",
                }}
              >
                ML
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-professional-600 dark:text-professional-400 hover:text-trust-600 dark:hover:text-trust-400 transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
