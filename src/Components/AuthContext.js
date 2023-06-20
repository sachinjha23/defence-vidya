import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    const login = () => {
        setIsAuthenticated(true);
    };

    const setAuthToken = (newToken) => {
        setToken(newToken);
        localStorage.setItem('authToken', JSON.stringify(newToken));
    };

    const clearAuthToken = () => {
        setToken(null);
        localStorage.removeItem('authToken');
    };
    const logout = () => {
        setIsAuthenticated(false);
    };
    useEffect(() => {
        const verifyToken = JSON.parse(localStorage.getItem('authToken'));
        if (verifyToken && verifyToken.token) {
            setIsAuthenticated(true);
            setToken(verifyToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, token, setAuthToken, clearAuthToken, token }}>
            {children}
        </AuthContext.Provider>
    );
};
