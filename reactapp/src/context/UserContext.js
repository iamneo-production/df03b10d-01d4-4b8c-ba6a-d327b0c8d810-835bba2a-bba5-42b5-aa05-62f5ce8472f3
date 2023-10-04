import { createContext, useContext, useMemo } from "react";

const UserContext = createContext(); 

export const useUser = () => {
    return useContext(UserContext);
}
export const UserProvider = ({ children}) => {
    const[isUserLoggeIn, setIsUserLoggedIn] = useState(false);

    const login = () => {
        setIsUserLoggedIn(true);
    }

    const logout = () => {
        setIsUserLoggedIn(false);
    }

    const userValue = useMemo( () => (
        {
            isUserLoggeIn, login, logout
        }
    ), [isUserLoggeIn]);

    return (
        <UserContext.Provider value={[isUserLoggeIn, login, logout]}>
            {children}
        </UserContext.Provider>
    )
}