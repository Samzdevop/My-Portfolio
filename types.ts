export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
}

export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools';
    level: number; // 0-100
}

export enum ChatSender {
    USER = 'user',
    BOT = 'bot',
    SYSTEM = 'system'
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: ChatSender;
    timestamp: Date;
}
