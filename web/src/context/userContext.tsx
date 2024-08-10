import { createContext, ReactNode, useEffect, useState } from "react";

import { siriusFinisAPI } from "../api/siriusFinis";

interface IAuthContextType {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContextType);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [token, setToken] = useState<string>('');

  const login = async (email: string, password: string) => {
    try {
      const response = await siriusFinisAPI.post("/auth", { email, password });
      const token = response.data.token;

      setToken(token);

      siriusFinisAPI.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error('Login failed', error);

      throw error;
    }
  };

  const logout = () => {
    setToken('');
    delete siriusFinisAPI.defaults.headers.Authorization;
  };

  const isAuthenticated = () => {
    return token !== '';
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem('authToken');

    if (storedToken) {
      setToken(storedToken);

      siriusFinisAPI.defaults.headers.Authorization = `Bearer ${storedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };