import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextProvider {
    token: string | null
    setToken: (a: string) => void
}


const AuthContext = createContext<AuthContextProvider | null>(null);

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        localStorage.setItem("token", token);
    } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("Only use useAuth inside an AuthProvider");
    }

    return context
}

export default AuthProvider;
