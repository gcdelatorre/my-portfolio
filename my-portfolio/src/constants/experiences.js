import ectrip from '@/assets/ectrip.mp4'
import trackwise from '@/assets/trackwise.mp4'

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
        image: ectrip,
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
        image: trackwise,
        liveApp: "https://smart-trackwise.vercel.app/",
        techStack: ["React", "Express", "Node", "MongoDB", "Tailwind CSS", "Generative AI", "JWT"],
        type: "Website"
    }
]

export default experiences