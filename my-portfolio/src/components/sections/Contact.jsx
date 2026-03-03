import { useState } from "react"
import { Copy, Check, Linkedin, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Contact() {
    const [copied, setCopied] = useState(false)
    const email = "giancarlo.delatorre.dev@gmail.com"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full pt-16">
            <Card className="w-full max-w-2xl p-6 md:p-6 border-border/20 bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
                {/* Subtle background glow effect if desired */}
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                    {/* Badge */}
                    <div className="px-4 py-1.5 bg-foreground text-background rounded-full text-xs font-bold font-sans uppercase tracking-widest shadow-xl">
                        Contact
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary tracking-tighter leading-tight">
                        Let's Connect
                    </h2>

                    {/* Content paragraph */}
                    <div className="w-full space-y-3">
                        <p className="text-sm md:text-[17px] text-foreground/80 font-sans leading-relaxed tracking-wide">
                            I am currently open to new opportunities and collaborations.
                            Whether you have a project in mind or just want to say hi, feel free to reach out via{" "}
                            <a
                                href="https://linkedin.com/in/gcdelatorre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 transition-all"
                            >
                                LinkedIn
                            </a>
                            {" "}or send a direct email below.
                        </p>

                        {/* Interactive Email Bar */}
                        <div className="flex items-center justify-center gap-3 group pt-2">
                            <a
                                href={`mailto:${email}`}
                                className="text-primary text-sm md:text-base font-semibold hover:underline decoration-2 underline-offset-4 transition-all"
                            >
                                {email}
                            </a>
                            <button
                                onClick={copyToClipboard}
                                className="p-2 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-md transition-all duration-300 text-primary flex items-center gap-2"
                                title="Copy to clipboard"
                            >
                                {copied ? (
                                    <Check className="w-3.5 h-3.5" />
                                ) : (
                                    <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}