import './index.css';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Hero from './pages/Hero'
import About from './pages/About'
import Navbar from './components/Navbar'
import Features from './pages/Features'
import Story from './pages/Story'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with GSAP
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove();
    };
  }, []);

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
