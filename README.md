---

# I-CHAT App

**I-CHAT** is a real-time messaging web application built with Vite, React, TailwindCSS, DaisyUI for the frontend, and Node.js/Express with WebSockets for the backend. It uses Context API and LocalStorage for authentication, Zustand for managing messages, JWT for token-based authentication, and cookie-parser for handling cookies. The app also features audio notifications for incoming messages.

## Features

- **Real-time messaging** using WebSockets.
- **Authentication** with JWT and LocalStorage.
- **State management** for messages using Zustand.
- **Styled with** TailwindCSS and DaisyUI.
- **Audio notifications** for incoming messages.
- **Frontend** on port `4000` and **Backend** on port `5000`.

## Images

### Home page

![alt text](/client/public/images/ui/image-1.png)

### chat page

![alt text](/client/public/images/ui/image-2.png)

### Login page

![alt text](/client/public/images/ui/image-3.png)

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14+)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/getting-started/install) or [pnpm]()
- [Vite](https://vitejs.dev/guide/)
- [Git](https://git-scm.com/)

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Marcochollapaul01/i-chat-app.git
cd i-chat-app
```

### 2. Project Structure

```plaintext
i-chat-app/
├── client/           # Frontend code (Vite + React)
├── server/           # Backend code (Node + Express + websockets)
└── README.md         # Project documentation
```

## Frontend Setup (Client)

Navigate to the `client` directory and install the dependencies:

```bash
cd client
npm install

# Yarn
yarn install

# pnpm
pnpm install
```

### Technologies Used (Frontend)

- **Vite**: Fast build tool for React.
- **React**: For building UI components.
- **TailwindCSS**: Utility-first CSS framework.
- **DaisyUI**: UI component library based on TailwindCSS.
- **Context API & LocalStorage**: For managing authentication state.
- **Zustand**: Lightweight state management for messages.

### Starting the Client

```bash
npm run dev
```

This will start the Vite development server on `http://localhost:4000`.

## Backend Setup (Server)

Navigate to the `server` directory and install the dependencies:

```bash
cd server
npm install
```

### Technologies Used (Backend)

- **Node.js & Express**: For the backend API.
- **JWT (jsonwebtoken)**: For token-based authentication.
- **cookie-parser**: For parsing cookies.
- **WebSockets**: For real-time communication.
- **Audio Notifications**: To alert users of incoming messages.

### Starting the Server

```bash
npm run dev
```

This will start the Express server on `http://localhost:5000`.

### Environment Variables (Server)

Create a `.env` file in the `server/config` directory with the content in the `.env.example` file eg..

```plaintext
PORT=5000
JWT_SECRET=your_jwt_secret
```

## WebSocket Integration

WebSockets are used for real-time communication between the client and server. When a new message is sent, the server emits a WebSocket event that is broadcasted to all connected clients. On the client side, I use WebSocket listeners to update the message store managed by Zustand and play a notification sound.

<!-- ### Server WebSocket Implementation

```javascript
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("A new client connected!");

  ws.on("message", (message) => {
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
```

### Client WebSocket Implementation

In the React app, you can establish a WebSocket connection and handle incoming messages like this:

```javascript
import { useEffect } from "react";
import useStore from "./zustandStore"; // Zustand store for messages

const WebSocketComponent = () => {
  const { addMessage } = useStore(); // Zustand action

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = (event) => {
      const incomingMessage = JSON.parse(event.data);
      addMessage(incomingMessage);
      playNotificationSound();
    };

    return () => {
      ws.close();
    };
  }, [addMessage]);

  const playNotificationSound = () => {
    const audio = new Audio("/sounds/message-notification.mp3");
    audio.play();
  };

  return null;
};

export default WebSocketComponent;
```

### Zustand Setup for Messages

```javascript
import create from "zustand";

const useStore = create((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
}));

export default useStore;
``` -->

## Authentication Flow

- On login, the server generates a JWT token which is sent to the client and stored in LocalStorage.
- The token is attached to each API request using an Authorization header.
- On each request, the server verifies the token and processes the request if the token is valid.

<!-- ### Login Route (Backend)

```javascript
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check user credentials and generate JWT
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true });
  res.status(200).json({ message: "Login successful", token });
});
```

### Client Authentication

```javascript
import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Context API for auth

const loginUser = async (username, password) => {
  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("token", data.token);
    // Update Context API state
  }
};
``` -->

## Running the Full App

Once both client and server are running, the app will be accessible via:

- Frontend: `http://localhost:4000`
- Backend: `http://localhost:5000`

## Additional Scripts

- **Frontend**:
  - `npm run build`: Builds the production-ready app.
- **Backend**:
  - `npm run dev`: Starts the server in development mode.

## Conclusion

I have now set up the **I-CHAT** application with Vite, React, Tailwind, DaisyUI, Context API, Zustand, Node.js, Express, JWT, WebSockets, and audio notifications for incoming messages. This setup allows real-time messaging, secure authentication, and a fully functional chat interface.

---
