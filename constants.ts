import { Project, Skill } from './types';

export const DEVELOPER_NAME = "Alex Dev";
export const DEVELOPER_ROLE = "Senior Full Stack & Mobile Developer";

export interface DetailedProject extends Project {
    fullDescription: string;
    features: string[];
    challenges: string;
}

export const SKILLS: Skill[] = [
    { name: "React", category: "Frontend", level: 95 },
    { name: "TypeScript", category: "Frontend", level: 90 },
    { name: "React Native", category: "Mobile", level: 88 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Express", category: "Backend", level: 85 },
    { name: "Three.js", category: "Frontend", level: 75 },
    { name: "Tailwind CSS", category: "Frontend", level: 95 },
    { name: "PostgreSQL", category: "Backend", level: 80 },
    { name: "Docker", category: "Tools", level: 70 },
];

export const PROJECTS: DetailedProject[] = [
    {
        id: 1,
        title: "E-Commerce Native App",
        description: "A full-featured mobile shopping application built with React Native and Node.js backend.",
        fullDescription: "A cross-platform mobile application designed for high-volume fashion retail. The app provides a seamless shopping experience with biometric authentication, AR product previews, and one-click checkout.",
        features: ["Biometric Login (FaceID)", "AR Product View", "Real-time Order Tracking", "Offline Mode"],
        challenges: "Optimizing the image rendering engine for low-bandwidth devices while maintaining 60fps scroll performance.",
        tech: ["React Native", "Redux", "Node.js", "Stripe"],
        link: "#"
    },
    {
        id: 2,
        title: "SaaS Analytics Dashboard",
        description: "High-performance analytics platform handling millions of events. Visualized with D3.js.",
        fullDescription: "An enterprise-grade dashboard for tracking marketing KPIs in real-time. It ingests data from 15+ sources and normalizes it into actionable insights using complex D3.js visualizations.",
        features: ["Real-time WebSockets", "Custom D3 Charts", "Role-based Access Control", "PDF Report Generation"],
        challenges: "Handling websocket backpressure during high-traffic events and rendering 10k+ data points without freezing the main thread.",
        tech: ["React", "TypeScript", "D3.js", "AWS"],
        link: "#"
    },
    {
        id: 3,
        title: "AI Content Generator",
        description: "Web application leveraging generative AI to create blog posts and social media captions.",
        fullDescription: "A creator-focused tool that uses Gemini Pro to draft, edit, and schedule social media content. Includes a rich-text editor and direct integration with Twitter and LinkedIn APIs.",
        features: ["Prompt Engineering Templates", "Tone Analysis", "Auto-Scheduling", "Multi-platform Posting"],
        challenges: "Implementing streaming responses from the AI API to provide a typewriter effect and managing token limits for long-form content.",
        tech: ["Next.js", "Gemini API", "Tailwind"],
        link: "#"
    },
    {
        id: 4,
        title: "Social Media Clone",
        description: "A scalable social network architecture with real-time chat and feed updates.",
        fullDescription: "A proof-of-concept social network built to demonstrate microservices architecture. It features infinite scroll feeds, stories, and end-to-end encrypted messaging.",
        features: ["Infinite Scroll", "E2E Encrypted Chat", "Story Uploads", "Push Notifications"],
        challenges: "Designing a database schema that supports efficient fan-out on writes for celebrity users with millions of followers.",
        tech: ["React", "Socket.io", "Express", "MongoDB"],
        link: "#"
    }
];

export const ABOUT_STATS = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Clients Served", value: "30+" },
];

export const BIO_TEXT = "I am a passionate Full Stack Developer with a strong foundation in both web and mobile technologies. My journey began with a curiosity for how things work on the internet, which quickly evolved into a career building complex systems. I specialize in the JavaScript ecosystem, leveraging React for dynamic UIs and Node.js for robust backends. Whether it's a native mobile app or a 3D web experience, I love pushing the boundaries of what's possible in the browser.";

export const SYSTEM_PROMPT = `
You are an AI assistant for ${DEVELOPER_NAME}'s portfolio website. 
${DEVELOPER_NAME} is a ${DEVELOPER_ROLE}.
Key Skills: ${SKILLS.map(s => s.name).join(', ')}.
Projects: ${PROJECTS.map(p => `${p.title} (${p.tech.join(', ')})`).join('; ')}.

Your goal is to answer visitor questions about the developer's experience, skills, and projects professionally but with a friendly tone. 
If asked about contact info, direct them to the contact form section.
Keep answers concise (under 100 words) as you are a chat bot.
`;