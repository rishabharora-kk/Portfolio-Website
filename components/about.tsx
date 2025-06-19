"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Strong analytical thinker with a flair for impactful, concise solutions. Thrives in high-pressure
                environments, balancing precision with adaptability. A relentless learner committed to pushing the
                boundaries of technology and personal growth.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Being an Engineer isn't just about earning a degree, it's about understanding. Yet satisfaction remains
                elusive, in our pursuit for a perfect balance.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Languages</h3>
                <div className="space-y-3">
                  {[
                    { lang: "English", level: "Experienced" },
                    { lang: "Hindi", level: "Experienced" },
                    { lang: "Punjabi", level: "Skillful" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <span className="text-gray-700 dark:text-gray-300">{item.lang}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">{item.level}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Achievements</h3>
              <div className="space-y-4">
                <motion.div
                  className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border-l-4 border-emerald-500 dark:border-emerald-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Mini-Project with Team</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Completed two Mini-Projects while leading a team of four. Collaborating on ideas all while evolving
                    along with the team.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
