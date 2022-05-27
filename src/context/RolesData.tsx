import { createContext, ReactNode, useEffect, useState } from "react";
import { getRoles, Role } from "../services/RolesService";

interface RolesDataContextProps{
    children: ReactNode
}

interface RolesDataProps{
    rolesData: Role[]
}

export const RolesDataContext = createContext({} as RolesDataProps[])

export function RolesDataProvider({ children } : RolesDataContextProps){

    const [rolesData, setRolesData] = useState<Role[]>([])

    useEffect(() => {
        getRoles().then((response) => setRolesData(response.roles))
    }, [])

    return(
        <RolesDataContext.Provider value={[{rolesData}]}>
            {children}
        </RolesDataContext.Provider>
    )
}