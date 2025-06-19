"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Rishabh
            </span>
            <br />
            <span className="text-gray-800">Arora</span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">AI Engineer & Full-Stack Developer</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Strong analytical thinker with a flair for impactful, concise solutions. Thrives in high-pressure
            environments, balancing precision with adaptability.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Phone, text: "8289084784", href: "tel:8289084784" },
              { icon: Mail, text: "r.arora.tech@gmail.com", href: "mailto:r.arora.tech@gmail.com" },
              { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/rishab-harora-kk" },
              { icon: Github, text: "GitHub", href: "https://github.com/rishabharora-kk" },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:border-emerald-300 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <contact.icon className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-gray-700">{contact.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <span>Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
