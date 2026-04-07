import Button from "../Button/Button"
import { useForm } from "@tanstack/react-form"
import z from "zod"
export default function CreateUserForm() {

    const formSchema = z.object({
        name: z.string().min(1, "Nome precisa ter pelo menos um caracter"),
        email: z.email("Email inválido"),
        age: z.number("Idade deve ser um número maior que zero").min(1, "Idade muito pequena"),
    })

    const { Field, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            age: 0,
        },
        onSubmit: async ({ value }) => {
            console.log(value)
        },
        validators: {
            onSubmit: formSchema,
            onBlur: formSchema,
        }
    })
    return (
        <>
            <div className="flex items-center justify-center">
                <form
                    className="bg-blue-900 items-center justify-start p-4 m-2 rounded-xl text-white w-full max-w-lg shadow-xl"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <h1 className="text-center text-2xl">Cadastro de Usuários</h1>
                    <div className="flex flex-col my-3 gap-3">
                        <Field name="name">
                            {(field) => {
                                const { errors } = field.state.meta
                                return (
                                    <div className="flex flex-col">
                                        <input
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            onBlur={field.handleBlur}
                                            placeholder="Nome"
                                            className="bg-white/10 rounded-3xl p-2" />
                                        {
                                            errors.length > 0 && (
                                                <span className="text-red-500">{errors[0]?.message}</span>
                                            )
                                        }
                                    </div>
                                )
                            }}
                        </Field>
                        <Field name="age">
                            {(field) => {
                                const { errors } = field.state.meta
                                return (
                                    <div className="flex flex-col">
                                        <input
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(Number(e.target.value))}
                                            onBlur={field.handleBlur}
                                            placeholder="Idade"
                                            className="bg-white/10 rounded-3xl p-2" />
                                        {
                                            errors.length > 0 && (
                                                <span className="text-red-500">{errors[0]?.message}</span>
                                            )
                                        }
                                    </div>
                                )
                            }}
                        </Field>

                        <Field name="email">
                            {(field) => {
                                const { errors } = field.state.meta
                                return (
                                    <div className="flex flex-col">
                                        <input
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            onBlur={field.handleBlur}
                                            placeholder="Email"
                                            className="bg-white/10 rounded-3xl p-2" />
                                        {
                                            errors.length > 0 && (
                                                <span className="text-red-500">{errors[0]?.message}</span>
                                            )
                                        }
                                    </div>
                                )
                            }}
                        </Field>

                        <Button type="submit" className="text-lg font-bold p-2 justify-center items-center bg-blue-400 hover:bg-blue-500 transition-colors duration-300 ease-in-out">Cadastrar</Button>
                    </div>
                </form>
            </div >
        </>
    )
}