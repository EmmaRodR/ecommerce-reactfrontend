import { createContext, useContext, useEffect, useState } from "react";

export type AuthUser = {
    localDateTime: string,
    username: string;
    id: number;
    email: string;
    jwt: string;
    role: string;
    tokenExpired: boolean;
}

export type UserContextType = {
    user: AuthUser | null;
    setUser: (user: AuthUser | null) => void;
    loading: boolean;
}

type UserContextProviderType = {
    children: React.ReactNode;
}


export const UserContext = createContext({} as UserContextType);


export const UserContextProvider = ({ children }: UserContextProviderType) => {

    const [user,setUser] = useState<AuthUser | null>(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
      
      setLoading(true);

      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, []);

  return <UserContext.Provider value={{user,setUser,loading}}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};