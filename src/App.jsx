import { useEffect } from 'react'
import Hero from './components/hero'
import Section from './components/section'
import Crone from './components/crone'
import Service from './components/service'
import Ship from './components/ship'
import Lenis from 'lenis'
import Faq from './components/faq'
import Footer from './components/footer'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className='bg-[#d2dde9]'>
      <Hero />
      <Crone />
      <Section />
      <Service />
      <Ship />
      {/* <Faq /> */}
      <Footer />
    </div>
  )
}

export default App
