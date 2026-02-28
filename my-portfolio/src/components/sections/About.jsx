export default function About() {
    return (
        <div className="flex flex-col items-start justify-start gap-6 w-full pt-12">
            <h1 className="text-xl md:text-[26px] tracking-normal text-primary leading-tight font-clash font-[600]">About</h1>

            <div className="flex flex-col gap-6 max-w-4xl">
                <p className="text-sm md:text-[16px] text-foreground/80 tracking-wide font-sans font-[400] leading-relaxed">
                    I’m a BSIT student and <span className="text-primary font-semibold">full-stack developer</span> who builds <span className="text-foreground font-semibold">scalable, database-driven web applications</span>.
                    I focus on <span className="text-foreground font-semibold">creating systems that solve real problems</span> and enjoy <span className="text-foreground font-semibold">tackling complex challenges</span>.
                    I am eager to learn new technologies and continuously improve my skills.
                </p>

                <p className="text-sm md:text-[16px] text-foreground/80 tracking-wide font-sans font-[400] leading-relaxed">
                    I also enjoy <span className="text-foreground font-semibold">designing reliable, production-ready applications</span>, understanding data flow, and turning complex workflows into <span className="text-primary font-semibold">intuitive user experiences</span>.
                    My goal is to <span className="text-foreground font-semibold">create software that is both functional and user-friendly</span>, while learning and growing as a developer along the way.
                </p>
            </div>
        </div>
    )
}