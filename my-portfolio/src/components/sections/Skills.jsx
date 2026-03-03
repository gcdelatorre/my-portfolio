import { Badge } from "@/components/ui/badge"
import skills from "@/constants/skills"

export default function Skills() {
    return (
        <div className="flex flex-col items-start justify-start gap-8 w-full pt-12">
            <h1 className="text-xl md:text-[26px] tracking-normal text-primary leading-tight font-clash font-[600]">Skills</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {["Frontend", "Backend", "Database", "Tools & Platforms"].map((category) => (
                    <div key={category} className="flex flex-col gap-3 p-5 rounded-2xl border border-border/20 bg-card/50 backdrop-blur-sm">
                        <h2 className="text-sm md:text-base font-clash font-semibold text-primary/90 tracking-wide uppercase">
                            {category}
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                            {skills.filter((skill) => skill.category === category).map((skill) => (
                                <Badge
                                    key={skill.name}
                                    variant="secondary"
                                    className="bg-background/80 hover:bg-primary/10 text-primary border-primary/10 py-2 px-4 flex items-center justify-start gap-3 transition-all cursor-default min-h-[44px] w-full"
                                >
                                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                        {skill.icon}
                                    </div>
                                    <span className="text-[11px] md:text-xs font-sans font-bold leading-tight">{skill.name}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}