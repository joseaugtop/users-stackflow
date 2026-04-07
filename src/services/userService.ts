import axiosClient from "../axiosClient/axiosClient";
import type { User } from "../types/User";

export const getUsers = async () => {
    const res = await axiosClient.get<User[]>("/users")
    return res.data
}

export const createUser = async (user: Omit<User, "id">) => {
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
