import { Home, Github, Facebook, Mail, Moon, Sun, Download } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "./ui/tooltip"
import { Dock, DockIcon } from "./ui/dock"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/theme-provider"
import { buttonVariants } from "@/components/ui/button"

const Icons = {
    linkedin: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

export function DockNavbar({ className }) {
    const { theme, setTheme } = useTheme()
    const isDarkMode = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

    const toggleTheme = () => {
        setTheme(isDarkMode ? "light" : "dark")
    }

    const navItems = [
        { href: "#", icon: Home, label: "Home" },
        { href: "/DELATORRE_GIANCARLO_RESUME.pdf", icon: Download, label: "Download CV", download: true },
    ]

    const socialItems = [
        { href: "https://github.com/gcdelatorre", icon: Github, label: "GitHub" },
        { href: "https://linkedin.com/in/gcdelatorre", icon: Icons.linkedin, label: "LinkedIn" },
        { href: "https://facebook.com/delatorregian", icon: Facebook, label: "Facebook" },
        { href: "mailto:giancarlo.delatorre.dev@gmail.com", icon: Mail, label: "Email" },
    ]

    return (
        <Dock direction="middle" iconMagnification={70} className={cn("fixed bottom-10 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md border border-primary/30 rounded-full px-2 py-1 flex items-center shadow-2xl z-50", className)}>
            {/* Main Navigation */}
            {navItems.map((item, index) => (
                <DockIcon key={item.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href={item.href}
                                aria-label={item.label}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-full rounded-full hover:bg-primary/10 flex items-center justify-center"
                                )}
                                {...(item.download ? { download: "Gian_Dela_Torre_Resume.pdf", target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                <item.icon className="size-5 text-primary/90 group-hover:text-primary transition-colors" />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{item.label}</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            ))}

            <div className="w-[1px] h-6 bg-primary/50 mx-1" />

            {/* Social Links */}
            {socialItems.map((item) => (
                <DockIcon key={item.label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href={item.href}
                                aria-label={item.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-full rounded-full hover:bg-primary/10 flex items-center justify-center"
                                )}
                            >
                                <item.icon className="size-5 text-primary/90 group-hover:text-primary transition-colors" />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{item.label}</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            ))}

            <div className="w-[1px] h-6 bg-primary/50 mx-1" />

            {/* Theme Toggle */}
            <DockIcon>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={toggleTheme}
                            aria-label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "icon" }),
                                "size-full rounded-full hover:bg-primary/10 transition-all active:scale-95 flex items-center justify-center"
                            )}
                        >
                            {isDarkMode ? (
                                <Sun className="size-5 text-yellow-500 hover:text-yellow-400 transition-colors" />
                            ) : (
                                <Moon className="size-5 text-primary/90 hover:text-primary transition-colors" />
                            )}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</p>
                    </TooltipContent>
                </Tooltip>
            </DockIcon>
        </Dock>
    )
}