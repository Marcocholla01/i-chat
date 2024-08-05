import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuthContext } from "./AuthContext";
import { SERVER_URL } from "../config/config";

export const SocketContext = createContext(null);

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const { authUser } = useAuthContext();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser) {
      const socket = io(`${SERVER_URL}`, {
        query: {
          userId: authUser.userId,
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to events can be used on both server and client side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // clean up func
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
