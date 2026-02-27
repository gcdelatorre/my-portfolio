import { Pointer } from "@/components/ui/pointer";
import { useTheme } from "../contexts/theme-provider";

export function ColoredCursor({ className }) {
    const { theme } = useTheme()
    return (
        <Pointer className={`fill-${theme === "dark" ? "white" : "black"}`} />
    )
}