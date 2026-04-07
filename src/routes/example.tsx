import { createFileRoute } from '@tanstack/react-router'
import Example from '../pages/Example/Example'

export const Route = createFileRoute('/example')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Example />
}
