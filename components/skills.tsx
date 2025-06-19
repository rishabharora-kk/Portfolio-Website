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
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["React", "Next.js", "TypeScript", "Node.js", "HTML/CSS", "JavaScript"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["Oracle Cloud", "MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools & Frameworks",
      icon: Zap,
      skills: ["Git", "VS Code", "Jupyter", "Roboflow", "REST APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Hardware & Systems",
      icon: Cpu,
      skills: ["Mobile Optimization", "PC Systems", "IoT", "Embedded Systems", "Linux", "Windows"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white/50">
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
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
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
