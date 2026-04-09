import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { NuqsAdapter } from 'nuqs/adapters/tanstack-router'
import { SkeletonTheme } from 'react-loading-skeleton';
import { format, setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
setDefaultOptions({ locale: ptBR })

export const Route = createRootRoute({
  component: RootComponent,
})

const queryClient = new QueryClient()

function RootComponent() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <div className='min-h-screen'>
          <div className='flex gap-2 p-2 text-xl text-white bg-blue-900 justify-between'>
            <div className='flex gap-2'>
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
            <div className='capitalize'>{format(new Date(), "PPPP")}</div>
          </div>
          <SkeletonTheme baseColor="#f7f7f7" highlightColor="#f2f2f2">

            <NuqsAdapter  >
              <Outlet />
            </NuqsAdapter>
          </SkeletonTheme>

        </div>
      </QueryClientProvider>
    </React.Fragment>
  )
}
