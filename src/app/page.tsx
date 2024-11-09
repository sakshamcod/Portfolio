import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}