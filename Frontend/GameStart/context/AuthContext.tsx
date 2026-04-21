// context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type OrderItem = {
  name: string;
  qty: number;
  price?: number;
};

export type Order = {
  id: string;
  date: string;
  items: OrderItem[];
  total: string;
};

export type User = {
  id: string;
  email: string;
  first: string;
  last: string;
  orders?: Order[];
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return ctx;
}