// create page.tsx react
'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai';

function ChatPage() {

    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({
            api: "/api/chat_04_stream",  // API Use 
        })
    })

    const [input, setInput] = useState("")
    console.log("Input:",input);
    return (
        <div className='p-4 bg-amber-600'>
            <form onSubmit={e=> {
                e.preventDefault() // ป้องกันการรีเฟรช
                sendMessage({text:input}) /// ส่งข้อความไปยัง AI
                setInput("") // ล้างช่อง Input หลังส่งข้อความ
            }}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Send</button>
            </form>
            {
            ( status==='submitted' || status==='streaming') &&
                <div> AI กำลังคิด...</div>
            }
        {/* แสดง Messages */}
        {messages.map(m => (
           <div className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div>
                    {m.parts.map((part, index) => 
                        part.type === 'text' ? (
                            <div key={index} className="whitespace-pre-wrap">{part.text}</div>
                        ) : null
                    )}
                </div>
           </div> 
        ))}
        </div>
    );
}

export default ChatPage;