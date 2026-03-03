import { Card } from "@/components/ui/card"
import unclogo from '@/assets/unclogo.png'
import ncflogo from '@/assets/ncflogo.png'

export default function Education() {
    const educationData = [
        {
            school: "University of Nueva Caceres",
            degree: "Bachelor of Science in Information Technology",
            period: "2024 - Present",
            description: "Currently in 2nd Year. Specializing in full-stack development.",
            logo: unclogo
        },
        {
            school: "Naga College Foundation Inc.",
            degree: "Senior High School",
            period: "2022 - 2024",
            logo: ncflogo
        }
    ]

    return (
        <div className="flex flex-col items-start justify-start gap-6 w-full pt-12">
            <h1 className="text-xl md:text-[26px] tracking-normal text-primary leading-tight font-clash font-[600]">Education</h1>

            <div className="flex flex-col gap-3 w-full">
                {educationData.map((edu, index) => (
                    <Card key={index} className="w-full p-3.5 bg-card/50 backdrop-blur-sm border-border/20 hover:bg-card/60 transition-all duration-300">
                        <div className="flex items-center gap-4">
                            {/* Logo Container */}
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-foreground/[0.03] border border-border/20 flex items-center justify-center shrink-0 overflow-hidden p-2">
                                {edu.logo ? (
                                    <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                                ) : (
                                    <div className="text-primary/30 font-bold text-[9px] uppercase tracking-tighter">Logo</div>
                                )}
                            </div>

                            <div className="flex flex-col flex-1 justify-center min-w-0">
                                <div className="flex justify-between items-center w-full mb-0">
                                    <h3 className="text-[15px] md:text-lg text-primary font-sans font-[700] leading-tight">{edu.school}</h3>
                                    <div className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[9px] font-bold font-sans uppercase tracking-wider shrink-0">
                                        {edu.period}
                                    </div>
                                </div>

                                <p className="text-[13px] md:text-sm text-foreground/90 font-medium font-sans leading-tight mt-0.5">{edu.degree}</p>
                                <p className="text-[11px] text-foreground/50 font-sans mt-1 line-clamp-2">{edu.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
