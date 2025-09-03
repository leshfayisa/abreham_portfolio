'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/250",
      category: "fullstack",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard with analytics",
        "Responsive mobile design"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Cross-platform mobile application for team collaboration and project management with offline capabilities.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Cross-platform compatibility",
        "Offline functionality",
        "Real-time collaboration",
        "Push notifications"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and SEO optimization.",
      image: "/api/placeholder/400/250",
      category: "frontend",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Responsive design",
        "Smooth animations",
        "SEO optimized",
        "Performance focused"
      ]
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "Microservices architecture with API gateway, authentication, and real-time communication using WebSockets.",
      image: "/api/placeholder/400/250",
      category: "backend",
      technologies: ["NestJS", "WebSockets", "JWT", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Microservices architecture",
        "Real-time communication",
        "JWT authentication",
        "Rate limiting"
      ]
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and reporting capabilities.",
      image: "/api/placeholder/400/250",
      category: "fullstack",
      technologies: ["React", "Django", "PostgreSQL", "Chart.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Data visualization",
        "Multi-platform integration",
        "Automated reporting",
        "User management"
      ]
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Mobile fitness application with workout tracking, progress monitoring, and social features.",
      image: "/api/placeholder/400/250",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Bloc", "Google Fit API"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Workout tracking",
        "Progress analytics",
        "Social features",
        "Health data integration"
      ]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my expertise across different technologies 
            and project types. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-200 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl">
                  📱
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                        <span className="text-primary-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    disabled={project.liveUrl === '#'}
                  >
                    Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    disabled={project.githubUrl === '#'}
                  >
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            Interested in seeing more of my work or discussing a potential project?
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
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

