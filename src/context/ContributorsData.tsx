import { createContext, ReactNode, useEffect, useState } from "react";
import { Contributor, getContributors } from "../services/ContributorsService";

interface ContributorsDataContextProps{
    children: ReactNode
}


interface ContributorDataProps {
    contributorsData: Contributor[],
}

export const ContributorsDataContext = createContext<ContributorDataProps[]>([])

export function ContributorsDataProvider({children} : ContributorsDataContextProps){

    const [contributorsData, setContributorsData] = useState<Contributor[]>([])


    useEffect(() => {
        getContributors().then((response) => setContributorsData(response.items))
    }, [])

    return(
        <ContributorsDataContext.Provider value={[{contributorsData}]}>
            {children}
        </ContributorsDataContext.Provider>
    )
}