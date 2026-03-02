import { WordRotate } from "@/components/ui/word-rotate"
import profile from "@/assets/my-photo.jpg"

export default function () {
    const words = ["Fullstack Developer", "Web Developer", "Creating with code. Small details matter.", "Problem Solver"];

    return (
        <div className="flex flex-row items-center  gap-6 w-full">
            <div className="relative flex-shrink-0 w-23 h-23 md:w-28 md:h-28 rounded-full border-3 border-foreground/50 overflow-hidden bg-white/5">
                <img
                    src={profile}
                    alt="Gian Dela Torre profile"
                    className="w-full h-full object-cover grayscale-50 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-center text-start md:text-left">
                <h1 className="text-3xl md:text-5xl tracking-tight text-primary leading-tight font-clash font-semibold">
                    Gian Dela Torre
                </h1>
                <WordRotate
                    words={words}
                    className="text-[11px] md:text-[15px] text-muted-foreground tracking-wider font-sans pl-1"
                />
            </div>
        </div>
    )
}