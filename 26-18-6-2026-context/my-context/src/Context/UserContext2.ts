import { createContext, useState } from "react";

interface UserContextType2 {
    name2: string;
    isLoggedIn2: boolean;
    login2: () => void;
    logout2: () => void;
    editName2: (inputName: string) => void;
}

const UserContext2 = createContext<UserContextType2>(
    {} as UserContextType2
);

export function UserProvider2({ children }: any) {

    const [isLoggedIn2, setIsLoggedIn2] = useState(false);
    const [name2, setName2] = useState("");

    function login2() {
        setIsLoggedIn2(true);
    }

    function logout2() {
        setIsLoggedIn2(false);
    }

    function editName2(inputName: string) {
        setName2(inputName);
    }

    return (
        <UserContext2.Provider
            value={{
                name2,
                isLoggedIn2,
                login2,
                logout2,
                editName2
            }}
        >
            {children}
        </UserContext2.Provider>
    );
}

export default UserContext2;