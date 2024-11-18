'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-teal-50 to-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/Saksham Profile Picture.jpg"
            alt="Saksham"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Saksham</h1>
          <h2 className="text-2xl text-teal-700 mb-4">Computer Science Student</h2>
          <p className="text-gray-600 mb-6">
            Ambitious Computer Science student with expertise in JavaScript, HTML, CSS, UI/UX, 
            Machine learning, DSA and Blockchain. My academic background and problem-solving 
            abilities have honed my analytical and critical thinking skills. As a technology 
            enthusiast, I am passionate about harnessing tech for social impact.
          </p>
          <a 
  href="/resume.pdf" 
  download 
  className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors duration-300"
>
  Download CV
</a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
