import { createContext, ReactNode, useEffect, useState } from "react";

import { siriusFinisAPI } from "../api/siriusFinis";

interface ICreateAccount {
  name: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IAuthContextType {
  token: string;
  login: ({ email, password }: ILogin) => Promise<void>;
  setToken: (value: string) => void; 
  logout: () => void;
  isAuthenticated: () => boolean;
  createAccount: ({ name, email, password }: ICreateAccount) => Promise<void>;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContextType);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [token, setToken] = useState<string>('');

  const login = async ({ email, password }: ILogin) => {
    try {
      const response = await siriusFinisAPI.post("/auth/sign-in", { email, password });
      const token = response.data.token;

      setToken(token);
      
      sessionStorage.setItem("@sirius-fins:token", token);
      siriusFinisAPI.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error('Login failed', error);

      throw new Error("Email/password incorrect!");
    }
  };

  const logout = () => {
    setToken('');

    delete siriusFinisAPI.defaults.headers.Authorization;
  };

  const isAuthenticated = () => {
    const storedToken = sessionStorage.getItem("@sirius-fins:token");

    if (storedToken) return true;

    return token !== '';
  };

  const createAccount = async ({ name, email, password }: ICreateAccount) => {
    const { data } = await siriusFinisAPI.post('/users', {
      name,
      email,
      password
    });

    if (data.error) throw new Error("Occured an error to create account!");
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("@sirius-fins:token");

    if (storedToken) {
      setToken(storedToken);

      siriusFinisAPI.defaults.headers.Authorization = `Bearer ${storedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        token,
        login, 
        logout, 
        setToken,
        isAuthenticated, 
        createAccount 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
