import { createContext, ReactNode, useState } from "react";

interface TabSelectedContextProps{
    children: ReactNode
}

interface TabSelectedProps {
    nameTabSelected: string,
    setNameTabSelected: (nameTabSelected: string) => void
}

export const TabSelectedContext = createContext({} as TabSelectedProps)

export function TabSelectedProvider({ children } : TabSelectedContextProps){

    const [nameTabSelected, setNameTabSelected] = useState("Colaboradores")

    return(
        <TabSelectedContext.Provider value={{nameTabSelected, setNameTabSelected}}>
            {children}
        </TabSelectedContext.Provider>
    )
}