import React, { createContext, useContext, useState , useEffect } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const headersJson = {
    "Content-Type": "application/json",
  };
  useEffect(() => {
    let localStorageUser = localStorage.getItem("user");
    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser));
    }
    
  }, []);
  
  const login =  (userLog) => {
    const url = process.env.REACT_APP_BACKEND_URL + "/auth/login";
    let data = JSON.stringify(userLog);
    
      return  fetch(url, {
        method: "POST",
        headers: headersJson,
        body: data,
      });

  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const signup = (userLog) => {
    const url = process.env.REACT_APP_BACKEND_URL + "/auth/register";
    let data = JSON.stringify(userLog);
     return fetch(url, {
      method: "POST",
      headers: headersJson,
      body: data,
    })
      
  };
  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
