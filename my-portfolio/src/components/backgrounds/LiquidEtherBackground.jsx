import LiquidEther from "@/components/ui/LiquidEther"

export function LiquidEtherBackground() {
    return (
        <LiquidEther
            colors={['#332945', '#000000', '#2b1a4d']}
            mouseForce={10}
            cursorSize={75}
            isViscous
            viscous={10}
            iterationsViscous={15}
            iterationsPoisson={15}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.2}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            color0="#332945"
            color1="#000000"
            color2="#2b1a4d"
        />
    )
}