'use client';

import { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-blue-400">Chats</h2>
        <ul className="space-y-3">
          {['Chat 1', 'Chat 2', 'Chat 3'].map((chat, index) => (
            <li
              key={index}
              className="flex items-center p-3 bg-gray-700 hover:bg-gray-600 rounded-md cursor-pointer transition-all"
            >
              <MessageSquare className="mr-2 text-blue-300" /> {chat}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 h-3/4 p-10 flex flex-col m-auto">
        <div className="flex-1 p-4 overflow-y-auto bg-gray-800 border-b border-gray-700">
          {messages.map((message, index) => (
            <div
              key={index}
              className="p-3 bg-blue-500 text-white rounded-lg mb-2 w-fit max-w-md"
            >
              {message}
            </div>
          ))}
        </div>
        
        {/* Input Section */}
        <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all flex items-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}