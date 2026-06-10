import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import ImpactBand from './components/ImpactBand'
import TechMarquee from './components/TechMarquee'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Dashboards from './components/Dashboards'
import RoleFit from './components/RoleFit'
import Leadership from './components/Leadership'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CommandPalette from './components/CommandPalette'
import PortfolioAssistant from './components/PortfolioAssistant'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <ImpactBand />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Dashboards />
        <RoleFit />
        <Leadership />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette />
      <PortfolioAssistant />
      {/* Vercel Analytics — invisible to visitors; data appears in your
          Vercel dashboard under the project's Analytics tab. */}
      <Analytics />
    </>
  )
}
