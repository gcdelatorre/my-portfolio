import Beams from "@/components/ui/Beams"

export function BeamsBackground() {
    return (
        <Beams
            beamWidth={4}
            beamHeight={30}
            beamNumber={20}
            lightColor="#d7d7d7"
            speed={1.8}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
        />
    )
}