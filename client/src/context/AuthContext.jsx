import { useState } from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const setUserData = (userData) => {
        setUser(userData);
    }

    const removeUserData = () => {
        setUser(null)
    }

    return (
    <AuthContext.Provider value={{ user, setUserData, removeUserData }}>
        {children}
    </AuthContext.Provider>
    )
}