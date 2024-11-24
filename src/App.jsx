import './index.css';
import Hero from './pages/Hero'
import About from './pages/About'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-white'>
        <Navbar />
        <Hero />
        <About />

    </main>
  )
}

export default App
