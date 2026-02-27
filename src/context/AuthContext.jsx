import { createContext, useState} from "react";
export const AuthContext = createContext()

export function AuthProvider ({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    const value = {
        isLoggedIn,
        handleLogin,
        handleLogout
    }

    return <AuthContext value={value}>
        {children}
    </AuthContext>
}