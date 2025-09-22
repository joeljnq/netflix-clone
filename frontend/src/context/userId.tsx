import React ,{ createContext, ReactNode, useContext, useState } from "react";

interface userIdContextType {
    userId: number | null;
    setUserId: (value: number) => void;
}
interface userIdProviderProps {
    children: ReactNode;
}

const userIdContext = createContext<userIdContextType | undefined>(undefined);
 const UserIdProvider:React.FC<userIdProviderProps> = ({children}) => {
    const [userId, setUserId] = useState<number | null>(null);
    return (
        <userIdContext.Provider value={{userId, setUserId}}>
            {children}
        </userIdContext.Provider>
    )
}

//hook

 const useUserId = () => {
    const context = useContext(userIdContext);
    if(context === undefined){
        throw new Error('useUserId must be used within a userIdProvider');
    }
    return context;
}

export {UserIdProvider, useUserId};