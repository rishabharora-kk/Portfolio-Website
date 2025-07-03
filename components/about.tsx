"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Brain, Lightbulb, Target } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Brain,
      title: "Analytical Thinking",
      description: "Strong problem-solving mindset with precision and adaptability",
      gradient: "from-trust-500 to-innovation-500",
    },
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Cutting-edge AI and web development expertise",
      gradient: "from-innovation-500 to-success-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Pushing boundaries of technology and personal growth",
      gradient: "from-success-500 to-energy-500",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Creating solutions that bridge technology with real-world needs",
      gradient: "from-energy-500 to-trust-500",
    },
  ]

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-white via-trust-50/30 to-innovation-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-trust-400/10 to-innovation-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-success-400/10 to-energy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-trust-600 via-innovation-600 to-success-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-trust-500 to-innovation-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <motion.p
                  className="text-xl text-professional-700 dark:text-professional-300 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <span className="text-2xl font-semibold text-trust-600 dark:text-trust-400">
                    Strong analytical thinker
                  </span>{" "}
                  with a flair for impactful, concise solutions. I thrive in high-pressure environments, balancing
                  precision with adaptability while maintaining a relentless commitment to learning.
                </motion.p>

                <motion.p
                  className="text-xl text-professional-700 dark:text-professional-300 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="italic text-innovation-600 dark:text-innovation-400">
                    "Being an Engineer isn't just about earning a degree, it's about understanding."
                  </span>{" "}
                  Yet satisfaction remains elusive in our pursuit for perfect balance between innovation and execution.
                </motion.p>
              </div>

              <motion.div
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-professional-200 dark:border-professional-700 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-professional-800 dark:text-professional-200 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-success-500 to-energy-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🌍</span>
                  </div>
                  Languages
                </h3>
                <div className="space-y-4">
                  {[
                    { lang: "English", level: "Experienced", proficiency: 95 },
                    { lang: "Hindi", level: "Experienced", proficiency: 90 },
                    { lang: "Punjabi", level: "Skillful", proficiency: 80 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-professional-700 dark:text-professional-300">
                          {item.lang}
                        </span>
                        <span className="text-trust-600 dark:text-trust-400 font-semibold">{item.level}</span>
                      </div>
                      <div className="w-full bg-professional-200 dark:bg-professional-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-trust-500 to-innovation-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-professional-200 dark:border-professional-700 shadow-brand">
                <h3 className="text-2xl font-bold text-professional-800 dark:text-professional-200 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-trust-500 to-innovation-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🏆</span>
                  </div>
                  Key Achievement
                </h3>
                <motion.div
                  className="relative p-6 bg-gradient-to-br from-trust-50 to-innovation-50 dark:from-trust-900/20 dark:to-innovation-900/20 rounded-2xl border-l-4 border-trust-500 dark:border-trust-400"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-bold text-lg text-professional-800 dark:text-professional-200 mb-3">
                    Team Leadership & Innovation
                  </h4>
                  <p className="text-professional-600 dark:text-professional-400 leading-relaxed">
                    Successfully led a team of four through two comprehensive mini-projects, fostering collaborative
                    innovation while driving technical excellence and team growth.
                  </p>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-trust-500/20 to-innovation-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-trust-600 dark:text-trust-400" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Core Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-center text-professional-800 dark:text-professional-200 mb-12">
              Core Strengths
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-professional-200 dark:border-professional-700 hover:border-trust-300 dark:hover:border-trust-600 transition-all duration-300 shadow-lg hover:shadow-brand"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${highlight.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-professional-800 dark:text-professional-200 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-professional-600 dark:text-professional-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
