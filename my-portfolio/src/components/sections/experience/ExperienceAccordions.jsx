import {
    Card,
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"
import { AnimatedContents } from "@/components/animations/AnimatedContents"
import { useState } from "react"

import experiences from "@/constants/experiences"

export function ExperienceAccordions() {
    const [openItem, setOpenItem] = useState(null);

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full space-y-6"
            onValueChange={setOpenItem}
        >
            {experiences.map((exp, index) => {
                const isOpen = openItem === `item-${index}`;
                return (
                    <AccordionItem key={index} value={`item-${index}`} className="border-none">
                        <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80">
                            <AccordionTrigger className="w-full px-4 py-0 text-left hover:no-underline group focus-visible:ring-0 [&>svg]:hidden">
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    {/* Image Container */}
                                    <div className="w-full md:w-72 h-50 md:h-42 bg-muted/20 rounded-lg relative flex-shrink-0 border border-border/50 overflow-hidden transition-all duration-300 ease-out hover:scale-115 hover:z-50 hover:shadow-xl hover:border-primary/50 group/video">
                                        <span className="flex items-center gap-1.5 absolute top-2 right-2 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-md text-[10px] font-sans font-bold text-white z-10 uppercase transition-opacity group-hover/video:opacity-0">
                                            <div className="flex items-center space-x-1.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe opacity-90"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                                <span className="leading-none transform translate-y-[0.5px]">{exp.type}</span>
                                            </div>
                                        </span>
                                        <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
                                            <a href={exp.liveApp} target="_blank" rel="noopener noreferrer">
                                                <video
                                                    src={exp.image}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-500 group-data-[state=open]:scale-110 cursor-pointer"
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Primary Info */}
                                    <div className="flex flex-col flex-1">
                                        <div className="flex justify-between items-start w-full mb-2">
                                            <div>
                                                <h3 className="text-xl text-primary font-sans font-[700] leading-none mb-2">{exp.title}</h3>
                                                <p className="text-sm md:text-[14px] text-foreground/80 font-sans font-medium">{exp.about}</p>
                                            </div>
                                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-wider">
                                                {exp.period}
                                            </div>
                                        </div>

                                        <p className="text-sm md:text-[14px] text-foreground/80 tracking-wide font-sans font-[400] leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        <div className="mt-auto flex items-center gap-2 text-xs font-bold text-primary/60 group-hover:text-primary transition-colors">
                                            <span>{isOpen ? "Hide Project Details" : "View Project Details"}</span>
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-0">
                                <AnimatedContents active={isOpen} reverse={false}>
                                    <div className="pt-4 border-t border-border/20 space-y-6">
                                        {/* About the Project */}
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-bold text-primary font-sans uppercase tracking-widest">About the Project</h4>
                                            <p className="text-[13px] text-foreground/80 font-sans leading-relaxed">
                                                {exp.projectDescription}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="space-y-3 pb-1">
                                            <h4 className="text-sm font-bold text-primary font-sans uppercase tracking-widest">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.techStack.map((tech, tIndex) => (
                                                    <span key={tIndex} className="px-2 py-1 bg-primary/5 border border-primary/10 rounded-md text-[11px] font-sans font-medium text-primary">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Highlights */}
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-bold text-primary font-sans uppercase tracking-widest">Key Highlights</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
                                                {exp.details.map((detail, dIndex) => (
                                                    <li key={dIndex} className="text-[13px] text-foreground/70 font-sans flex items-start gap-2 leading-relaxed">
                                                        <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/40 flex-shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </AnimatedContents>
                            </AccordionContent>
                        </Card>
                    </AccordionItem>
                );
            })}
        </Accordion>
    )
}