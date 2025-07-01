"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar } from "lucide-react"
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
    },
    {
      title: "Applied Machine Learning in Python",
      organization: "University of Michigan",
      year: "2024",
      description:
        "Focused on differentiating supervised (classification) and unsupervised (clustering) techniques to apply the right approach for various datasets.",
      logo: "/images/python-logo.png",
      logoAlt: "Python Programming Language Logo",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-white/50">
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
              Training & Certifications
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-md border border-gray-100">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.logoAlt}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-emerald-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {cert.organization} • {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
