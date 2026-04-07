import './Home.css'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'
import UserContainer from '../../components/UserContainer/UserContainer'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../../services/userService'
import { Spinner } from '@/components/ui/spinner'

function Home() {

  const { isPending, error, data } = useQuery({
    queryKey: ['usersData'],
    queryFn: () =>
      getUsers()
  })


  if (error) return 'An error has occurred: ' + error.message


  return (
    <>
      <h1 className='flex mx-5 text-white text-4xl'>Criar Usuário</h1>
      <CreateUserForm />
      <hr className=' border-blue-600 border my-5 shadow-2xl' />
      <h1 className='flex mx-5 text-white text-4xl'>Lista de Usuários</h1>
      {isPending ? (
        <div><Spinner /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 my-5">
          {data.map((user) => (
            <UserContainer key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  )
}

export default Home
