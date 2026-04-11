import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Serial from './components/Serial'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Serial />
      <Contact />
      <Footer />
    </div>
  )
}
