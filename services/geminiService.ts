import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
    if (chatSession) return chatSession;

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.error("API_KEY not found");
        throw new Error("API Key missing");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_PROMPT,
        }
    });

    return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
    const chat = initializeChat();
    
    try {
        const result = await chat.sendMessageStream({ message });
        
        // Create an async generator to yield text chunks
        async function* textGenerator() {
            for await (const chunk of result) {
                 // Type assertion based on known SDK behavior even if types aren't perfectly aligned in all envs
                 // The prompt instructions say chunk is GenerateContentResponse and has .text property
                const text = (chunk as any).text; 
                if (text) {
                    yield text;
                }
            }
        }
        
        return textGenerator();
    } catch (error) {
        console.error("Gemini Error:", error);
        throw error;
    }
};