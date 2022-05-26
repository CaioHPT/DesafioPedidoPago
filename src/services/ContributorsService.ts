import { api } from "../api";

export interface Contributor{
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

export async function getContributors() {
    return (await api.get<Contributors>('/agents')).data
}