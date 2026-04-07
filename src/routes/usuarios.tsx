import { createFileRoute } from '@tanstack/react-router'
import Users from '../pages/Usuarios/Usuarios'

export const Route = createFileRoute('/usuarios')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Users />
    </>
  )
}
