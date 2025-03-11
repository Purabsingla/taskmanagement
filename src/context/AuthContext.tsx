import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface AuthContextType {
  user: User | null;
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface User {
  uid: string;
  email: string;
  [key: string]: any; // Allows additional user data
}
// AuthProvider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null); // Stores authenticated user info

  // Check if user is already logged in (Persist login using localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Signup Function
  const signup = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        password,
      });

      const newUser = { uid: response.data.uid, email };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser)); // Store user in localStorage

      return response.data;
    } catch (error: any) {
      console.error("Signup Error:", error.response?.data?.message);
    }
  };

  // Login Function
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const loggedInUser = {
        uid: response.data.uid,
        email,
        ...response.data.userData,
      };
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      return response.data;
    } catch (error: any) {
      console.error("Login Error:", error.response?.data?.message);
    }
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Using AuthContext
export const useAuth = () => useContext(AuthContext);
