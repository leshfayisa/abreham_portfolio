'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Engineer",
      company: "Tech Startup",
      duration: "2022 - Present",
      description: "Leading development of end-to-end digital solutions, from concept to MVP deployment. Successfully led a development team to deliver a large-scale project.",
      achievements: [
        "Architected and developed scalable web applications using React.js, Next.js, and Node.js",
        "Led a development team of 5 engineers to deliver a complex e-commerce platform",
        "Implemented real-time features using WebSockets and optimized database queries for PostgreSQL",
        "Reduced application load time by 40% through performance optimization and caching strategies"
      ],
      technologies: ["React.js", "Next.js", "Node.js", "PostgreSQL", "WebSockets", "Docker"]
    },
    {
      title: "Mobile Developer",
      company: "Digital Agency",
      duration: "2021 - 2022",
      description: "Developed cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      achievements: [
        "Built 3+ mobile applications with over 10,000 downloads combined",
        "Implemented complex state management and offline functionality",
        "Collaborated with UI/UX designers to create pixel-perfect mobile interfaces",
        "Optimized app performance and reduced crash rates by 60%"
      ],
      technologies: ["React Native", "Flutter", "Redux", "Firebase", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Web Development Studio",
      duration: "2020 - 2021",
      description: "Focused on creating responsive and accessible user interfaces using modern web technologies.",
      achievements: [
        "Developed 10+ responsive websites and web applications",
        "Implemented design systems using Tailwind CSS and Material-UI",
        "Ensured accessibility compliance and cross-browser compatibility",
        "Collaborated with backend teams to integrate RESTful APIs"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Material-UI", "REST APIs"]
    }
  ]

  const education = {
    degree: "Bachelor of Science in Electrical and Computer Engineering",
    institution: "Addis Ababa University",
    duration: "2019 - 2024",
    description: "Studied electrical engineering principles, computer science fundamentals, and software development methodologies. Graduated with honors and completed capstone project on IoT systems."
  }

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Over four years of professional experience in software development, with a proven track record 
            of delivering high-quality solutions in fast-paced environments.
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm lg:text-right mt-2 lg:mt-0">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Education
          </h3>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              {education.degree}
            </h4>
            <p className="text-primary-600 font-medium mb-2">
              {education.institution}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              {education.duration}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {education.description}
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to bring my experience to your next project?
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
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

