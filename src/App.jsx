import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { Glow, Progress } from './components/Fx.jsx'
import { About, Skills, Projects, Experience, Education, Leadership, Resume, Contact } from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <Progress /><Glow />
      <Navbar />
      <main className="relative z-10">
        <Hero /><About /><Skills /><Projects /><Experience /><Education /><Leadership /><Resume /><Contact />
      </main>
      <Footer />
    </>
  )
}
