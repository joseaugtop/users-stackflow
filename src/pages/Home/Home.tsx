import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './Home.css'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'
import type { User } from '../../types/User'
import UserContainer from '../../components/UserContainer/UserContainer'

function App() {
  const queryClient = new QueryClient()
  const users: User[] = [
    {
      username: "ana",
      age: 19,
      email: "ana@email.com"
    },
    {
      username: "bruno",
      age: 25,
      email: "bruno@email.com"
    },
    {
      username: "carla",
      age: 22,
      email: "carla@email.com"
    },
    {
      username: "diego",
      age: 30,
      email: "diego@email.com"
    },
    {
      username: "elaine",
      age: 27,
      email: "elaine@email.com"
    }
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-blue-700 min-h-screen'>
        <CreateUserForm />
        {users.map(user => (
          <UserContainer key={user.username} user={user} />
        ))}
      </div>
    </QueryClientProvider>
  )
}

export default App
