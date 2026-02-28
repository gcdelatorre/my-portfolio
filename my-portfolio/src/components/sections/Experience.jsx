import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import catgif from '@/assets/catgif.gif'

const experiences = [
    {
        title: "Easy Trip",
        about: "AI Travel Planner",
        period: "Jan 2026 - Feb 2026",
        description: "Developed an application that helps user plan their trip without a hassle. Currently has 450+ registered users and 100+ active users.",
        image: catgif,
        liveApp: "https://ec-trip.vercel.app/"
    },
    {
        title: "Trackwise",
        about: "Expense Tracker with AI",
        period: "Aug 2025 - Dec 2025",
        description: "Built an AI-powered expense tracker that helps users track their expenses and income effortlessly by having automatic categorization of transactions.",
        image: catgif,
        liveApp: "https://smart-trackwise.vercel.app/"
    }
]

export default function Experience() {
    return (
        <div className="flex flex-col items-start justify-start gap-4 w-full pt-12">
            <h1 className="text-xl md:text-[26px] tracking-normal text-primary leading-tight font-clash font-[600]">Experience</h1>

            <div className="grid grid-cols-1 gap-6 w-full">
                {experiences.map((exp, index) => (
                    <Card key={index} className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm p-4 hover:bg-card/80 transition-all">
                        <div className="flex flex-col md:flex-row gap-6 w-full text-left">
                            {/* Image Container */}
                            <div className="w-full md:w-60 h-48 md:h-40 bg-muted/20 rounded-lg relative flex-shrink-0 border border-border/50 overflow-hidden">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Primary Info */}
                            <div className="flex flex-col flex-1 py-1">
                                <div className="flex justify-between items-start w-full mb-2">
                                    <div>
                                        <h3 className="text-xl text-primary font-sans font-[700] leading-none mb-2">{exp.title}</h3>
                                        <p className="text-sm md:text-[14px] text-foreground/80 font-sans">{exp.about}</p>
                                    </div>
                                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-wider">
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-sm md:text-[14px] text-foreground/80 tracking-wide font-sans font-[400] leading-relaxed mb-4">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
