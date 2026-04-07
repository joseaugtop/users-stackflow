import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const Route = createRootRoute({
  component: RootComponent,
})

const queryClient = new QueryClient()

function RootComponent() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <div className='bg-blue-700 min-h-screen'>
          <div className='flex gap-2 p-2 text-xl text-white bg-blue-900'>
            <Link to='/' className='[&.active]:font-bold [&.active]:uppercase'>
              Home
            </Link>
            <Link to='/cadastrar' className='[&.active]:font-bold [&.active]:uppercase'>
              Cadastrar
            </Link>
            <Link to='/usuarios' className='[&.active]:font-bold [&.active]:uppercase'>
              Usuários
            </Link>
            <Link to='/example' className='[&.active]:font-bold [&.active]:uppercase'>
              Example
            </Link>
          </div>

          <Outlet />
        </div>
      </QueryClientProvider>
    </React.Fragment>
  )
}
