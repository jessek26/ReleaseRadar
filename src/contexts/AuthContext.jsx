import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context; 
}

// auth provider component
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('authUser');
        
        if (storedToken && storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const isAuthenticated = user !== null;

    const login = (username, password, role = 'regular') => {
        const mockJWT = btoa(JSON.stringify({ username, role }));
        const mockToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${mockJWT}.mock_signature`;

        const userData = {
            username: username,
            role: role,
            token: mockToken
        };
          
        // Store in state
        setUser(userData);
          
        // Store BOTH token and user in localStorage so they survive a page refresh
        localStorage.setItem('authToken', mockToken);
        localStorage.setItem('authUser', JSON.stringify(userData));
          
        return userData;
    };

    const register = (username, password) => {
        return login(username, password);
    };
      
    // logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
    };
      
    // Check if user has a specific role
    const hasRole = (role) => {
        return user?.role === role;
    };
      
    // Context value that will be available to all children
    const value = {
        user,
        isAuthenticated,
        login,
        register,
        logout,
        hasRole
    };
      
    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}