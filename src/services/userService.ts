import axiosClient from "../axiosClient/axiosClient";
import type { User } from "../types/User";

export const getUsers = async (pageIndex: number = 1) => {
    const res = await axiosClient.get("/users", {
        params: { _page: pageIndex + 1, _per_page: 10 },
    })
    return res.data
}


export const createUser = async (user: User) => {
    const res = await axiosClient.post<User>("/users", user)
    return res.data
}

export const updateUser = async (id: string, user: Partial<User>) => {
    const res = await axiosClient.put<User>(`/users/${id}`, user)
    return res.data
}

export const deleteUser = async (id: string) => {
    const res = await axiosClient.delete(`/users/${id}`)
    return res.data
}
