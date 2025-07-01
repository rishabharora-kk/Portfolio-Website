"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8289084784",
      href: "tel:8289084784",
      gradient: "from-success-500 to-trust-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "r.arora.tech@gmail.com",
      href: "mailto:r.arora.tech@gmail.com",
      gradient: "from-trust-500 to-innovation-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rishabharora-kk",
      href: "https://www.linkedin.com/in/rishabharora-kk",
      gradient: "from-trust-600 to-trust-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "rishabharora-kk",
      href: "https://github.com/rishabharora-kk",
      gradient: "from-professional-700 to-professional-900",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setStatusMessage("")

    try {
      // Create FormData object as Formspree expects
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)

      const response = await fetch("https://formspree.io/f/mgvyagbr", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage("Thank you! Your message has been sent successfully.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        const data = await response.json()
        if (data.errors) {
          setStatusMessage(data.errors.map((error: any) => error.message).join(", "))
        } else {
          setStatusMessage("Oops! There was a problem submitting your form")
        }
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setStatusMessage("Sorry, there was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-trust-50 via-innovation-50 to-success-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
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
              Let's Connect
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-professional-800 dark:text-professional-200 mb-4">
                  Get in Touch
                </h3>
                <p className="text-professional-600 dark:text-professional-400 leading-relaxed">
                  I'm always open to discussing new opportunities, innovative projects, or just having a conversation
                  about technology and AI. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-professional-200 dark:border-professional-700 hover:border-trust-300 dark:hover:border-trust-600 transition-all duration-300 group shadow-lg hover:shadow-brand"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${contact.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-professional-500 dark:text-professional-400 font-medium">
                        {contact.label}
                      </p>
                      <p className="text-professional-800 dark:text-professional-200 font-medium">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-professional-200 dark:border-professional-700 shadow-brand"
            >
              <h3 className="text-xl font-semibold text-professional-800 dark:text-professional-200 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-professional-700 dark:text-professional-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-professional-300 dark:border-professional-600 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 dark:focus:ring-trust-400 dark:focus:border-trust-400 transition-colors duration-200 bg-white dark:bg-gray-700 text-professional-900 dark:text-professional-100"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-professional-700 dark:text-professional-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-professional-300 dark:border-professional-600 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 dark:focus:ring-trust-400 dark:focus:border-trust-400 transition-colors duration-200 bg-white dark:bg-gray-700 text-professional-900 dark:text-professional-100"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <label className="block text-sm font-medium text-professional-700 dark:text-professional-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-professional-300 dark:border-professional-600 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 dark:focus:ring-trust-400 dark:focus:border-trust-400 transition-colors duration-200 resize-none bg-white dark:bg-gray-700 text-professional-900 dark:text-professional-100 placeholder:text-professional-500 dark:placeholder:text-professional-400"
                    placeholder="Your message here..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-trust-500 text-white rounded-lg hover:bg-trust-600 transition-colors duration-200"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>

                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className={`text-center text-sm ${submitStatus === "success" ? "text-success-500" : "text-error-500"}`}
                  >
                    {statusMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
