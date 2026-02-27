import { Home, Search, Settings } from "lucide-react"
import { cn } from "../lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "./ui/tooltip"
import { Dock, DockIcon } from "./ui/dock"
const vite = "/vite.svg"

// Home, Socials (Github, Linkedin, Email, Facebook), Theme toggle
export function DockDemo({ className }) {

    return (
        <Dock className={cn("fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full border-2 border-white/20 overflow-hidden bg-white/5", className)} >
            <Tooltip>
                <TooltipTrigger>
                    <DockIcon>
                        <img src={vite} alt="" />
                    </DockIcon>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Vite</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <DockIcon>
                        <Settings className="text-sky-50" />
                    </DockIcon>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Vite</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger>
                    <DockIcon>
                        <Search className="text-sky-50" />
                    </DockIcon>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Vite</p>
                </TooltipContent>
            </Tooltip>
        </Dock>
    )
}