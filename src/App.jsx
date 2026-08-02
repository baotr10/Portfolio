import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/section/Hero"
import { About } from "@/section/About"
import { Experience } from "@/section/Experience"
import { Project } from "@/section/Project"
import { Contact } from "@/section/Contact"
import { Certificates } from "./section/Certificates"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}

export default App
