import type { User } from "../../types/User"

interface UserContainerProps {
    user: User
}

export default function UserContainer({ user }: UserContainerProps) {
    return (
        <div className="bg-blue-900 p-4 rounded-xl text-white text-xl shadow-xl space-y-2">

            <div className="flex gap-2">
                <span className="font-bold">Nome:</span>
                <span className="capitalize">{user.username}</span>
            </div>

            <div className="flex gap-2">
                <span className="font-bold">Idade:</span>
                <span>{user.age}</span>
            </div>

            <div className="flex gap-2">
                <span className="font-bold">Email:</span>
                <span>{user.email}</span>
            </div>

        </div>
    )
}