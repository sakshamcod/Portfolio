'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Travel-Tailor',
    description: 'A personalized travel planning app enabling users to craft custom itineraries using AI for recommendations and real-time assistance.',
    image: "/Travel-Tailor logo.jpeg",
    link: 'https://main--traveltailor.netlify.app/'
  },
  {
    title: 'Smart India Hackathon',
    description: 'Led team development of AI-powered travel chatbot, improving customer service and handling high-volume bookings efficiently.',
    image: "/SIH Logo.jpeg",
    link: 'https://main--traveltailor.netlify.app/'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block text-teal-700 hover:text-teal-800 transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects