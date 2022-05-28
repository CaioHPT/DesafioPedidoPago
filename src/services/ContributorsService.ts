import { api } from "../api";

export interface Contributor {
    agent_id: number;
    name: string;
    image: string;
    role: string;
    status: string;
    branch: string;
    department: string;
}


interface Contributors {
    items: Contributor[];
}

interface ContributorDetails {
    agent: {
        id: number,
        name: string,
        email: string,
        phone: {
            ddd: string,
            ddi: string,
            number: string
        },
        document: {
            type: string
            number: string
        },
        birth_date: string,
        image: string,
        department: string,
        branch: string,
        role: string,
        status: string
    }
}

export async function getContributors() {
    return (await api.get<Contributors>('/agents')).data
}

export async function getContributorById(Id: number) {
    return (await api.get<ContributorDetails>(`/agent/${Id}`)).data

}