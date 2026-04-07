import { useQuery } from '@tanstack/react-query';
import UserContainer from '../../components/UserContainer/UserContainer';
import { getUsers } from '../../services/userService';
import { Skeleton } from 'boneyard-js/react'

export default function Users() {

    const { isPending, error, data } = useQuery({
        queryKey: ['usersData'],
        queryFn: () =>
            getUsers()
    })


    if (error) return 'An error has occurred: ' + error.message

    //depois vai ser uma tanstack table
    return (
        <Skeleton
            name='users-skeleton'
            loading={isPending}
            color="rgba(255,255,255,0.15)"
            className="min-h-36"
        >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 my-5">
                {data?.map((user) => (
                    <UserContainer key={user.id} user={user} />
                ))}
            </div>
        </Skeleton>
    )
}
