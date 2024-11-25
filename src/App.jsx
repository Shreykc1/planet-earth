import './index.css';
import Hero from './pages/Hero'
import About from './pages/About'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Story from './pages/Story'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-white'>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
    </main>
  )
}

export default App
