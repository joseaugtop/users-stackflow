import './Home.css'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'
import UserContainer from '../../components/UserContainer/UserContainer'
import { useQuery } from '@tanstack/react-query'
import { createUser, getAllUsers } from '../../services/userService'
import { Spinner } from '@/components/ui/spinner'
import { User } from '@/types/User'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import UserContainerSkeleton from '@/components/UserContainer/UserContainerSkeleton'

function Home() {

  const { isPending, error, data } = useQuery({
    queryKey: ['usersData'],
    queryFn: () =>
      getAllUsers()
  })


  if (error) return 'An error has occurred: ' + error.message


  return (
    <>
      <h1 className='flex my-1 mx-5 text-4xl'>Criar Usuário</h1>
      <CreateUserForm onSubmit={createUser} />
      <hr className=' border-gray-200 border my-5 shadow-2xl' />
      <h1 className='flex mx-5  text-4xl'>Lista de Usuários</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 my-5">
        {
          isPending ? (<>
            <UserContainerSkeleton cards={9} />

          </>) : (<>
            {data.map((user: User) => (
              <UserContainer key={user.id} user={user} />
            ))}
          </>)
        }

      </div>
    </>
  )
}

export default Home
