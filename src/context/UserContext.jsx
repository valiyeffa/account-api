import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const endPoint = 'http://localhost:3010';
    const header = {
        headers: {
            'matrix-access': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76'
        }
    }
    return <UserContext.Provider value={[endPoint, header]}>{children}</UserContext.Provider>
}