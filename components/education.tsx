"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Bachelor of Engineering (Hons.) Computer Science and Engineering",
      specialization: "with Specialization in Artificial Intelligence and Machine Learning",
      partnership: "In association with IBM",
      institution: "Chandigarh University",
      location: "Mohali, Punjab (INDIA)",
      period: "July, 2022 - Present",
      description:
        "Pursuing a cutting-edge AI Engineering degree at Chandigarh University, focusing on integrating theoretical knowledge with real-world applications so effectively that even this description seems self-written.",
      current: true,
    },
    {
      degree: "Senior Secondary",
      institution: "Bal Niketan School",
      location: "Sector-37A, Chandigarh",
      period: "April, 2020 - February, 2021",
      description: "A joyful experience where each day was a new chapter in the book of fun-filled learning",
      current: false,
    },
    {
      degree: "Secondary Education",
      institution: "DC Model Sr. Sec. School",
      location: "Sector-7, Panchkula",
      period: "April, 2006 - February, 2019",
      description: "A memorable journey with the responsibilities of Discipline In-charge.",
      current: false,
    },
  ]

  return (
    <section id="education" className="py-20 px-6">
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
              Education
            </span>
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`relative ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 transition-all duration-300 relative">
                  {edu.current && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Current
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
                      {edu.specialization && <p className="text-emerald-600 font-medium mb-1">{edu.specialization}</p>}
                      {edu.partnership && <p className="text-teal-600 text-sm mb-3">{edu.partnership}</p>}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {edu.institution} / {edu.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
