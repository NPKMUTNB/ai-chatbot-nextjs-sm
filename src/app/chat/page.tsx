// create page.tsx react
'use client';

import { useState } from 'react';


function ChatPage() {
    const [input, setInput] = useState("")
    console.log("Input:",input);
    return (
        <div className='p-4 bg-amber-600'>
            <form action="">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </form>
        </div>
    );
}

export default ChatPage;