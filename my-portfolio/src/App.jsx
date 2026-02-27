import Hero from './components/Hero'
import FadeContent from './components/ui/FadeContent'
import LightRays from './components/ui/LightRays'
import { DockDemo } from './components/DockNavbar'
import { TooltipProvider } from './components/ui/tooltip'

export default function App() {
  return (
    <TooltipProvider >
      <AppContent />
    </TooltipProvider>
  )
}

export function AppContent() {
  return (
    <main className="relative min-h-screen w-full ">
      <div className="absolute inset-0 z-0 h-screen w-full pointer-events-none opacity-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.5}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={0}
        />
      </div>
      {/* Change items-center to flex-start if you want it at the top with padding */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen w-full py-10">
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-12 text-left">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <Hero />
          </FadeContent>
          {/* Add more sections here later */}
          <DockDemo className="flex justify-center" />
        </div>
      </div>
    </main>
  )
}