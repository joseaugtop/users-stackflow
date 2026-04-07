import type { User } from "../../types/User"

interface UserContainerProps {
    user: User
}

export default function UserContainer({ user }: UserContainerProps) {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-xl mx-10">
                <div className="bg-blue-900 items-center justify-start p-4 my-2 rounded-3xl mx-5 text-white w-full shadow-xl">
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