import { useQuery } from '@tanstack/react-query'
import type { User } from '../../types/User'

export default function Example() {
    const { isPending, error, data } = useQuery({
        queryKey: ['exampleData'],
        queryFn: () =>
            fetch('http://localhost:3000/users').then((res) =>
                res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className=''>
            {data.map((user: User) => (
                <div key={user.id}>
                    <p>{user.username}</p>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}
