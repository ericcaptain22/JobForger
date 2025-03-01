import React, { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import API from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser(jwtDecode(token));
  }, []);

  const login = async (username, password) => {
    const response = await API.post("users/login/", { username, password });
    localStorage.setItem("token", response.data.access);
    setUser(jwtDecode(response.data.access));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
