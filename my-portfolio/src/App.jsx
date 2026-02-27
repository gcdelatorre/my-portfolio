import Hero from './components/Hero'
import FadeContent from './components/ui/FadeContent'
import { DockNavbar } from './components/DockNavbar'
import { TooltipProvider } from './components/ui/tooltip'
import About from './components/About'
import Beams from './components/ui/Beams'
import LiquidEther from './components/ui/LiquidEther'
import { ThemeProvider, useTheme } from './contexts/theme-provider'
import Skills from './components/Skills'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider >
        <AppContent />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export function AppContent() {
  const { theme } = useTheme()

  return (
    <main className="relative min-h-screen w-full ">
      <div className="absolute inset-0 z-0 h-screen w-full pointer-events-none opacity-50">
        {theme === "light" && <LiquidEther
          colors={['#272629ff', '#ffffffff', '#ffffffff']}
          mouseForce={10}
          cursorSize={75}
          isViscous
          viscous={10}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#272629ff"
          color1="#ffffffff"
          color2="#ffffffff"
        />}
        {theme === "dark" && <Beams
          beamWidth={4}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen w-full py-10">
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-12 text-left">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <Hero />
            <About />
            <Skills />
          </FadeContent>
          <DockNavbar />
        </div>
      </div>
    </main>
  )
}