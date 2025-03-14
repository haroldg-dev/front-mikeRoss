# MIKE ROSS FRONTEND

The `front-mikeross` is the frontend application for the Mike Ross API. It is built with modern web technologies to provide a user-friendly interface for chat and messaging functionalities, including GPT-based AI features.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The `front-mikeross` project serves as the client-side application for interacting with the Mike Ross API. It provides a responsive and intuitive interface for managing chats, sending messages, and leveraging AI-powered features.

---

## Features

- Real-time chat interface with WebSocket support.
- Integration with GPT services for AI-driven responses.
- User authentication and role-based access control.
- Modular and scalable architecture.
- Responsive design for desktop and mobile devices.

---

## Technologies

- **Framework**: React.js (v18 or higher)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **API Communication**: Axios
- **Real-time Communication**: Socket.IO
- **Testing**: Jest and React Testing Library
- **Build Tool**: Vite

---

## Architecture

The application follows a modular architecture with the following key components:

1. **Components**: Reusable UI components.
2. **Pages**: Route-specific views.
3. **Redux Store**: Centralized state management.
4. **Services**: API communication and utility functions.
5. **Hooks**: Custom hooks for shared logic.
6. **Styles**: Tailwind CSS for consistent styling.

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm and pnpm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/haroldg-dev/front-mikeross.git
   cd front-mikeross
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

---

## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:4040
```

---

## Folder Structure

The project is organized as follows:

```
front-mikeross/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-specific views
│   ├── store/             # Redux store and slices
│   ├── services/          # API communication and utilities
│   ├── hooks/             # Custom hooks
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   └── index.html         # HTML template
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
└── vite.config.ts         # Vite configuration
```

---

## Usage

### Authentication

- Use the `useAuth` hook to manage user authentication.
- Example:
  ```typescript
  const { login, logout, isAuthenticated } = useAuth();
  ```

### Fetching Chats

- Use the `useChats` hook to fetch all available chats.
- Example:
  ```typescript
  const { chats, loading, error } = useChats();
  ```

### Sending Messages

- Use the `useMessages` hook to send and fetch messages.
- Example:
  ```typescript
  const { sendMessage, messages } = useMessages(chatId);
  ```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

---
