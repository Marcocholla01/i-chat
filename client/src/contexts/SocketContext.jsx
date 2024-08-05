import React, { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuthContext } from "./AuthContext";
import { SERVER_URL } from "../config/config";

export const SocketContext = createContext(null);

export const SocketContextProvider = ({ children }) => {
  const { authUser } = useAuthContext();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser) {
      const socket = io(`${SERVER_URL}`, {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      // clean up func
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
