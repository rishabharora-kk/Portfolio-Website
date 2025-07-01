"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Database, Globe, Cpu, Zap } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["Python", "TensorFlow", "PyTorch", "YOLO", "Computer Vision", "NLP"],
      gradient: "from-innovation-500 to-innovation-600",
      bgGradient: "from-innovation-50 to-innovation-100 dark:from-innovation-900/20 dark:to-innovation-800/20",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "Node.js", "HTML/CSS", "JavaScript"],
      gradient: "from-trust-500 to-trust-600",
      bgGradient: "from-trust-50 to-trust-100 dark:from-trust-900/20 dark:to-trust-800/20",
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
      gradient: "from-success-500 to-success-600",
      bgGradient: "from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20",
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["Oracle Cloud", "MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker"],
      gradient: "from-energy-500 to-energy-600",
      bgGradient: "from-energy-50 to-energy-100 dark:from-energy-900/20 dark:to-energy-800/20",
    },
    {
      title: "Tools & Frameworks",
      icon: Zap,
      skills: ["Git", "VS Code", "Jupyter", "Roboflow", "REST APIs", "GraphQL"],
      gradient: "from-professional-500 to-professional-600",
      bgGradient: "from-professional-50 to-professional-100 dark:from-professional-800/20 dark:to-professional-700/20",
    },
    {
      title: "Hardware & Systems",
      icon: Cpu,
      skills: ["Mobile Optimization", "PC Systems", "IoT", "Embedded Systems", "Linux", "Windows"],
      gradient: "from-trust-600 to-innovation-600",
      bgGradient: "from-trust-50 to-innovation-50 dark:from-trust-900/20 dark:to-innovation-900/20",
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-professional-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
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
            <span className="bg-gradient-to-r from-trust-600 via-innovation-600 to-success-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-professional-200 dark:border-professional-700 hover:border-trust-300 dark:hover:border-trust-600 transition-all duration-300 shadow-lg hover:shadow-brand"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-lg shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-professional-800 dark:text-professional-200">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                      className={`px-3 py-1 bg-gradient-to-r ${category.bgGradient} text-professional-700 dark:text-professional-300 rounded-full text-sm font-medium border border-professional-200 dark:border-professional-600 hover:border-trust-300 dark:hover:border-trust-500 transition-colors`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
