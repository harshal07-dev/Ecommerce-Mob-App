// AuthContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  user: any;
  loading: boolean;
  signIn: (newUser: any) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}


interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null); // Replace with your actual auth state (e.g., token)
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // Simulate async auth check (replace with real logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading for 500ms
    return () => clearTimeout(timer);
  }, []);

  const value: AuthContextType = {
    user,
    loading,
    signIn: (newUser: any) => setUser(newUser),
    signOut: () => setUser(null),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}