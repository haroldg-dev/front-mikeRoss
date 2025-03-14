'use client';

import { useChats } from '../hooks/useChats';

export default function ChatList({ onSelectChat }: { onSelectChat: (chatId: string) => void }) {
  const { chats, loading, error } = useChats();

  if (loading) {
    return <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4 text-center">Loading chats...</div>;
  }

  if (error) {
    return <div className="w-1/4 bg-gray-100 dark:bg-gray-800 p-4 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="m-10 w-fit h-3/4 bg-gray-100 dark:bg-gray-800 p-4 overflow-y-auto shadow-lg rounded-3xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Chats</h2>
      <ul className="space-y-2">
        {chats.map((chat) => (
          <li
            key={chat._id}
            className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={() => onSelectChat(chat._id)} // Pass chatId to parent
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{chat.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Messages: {chat.total_messages}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Created by: {chat.user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}