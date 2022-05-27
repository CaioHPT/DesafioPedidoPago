import { createContext, ReactNode, useEffect, useState } from "react";
import { Contributor, getContributors } from "../services/ContributorsService";

interface ContributorsDataContextProps{
    children: ReactNode
}


interface ContributorDataProps {
    contributorsData: Contributor[],
    contributorsDataFilter: Contributor[],
}

export const ContributorsDataContext = createContext<ContributorDataProps[]>([])

export function ContributorsDataProvider({children} : ContributorsDataContextProps){

    const [contributorsData, setContributorsData] = useState<Contributor[]>([])
    const [contributorsDataFilter, setContributorsDataFilter] = useState<Contributor[]>([])


    useEffect(() => {
        getContributors().then((response) => setContributorsData(response.items))
        setContributorsDataFilter(contributorsData.slice(0, 5))
    }, [])

    return(
        <ContributorsDataContext.Provider value={[{contributorsData, contributorsDataFilter}]}>
            {children}
        </ContributorsDataContext.Provider>
    )
}