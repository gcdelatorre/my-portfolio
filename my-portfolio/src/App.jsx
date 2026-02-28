import { DockNavbar } from '@/components/DockNavbar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider, useTheme } from '@/contexts/theme-provider'
import { LiquidEtherBackground } from '@/components/backgrounds/LiquidEtherBackground'
import { BeamsBackground } from '@/components/backgrounds/BeamsBackground'
import Hero from '@/components/sections/Hero'
import FadeContent from '@/components/ui/FadeContent'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/experience/Experience'

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
    <main className="relative min-h-screen w-full pb-24">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        {theme === "light" && <LiquidEtherBackground />}
        {theme === "dark" && <BeamsBackground />}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen w-full py-10">
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-12 text-left">
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <Hero />
            <About />
            <Experience />
            <Skills />
          </FadeContent>
          <DockNavbar />
        </div>
      </div>
    </main >
  )
}