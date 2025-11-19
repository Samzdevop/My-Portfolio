import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatSender } from '../types';

export const AIChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 'init', text: "Hi! I'm Alex's AI Assistant. Ask me anything about his skills or projects.", sender: ChatSender.BOT, timestamp: new Date() }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            text: inputValue,
            sender: ChatSender.USER,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            // Create a placeholder for the bot response
            const botMsgId = (Date.now() + 1).toString();
            setMessages(prev => [...prev, {
                id: botMsgId,
                text: "",
                sender: ChatSender.BOT,
                timestamp: new Date()
            }]);

            const stream = await sendMessageToGemini(userMsg.text);
            
            let fullText = "";

            for await (const chunk of stream) {
                fullText += chunk;
                setMessages(prev => prev.map(msg => 
                    msg.id === botMsgId ? { ...msg, text: fullText } : msg
                ));
            }

        } catch (error) {
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                text: "Sorry, I'm having trouble connecting to the AI brain right now.",
                sender: ChatSender.BOT,
                timestamp: new Date()
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-110 z-50 ${isOpen ? 'bg-gray-800 text-white rotate-90' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'}`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right">
                    
                    {/* Header */}
                    <div className="p-4 border-b border-white/10 bg-white/5 flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                            <Sparkles size={16} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                            <p className="text-xs text-green-400 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online
                            </p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                    msg.sender === ChatSender.USER 
                                    ? 'bg-blue-600 text-white rounded-br-none' 
                                    : 'bg-gray-800 text-gray-200 rounded-bl-none'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && messages[messages.length - 1]?.text === "" && (
                             <div className="flex justify-start">
                                <div className="bg-gray-800 rounded-2xl px-4 py-3 rounded-bl-none flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/10 bg-black/40">
                        <div className="flex items-center bg-gray-900/50 border border-gray-700 rounded-full px-2">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Ask about my skills..."
                                className="flex-1 bg-transparent border-none px-4 py-3 text-sm text-white focus:ring-0 placeholder-gray-500"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={!inputValue.trim() || isTyping}
                                className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-gray-600 mt-2">Powered by Gemini 2.5 Flash</p>
                    </div>
                </div>
            )}
        </>
    );
};