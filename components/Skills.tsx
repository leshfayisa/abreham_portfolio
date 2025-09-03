'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      description: "Architecting dynamic and responsive user interfaces",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-blue-600" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Material-UI", level: 88, color: "bg-blue-500" },
        { name: "Redux", level: 85, color: "bg-purple-500" },
        { name: "Figma", level: 80, color: "bg-pink-500" }
      ]
    },
    {
      title: "Backend & API Development",
      description: "Building secure, efficient, and well-documented backend systems",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-500" },
        { name: "NestJS", level: 85, color: "bg-red-500" },
        { name: "Django REST Framework", level: 88, color: "bg-green-700" },
        { name: "RESTful APIs", level: 92, color: "bg-blue-500" },
        { name: "WebSockets", level: 85, color: "bg-purple-600" },
        { name: "PostgreSQL", level: 88, color: "bg-blue-600" }
      ]
    },
    {
      title: "Cross-Platform Mobile Development",
      description: "Developing native-feeling mobile applications for iOS and Android",
      skills: [
        { name: "React Native (Expo)", level: 90, color: "bg-blue-500" },
        { name: "Flutter", level: 85, color: "bg-blue-400" },
        { name: "Mobile UI/UX", level: 88, color: "bg-purple-500" }
      ]
    },
    {
      title: "Full-Stack Integration & DevOps",
      description: "Seamlessly integrating complex systems and managing deployment",
      skills: [
        { name: "Firebase", level: 85, color: "bg-orange-500" },
        { name: "Docker", level: 80, color: "bg-blue-600" },
        { name: "Git", level: 92, color: "bg-orange-600" },
        { name: "Jira", level: 85, color: "bg-blue-500" },
        { name: "CI/CD", level: 80, color: "bg-green-600" }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My technical proficiency is broad and deep, covering the full spectrum of modern software development 
            from frontend to backend, mobile to web, and everything in between.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {category.description}
              </p>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color} transition-all duration-300`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "MongoDB", "GraphQL", "AWS", "Vercel", "Netlify", "GitHub",
              "VS Code", "Postman", "Swagger", "Jest", "Cypress", "Storybook"
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <span className="text-sm font-medium text-gray-700">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


