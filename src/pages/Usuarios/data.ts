import { getUsers } from "@/services/userService";
import type { User } from "@/types/User";
import { useQuery } from "@tanstack/react-query";

const { data } = useQuery({
    queryKey: ['usersData'],
    queryFn: () =>
        getUsers()
})


export const users: User[] = data !== undefined ? data : []