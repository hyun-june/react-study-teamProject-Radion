// Context stores the user information that can be shared across components
import React, { createContext, useState, useEffect } from "react";

// Create a UserContext
export const UserContext = createContext(null);

// UserContextProvider component to wrap your app
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Context value that includes user and a method to set user
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
