import AnimatedContent from '@/components/ui/AnimatedContent'

export function AnimatedContents({ children, reverse = false, active }) {
    return (
        <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={reverse}
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
            active={active}
        >
            {children}
        </AnimatedContent>
    )
}