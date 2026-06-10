import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Education from '@/components/education'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <Hero />
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
