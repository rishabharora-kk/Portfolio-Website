"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [hasLanded, setHasLanded] = useState(false)

  useEffect(() => {
    const dropTimer = setTimeout(() => {
      const landTimer = setTimeout(() => setHasLanded(true), 1200)
      return () => clearTimeout(landTimer)
    }, 500)

    return () => clearTimeout(dropTimer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 pt-32">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-trust-400/20 to-innovation-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-success-400/20 to-energy-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-trust-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-trust-500 via-innovation-500 to-success-500 text-white rounded-full text-sm font-medium shadow-brand backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 4px 14px 0 rgba(59, 130, 246, 0.15)",
                    "0 8px 25px 0 rgba(59, 130, 246, 0.25)",
                    "0 4px 14px 0 rgba(59, 130, 246, 0.15)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4" />
                Welcome to my digital portfolio
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
            >
              <motion.span
                className="text-professional-900 dark:text-white block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hi, I'm{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-trust-600 via-innovation-600 to-success-600 bg-clip-text text-transparent block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Rishabh
              </motion.span>
              <motion.span
                className="text-professional-700 dark:text-professional-300 text-3xl md:text-5xl lg:text-6xl font-semibold block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                AI Engineer & Developer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl md:text-2xl text-professional-600 dark:text-professional-400 leading-relaxed max-w-2xl font-light"
            >
              Crafting intelligent solutions that bridge cutting-edge AI technology with real-world impact.
              <span className="text-trust-600 dark:text-trust-400 font-medium">
                {" "}
                Specializing in machine learning, web development, and innovative problem-solving.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-trust-600 to-innovation-600 hover:from-trust-700 hover:to-innovation-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-brand hover:shadow-brand-lg relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Get In Touch</span>
              </motion.a>

              <motion.a
                href="https://drive.google.com/drive/folders/1eWB5y1RQnb46kcBbi2pPZ4NNyUo7EdbI?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-trust-600 text-trust-600 dark:text-trust-400 hover:bg-trust-50 dark:hover:bg-trust-900/20 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-trust-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/rishabharora-kk",
                  label: "GitHub",
                  color: "hover:text-professional-600 hover:bg-professional-50 dark:hover:bg-professional-900/20",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rishabharora-kk",
                  label: "LinkedIn",
                  color: "hover:text-trust-600 hover:bg-trust-50 dark:hover:bg-trust-900/20",
                },
                {
                  icon: Mail,
                  href: "mailto:r.arora.tech@gmail.com",
                  label: "Email",
                  color: "hover:text-success-600 hover:bg-success-50 dark:hover:bg-success-900/20",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-professional-200 dark:border-professional-700 rounded-2xl text-professional-600 dark:text-professional-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right side - Professional Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Enhanced background effects */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-trust-200/20 via-innovation-200/20 to-success-200/20 dark:from-trust-800/20 dark:via-innovation-800/20 dark:to-success-800/20 blur-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  hasLanded
                    ? {
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />

              {/* Professional logo container */}
              <motion.div
                className="relative w-full h-full rounded-3xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-8 flex items-center justify-center shadow-2xl border border-professional-100 dark:border-professional-800 group cursor-pointer overflow-hidden"
                initial={{ y: -800 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.5,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                  borderColor: "rgba(59, 130, 246, 0.4)",
                }}
              >
                {/* Logo with enhanced effects */}
                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  animate={
                    hasLanded
                      ? {
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
                    width={320}
                    height={320}
                    className="object-contain w-full h-full filter group-hover:brightness-110 transition-all duration-500"
                    priority
                  />
                </motion.div>

                {/* Enhanced highlight overlay */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  }}
                />

                {/* Professional accent elements */}
                <motion.div
                  className="absolute bottom-6 right-6 w-3 h-3 bg-gradient-to-br from-trust-400 to-innovation-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    hasLanded
                      ? {
                          opacity: [0.4, 0.8, 0.4],
                          scale: [0.8, 1.2, 0.8],
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

              {/* Enhanced professional badges */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-trust-500 to-innovation-500 rounded-2xl flex items-center justify-center text-white text-sm font-bold shadow-brand"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hasLanded
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -2, 0],
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  opacity: { duration: 0.6, ease: "backOut", delay: 0.3 },
                  scale: { duration: 0.6, ease: "backOut", delay: 0.3 },
                  y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 25px -8px rgba(59, 130, 246, 0.4)",
                }}
              >
                AI
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-success-500 to-energy-500 rounded-2xl flex items-center justify-center text-white text-sm font-bold shadow-brand"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  hasLanded
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, 2, 0],
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  opacity: { duration: 0.6, ease: "backOut", delay: 0.6 },
                  scale: { duration: 0.6, ease: "backOut", delay: 0.6 },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 },
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

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-3 text-professional-600 dark:text-professional-400 hover:text-trust-600 dark:hover:text-trust-400 transition-colors duration-300 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200">
              Explore More
            </span>
            <motion.div
              className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-professional-200 dark:border-professional-700 shadow-lg group-hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
