'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML/CSS/JavaScript', level: 90 },
  { name: 'React & Node.js', level: 85 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Data Structures & Algorithms', level: 85 },
  { name: 'Blockchain', level: 75 },
  { name: 'UI/UX Design', level: 80 },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-teal-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills