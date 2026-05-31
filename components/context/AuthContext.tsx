"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  user: Record<string, unknown> | null;
  login: (userData: Record<string, unknown>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Record<string, unknown> | null>(null);

  const login = (userData: Record<string, unknown>) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
