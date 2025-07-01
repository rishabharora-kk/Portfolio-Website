"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Calendar } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "FinanceAI",
      description:
        "AI-powered spend-tracking solution for daily use with intelligent categorization and financial insights.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "AI/ML"],
      category: "AI/ML",
      gradient: "from-trust-500 to-innovation-500",
      github: "https://github.com/rishabharora-kk/FinanceAI",
      period: "Jan. 2024 — Jun. 2024",
    },
    {
      title: "AI-Document-Management",
      description: "AI-driven document management system using NLP for intelligent organization and retrieval.",
      technologies: ["Python", "NLP", "Document Processing", "AI"],
      category: "AI/ML",
      gradient: "from-success-500 to-trust-500",
      github: "https://github.com/rishabharora-kk/AI-Document-Management",
      period: "Jul. 2023 — Dec. 2023",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio site with interactive project showcase and modern responsive design.",
      technologies: ["JavaScript", "HTML/CSS", "React", "Web Design"],
      category: "Web Development",
      gradient: "from-innovation-500 to-energy-500",
      github: "https://github.com/rishabharora-kk/Portfolio-Website",
      period: "Mar. 2023 — Aug. 2023",
    },
    {
      title: "AI-Collaboration",
      description: "Note-making system with AI features and authentication for collaborative document creation.",
      technologies: ["Python", "LLM", "Authentication", "Collaboration"],
      category: "AI/ML",
      gradient: "from-energy-500 to-success-500",
      github: "https://github.com/rishabharora-kk/AI-Collaboration",
      period: "Jan. 2023 — Jun. 2023",
    },
    {
      title: "Modified Auto GPT",
      description: "LLM agent collaborating with another LLM for automated markdown generation and content creation.",
      technologies: ["Python", "LLM", "GPT", "Automation"],
      category: "AI/ML",
      gradient: "from-trust-600 to-professional-600",
      github: "https://github.com/rishabharora-kk/Modified-Auto-GPT",
      period: "Nov. 2022 — Apr. 2023",
    },
    {
      title: "Object Detection with YOLO",
      description: "Object detection system using YOLOv4 and Roboflow for real-time computer vision applications.",
      technologies: ["Python", "YOLOv4", "Computer Vision", "Roboflow"],
      category: "AI/ML",
      gradient: "from-success-600 to-innovation-600",
      github: "https://github.com/rishabharora-kk/Object-Detection-YOLO",
      period: "Mar. 2022 — Mar. 2023",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-white via-trust-50 to-innovation-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
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
              Featured Projects
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-professional-200 dark:border-professional-700 hover:border-trust-300 dark:hover:border-trust-600 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-brand-lg"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span
                        className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-medium mb-3 shadow-lg`}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-professional-800 dark:text-professional-200 mb-2 group-hover:text-trust-600 dark:group-hover:text-trust-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-professional-500 dark:text-professional-400 mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-professional-100 dark:bg-professional-700 hover:bg-trust-100 dark:hover:bg-trust-900/30 rounded-lg transition-colors duration-200 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4 text-professional-600 dark:text-professional-400 hover:text-trust-600 dark:hover:text-trust-400" />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-professional-600 dark:text-professional-300 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + techIndex * 0.03 }}
                        className="px-3 py-1 bg-gradient-to-r from-professional-50 to-professional-100 dark:from-professional-700 dark:to-professional-600 text-professional-700 dark:text-professional-300 rounded-full text-xs font-medium border border-professional-200 dark:border-professional-600 hover:border-trust-300 dark:hover:border-trust-500 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/rishabharora-kk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-trust-600 to-innovation-600 hover:from-trust-700 hover:to-innovation-700 text-white rounded-full font-medium transition-all duration-300 shadow-brand hover:shadow-brand-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
