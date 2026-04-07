import { createFileRoute } from '@tanstack/react-router'
import Cadastrar from '../pages/Cadastrar/Cadastrar'

export const Route = createFileRoute('/cadastrar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Cadastrar />
}
