'use client';

import { useState, useEffect } from 'react';
import ChatList from './ChatList';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const fetchMessagesByCursor = async (chatId: string) => {
    try {
      const response = await fetch(`http://localhost:4040/messages/cursor/50?chatId=${chatId}`);
      const data = await response.json();

      const extractedMessages = data.map((message: any) => message.content.text);
      setMessages(extractedMessages);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    fetchMessagesByCursor(chatId);
  };

  const handleSendMessage = async () => {
    if (input.trim() && selectedChatId) {
      const newMessage = {
        user_id: "67d36fc2525f6cd4fcb21a39", // Replace with the actual user ID
        chat_id: selectedChatId,
        status: "delivered",
        direction: "outbound",
        content: {
          type: "text",
          text: input,
        },
      };

      try {
        const response = await fetch("http://localhost:4040/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMessage),
        });

        if (response.ok) {
          const createdMessage = await response.json();
          setMessages([...messages, createdMessage.content.text]);
          setInput('');
        } else {
          console.error("Failed to send message:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  // Polling logic
  useEffect(() => {
    if (!selectedChatId) return;

    const interval = setInterval(() => {
      fetchMessagesByCursor(selectedChatId);
    }, 60000); // Poll every 60 seconds

    return () => clearInterval(interval); // Cleanup on unmount or when selectedChatId changes
  }, [selectedChatId]);

  return (
    <div className="flex w-screen h-screen bg-gray-50 dark:bg-gray-900">
      <ChatList onSelectChat={handleSelectChat} />

      <div className="w-3/5 h-10/12 flex flex-col rounded-3xl">
        <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-800 shadow-inner rounded-t-lg">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
              {selectedChatId ? 'No messages yet. Start the conversation!' : 'Select a chat to view messages.'}
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 mb-3 rounded-lg shadow ${
                  index % 2 === 0
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                }`}
              >
                {message}
              </div>
            ))
          )}
        </div>

        <div className="p-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 rounded-b-lg">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}