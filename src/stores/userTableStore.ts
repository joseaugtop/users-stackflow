import { create } from "zustand";

type userTableStore = {
    email: string;
    setEmail: (email: string) => void;
}

export const userTableStore = create<userTableStore>((set) => ({
    email: '',
    setEmail: (state) => set({ email: state })
}))