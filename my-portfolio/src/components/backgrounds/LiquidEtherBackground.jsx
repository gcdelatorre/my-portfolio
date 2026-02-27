import LiquidEther from "@/components/ui/LiquidEther"

export function LiquidEtherBackground() {
    return (
        <LiquidEther
            colors={['#310092ff', '#ffffffff', '#006affff']}
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
            color0="#272629ff"
            color1="#ffffffff"
            color2="#006affff"
        />
    )
}