import type { User } from "../../types/User"

interface UserContainerProps {
    user: User
}

export default function UserContainer({ user }: UserContainerProps) {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-xl">
                <div className="bg-blue-900 items-center justify-start p-4 m-2 rounded-3xl text-white min-w-110 shadow-xl">
                    <div>
                        <span className="font-bold">Nome:</span> <span className="capitalize">{user.username}</span>
                    </div>
                    <div>
                        <span className="font-bold">Idade:</span> {user.age}
                    </div>
                    <div>
                        <span className="font-bold">Email:</span> {user.email}
                    </div>
                </div>
            </div>
        </>
    )
}