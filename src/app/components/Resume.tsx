'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'National Cadet Corps',
    organization: 'NCC Cadet',
    period: 'Aug 2023 - Jun 2024',
    description: 'Demonstrated leadership skills through participation in national camps, parades, and community service initiatives. Enhanced time management, physical endurance, and ability to work under pressure.',
  },
  {
    title: 'Smart India Hackathon',
    organization: 'SRM Institute of Science and Technology',
    period: 'Sep 2024',
    description: 'Led team development of AI-powered travel chatbot, utilizing HTML, CSS, Node.js, blockchain, and Figma. Enhanced problem-solving, teamwork, and project management skills.',
  },
  {
    title: 'Web3Bharat Conference Attendee',
    organization: 'Code Chef',
    period: 'Oct 2022',
    description: 'Attended Web3 conference exploring blockchain, smart contracts, and decentralized applications. Participated in interactive sessions and networked with industry professionals.',
  },
]

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Experience & Activities</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/4">
                <h3 className="text-xl font-semibold text-teal-700">{exp.title}</h3>
                <p className="text-gray-600">{exp.organization}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0 md:pl-8 border-l border-gray-200">
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume