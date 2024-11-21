'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    
    try {
      // You can replace this with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setSubmitStatus('success')
      setFormState({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error : any) {
      setSubmitStatus('error')
      // Reset error message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          Feel free to reach out for opportunities or just to say hello!
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:amiablesaksham3@gmail.com" className="text-teal-600 hover:text-teal-700">
                    amiablesaksham3@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Phone:</span>
                  <a href="tel:+918962888548" className="text-teal-600 hover:text-teal-700">
                    +91 8962888548
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Location:</span>
                  <span>Chennai, India</span>
                </p>
              </div>
            </div>
          </div>

          <motion.form
            className="flex-1"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-teal-500 h-32"
                required
              ></textarea>
            </div>
            
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 disabled:opacity-50"
              >
                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center mt-4">Failed to send message. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
