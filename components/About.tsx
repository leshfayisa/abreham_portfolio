'use client'

import { motion } from 'framer-motion'

const About = () => {
  const highlights = [
    {
      title: "Systematic Approach",
      description: "Electrical and Computer Engineering background brings analytical thinking to software development",
      icon: "⚡"
    },
    {
      title: "Startup Experience",
      description: "Proven track record in fast-paced environments, moving from concept to MVP efficiently",
      icon: "🚀"
    },
    {
      title: "Quality Focus",
      description: "Builds scalable, maintainable applications without compromising on code quality or architecture",
      icon: "🏗️"
    },
    {
      title: "Leadership",
      description: "Successfully led development teams to deliver large-scale projects",
      icon: "👥"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I am a dedicated and versatile Full-Stack Engineer with a robust background in Electrical and Computer Engineering, 
            bringing a systematic and analytical approach to software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              My Philosophy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              My core philosophy is to build applications that are not only functional but also scalable, 
              maintainable, and deliver an exceptional user experience. With over two years of professional 
              experience, I have honed my skills in designing, developing, and deploying end-to-end digital 
              solutions that are both technically sound and market-ready.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I have a proven track record in startup environments, moving quickly from concept to MVP without 
              compromising on code quality or architecture. Beyond code, I am an effective communicator and a 
              natural leader, having successfully led development teams to deliver large-scale projects.
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                What I'm Looking For
              </h4>
              <p className="text-gray-600 leading-relaxed">
                I am currently seeking new opportunities to apply my full-stack expertise to ambitious projects. 
                If you are looking for a developer who combines technical skill with strategic thinking and a 
                commitment to quality, I would love to hear from you.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 text-center lg:text-left">
              Key Strengths
            </h3>
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{highlight.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6">
            <strong>Let's connect and build something amazing together.</strong>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About


