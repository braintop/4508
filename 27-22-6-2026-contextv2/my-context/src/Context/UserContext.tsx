import { createContext, useState } from "react";

interface UserContextType {
    name: string;
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    editName: (inputName: string) => void;
}

const UserContext = createContext<UserContextType>(
    {} as UserContextType
);

export function UserProvider({ children }: any) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    function editName(inputName: string) {
        setName(inputName);
    }

    return (
        <UserContext.Provider
            value={{
                name,
                isLoggedIn,
                login,
                logout,
                editName
            }}
        >
            {children}
        </UserContext.Provider>
    );}

export default UserContext;