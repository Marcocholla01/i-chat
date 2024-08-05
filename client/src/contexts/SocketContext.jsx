import React, { createContext, useEffect, useState } from "react";

export const SocketContext = createContext(null);

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => { }, []);

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>;
};
