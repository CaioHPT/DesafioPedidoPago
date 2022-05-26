import { api } from "../api";

export interface Role{
    name: string;
    departament: string;
    agents_quantity: number
}

interface Roles {
    roles: Role[]
}

export async function getRoles(){
    return (await api.get<Roles>('/roles')).data
}