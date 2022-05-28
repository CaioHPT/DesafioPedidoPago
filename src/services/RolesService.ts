import { api } from "../api";

export interface Role{
    name: string;
    departament: string;
    agents_quantity: number
}

interface Roles {
    roles: Role[]
}

export interface GrouRoles{
    role: string;
    permissions: string[]
}

export interface RoleDetails{
    role: {
        name: string
        department: string
        grouprules: GrouRoles[]
    }
}

export async function getRoles(){
    return (await api.get<Roles>('/roles')).data
}

export async function getRolesById(id:number){
    return (await api.get<RoleDetails>(`/role/${id}`)).data
}