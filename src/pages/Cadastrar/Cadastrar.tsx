import { createUser } from '@/services/userService'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'

export default function Cadastrar() {
    return (
        <div className='my-12'>
            <CreateUserForm onSubmit={createUser} />
        </div>
    )
}
