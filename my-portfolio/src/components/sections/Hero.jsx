import { WordRotate } from "@/components/ui/word-rotate"
import profile from "@/assets/my-photo.jpg"

export default function () {
    const words = ["Fullstack Developer", "Web Developer", "Creating with code. Small details matter.", "Problem Solver"];

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6 w-full">
            <div className="relative flex-shrink-0 w-28 h-28 rounded-full border-3 border-foreground/20 overflow-hidden bg-white/5">
                <img
                    src={profile}
                    alt="Gian Dela Torre profile"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
                <h1 className="text-4xl md:text-5xl tracking-tight text-primary leading-tight font-clash font-semibold">
                    Gian Dela Torre
                </h1>
                <WordRotate
                    words={words}
                    className="text-sm md:text-[15px] text-muted-foreground tracking-wider font-sans pl-1"
                />
            </div>
        </div>
    )
}