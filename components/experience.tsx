"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "OCI 2024 Generative AI Professional",
      organization: "Oracle University",
      year: "2024",
      description:
        "Oracle University Certified expertise in building, deploying, and optimizing generative AI models on OCI, leveraging cloud-native ML tools for scalable AI solutions.",
      logo: "/images/oci-badge.jpeg",
      logoAlt: "Oracle Cloud Infrastructure Certification Badge",
      skills: ["Generative AI", "Oracle Cloud", "ML Deployment", "Cloud Architecture"],
      status: "Certified",
    },
    {
      title: "Applied Machine Learning in Python",
      organization: "University of Michigan",
      year: "2024",
      description:
        "Focused on differentiating supervised (classification) and unsupervised (clustering) techniques to apply the right approach for various datasets.",
      logo: "/images/python-logo.png",
      logoAlt: "Python Programming Language Logo",
      skills: ["Python", "Machine Learning", "Data Science", "Scikit-learn"],
      status: "Completed",
    },
  ]

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-br from-professional-50/50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-trust-400/10 to-innovation-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-success-400/10 to-energy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
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
                Training & Certifications
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-professional-600 dark:text-professional-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Continuous learning through industry-recognized certifications and specialized training programs
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-trust-500 to-innovation-500 mx-auto rounded-full mt-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 border border-professional-200 dark:border-professional-700 hover:border-trust-300 dark:hover:border-trust-600 transition-all duration-500 shadow-lg hover:shadow-brand-lg overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-trust-50/50 via-innovation-50/30 to-success-50/50 dark:from-trust-900/10 dark:via-innovation-900/10 dark:to-success-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Status badge */}
                <motion.div
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 rounded-full text-xs font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                >
                  <CheckCircle className="w-3 h-3" />
                  {cert.status}
                </motion.div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      className="flex-shrink-0 p-3 bg-white dark:bg-gray-700 rounded-2xl shadow-lg border border-professional-100 dark:border-professional-600 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.logoAlt}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-professional-800 dark:text-professional-200 mb-3 group-hover:text-trust-600 dark:group-hover:text-trust-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-trust-600 dark:text-trust-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">
                          {cert.organization} • {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-professional-600 dark:text-professional-300 leading-relaxed mb-6 text-sm">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-professional-100 to-professional-50 dark:from-professional-700 dark:to-professional-600 text-professional-700 dark:text-professional-300 rounded-full text-xs font-medium border border-professional-200 dark:border-professional-600 hover:border-trust-300 dark:hover:border-trust-500 transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 1.0 + index * 0.2 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action button */}
                  <motion.button
                    className="flex items-center gap-2 text-trust-600 dark:text-trust-400 hover:text-trust-700 dark:hover:text-trust-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-trust-600 to-innovation-600 hover:from-trust-700 hover:to-innovation-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-brand hover:shadow-brand-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore More Certifications</span>
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
