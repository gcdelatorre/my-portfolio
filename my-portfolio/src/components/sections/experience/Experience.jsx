import { ExperienceAccordions } from "./ExperienceAccordions"

export default function Experience() {
    return (
        <div className="flex flex-col items-start justify-start gap-4 w-full pt-12">
            <h1 className="text-xl md:text-[26px] tracking-normal text-primary leading-tight font-clash font-[600]">Experience</h1>
            <ExperienceAccordions />
        </div>
    )
}
