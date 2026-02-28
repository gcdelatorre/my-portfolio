import {
    Card,
} from "@/components/ui/card"
import catgif from '@/assets/catgif.gif'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"
import { AnimatedContents } from "@/components/animations/AnimatedContents"
import { useState } from "react"

const experiences = [
    {
        title: "Easy Trip",
        about: "AI Travel Planner",
        period: "Jan 2026 - Feb 2026",
        description: "Developed an application that helps user plan their trip without a hassle. Currently has 450+ registered users and 70+ active users.",
        projectDescription: "Trip planning is often overwhelming and time-consuming. Most travelers spend hours switching between blogs, maps, and scattered notes that never turn into a clear plan. I built Easy Trip to remove that friction. The platform generates a complete, personalized day-by-day travel itinerary in seconds based on user preferences, helping travelers move from “idea” to “ready-to-go plan” instantly.",
        details: [
            "Saves travelers hours of planning by generating complete itineraries instantly.",
            "Reduces overwhelm by turning scattered travel ideas into clear daily plans.",
            "Keeps trip details organized in one place for easy access anytime.",
            "Supports real travel needs with map visualization and offline-ready plans.",
            "Makes travel planning accessible for solo travelers, families, and groups."
        ],
        image: catgif,
        liveApp: "https://ec-trip.vercel.app/",
        techStack: ["React", "Express", "Node", "MongoDB", "Tailwind CSS", "JWT", "Google OAuth", "Leaflet", "OpenStreetMap"],
        type: "Website"
    },
    {
        title: "Trackwise",
        about: "Expense Tracker with AI",
        period: "Aug 2025 - Dec 2025",
        description: "Built an AI-powered expense tracker that helps users track their expenses and income effortlessly by having automatic categorization of transactions.",
        projectDescription: "Tracking expenses manually is a hassle, and most people lose track of where their money goes. Trackwise solves this by leveraging AI to automatically categorize transactions from receipt photos, giving users real-time insights into their spending habits without the manual data entry.",
        details: [
            "Eliminates manual expense logging by extracting data directly from receipt photos.",
            "Saves time by turning unstructured receipts into organized expense records instantly.",
            "Reduces errors in tracking spending through automated data capture.",
            "Helps users understand spending patterns with searchable, structured records.",
            "Keeps financial information secure with protected user accounts and safe data handling."
        ],
        image: catgif,
        liveApp: "https://smart-trackwise.vercel.app/",
        techStack: ["React", "Express", "Node", "MongoDB", "Tailwind CSS", "Generative AI", "JWT"],
        type: "Website"
    }
]

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
                                    <div className="w-full md:w-60 h-48 md:h-40 bg-muted/20 rounded-lg relative flex-shrink-0 border border-border/50 overflow-hidden">
                                        <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
                                            <a href={exp.liveApp} target="_blank" rel="noopener noreferrer">
                                                <img
                                                    src={exp.image}
                                                    alt={exp.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-data-[state=open]:scale-105"
                                                    loading="lazy"
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
                                <AnimatedContents active={isOpen} reverse={true}>
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