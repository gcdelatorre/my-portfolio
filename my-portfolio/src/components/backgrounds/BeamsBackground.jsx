import Beams from "@/components/ui/Beams"

export function BeamsBackground() {
    return (
        <Beams
            beamWidth={4}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
        />
    )
}