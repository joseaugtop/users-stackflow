import { create } from "zustand"
import type { User } from "../types/User"
import * as userService from "../services/userService";

export type UserStore = {
    users: User[];
    setUsers: (users: User[]) => void;
    addUser: (user: Omit<User, "id">) => Promise<void>;
    updateUser: (id: string, user: Partial<User>) => Promise<void>;
    deleteUser: (id: string) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => {
    userService.getUsers().then(({ data }) => set({ users: data }))

    return {
        users: [],

        setUsers: (users) => set({ users }),

        addUser: async (user) => {
            const { data } = await userService.createUser(user);
            set({ users: [...get().users, data] });
        },

        updateUser: async (id, user) => {
            const { data } = await userService.updateUser(id, user);
            set({ users: get().users.map((u) => (u.id === id ? data : u)) });
        },

        deleteUser: async (id) => {
            await userService.deleteUser(id);
            set({ users: get().users.filter((u) => u.id !== id) });
        },
    }
})