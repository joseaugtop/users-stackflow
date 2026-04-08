import type { User } from "@/types/User";
import Button from "../Button/Button"
import { useForm } from "@tanstack/react-form"
import z from "zod"
import TextField from "./TextField";

interface CreateUserFormProps {
    onSubmit: (user: User) => void | Promise<unknown>;
}

export default function CreateUserForm({ onSubmit }: CreateUserFormProps) {

    const formSchema = z.object({
        username: z.string().min(1, "Nome precisa ter pelo menos um caracter"),
        email: z.string().email("Email inválido"),
        age: z.number("Idade deve ser um número maior que zero").min(1, "Idade muito pequena"),
    })

    const { Field, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            email: '',
            age: 0,
        },
        onSubmit: async ({ value }) => {
            await onSubmit({
                ...value,
                id: crypto.randomUUID(),
            })
        },
        validators: {
            onSubmit: formSchema,
            onBlur: formSchema,
        }
    })
    return (
        <>
            <div className="flex items-center justify-center">
                <div
                    className="bg-blue-900 items-center justify-start p-4 m-2 rounded-xl text-white w-full max-w-lg shadow-xl"
                >
                    <h1 className="text-center text-2xl">Cadastro de Usuários</h1>
                    <div className="flex flex-col my-3 gap-3">
                        <Field name="username">
                            {
                                (field) =>
                                    <TextField field={field} placeholder="Nome" type="string" />
                            }
                        </Field>
                        <Field name="age">
                            {
                                (field) =>
                                    <TextField field={field} placeholder="Idade" type="number" />
                            }
                        </Field>

                        <Field name="email">
                            {
                                (field) =>
                                    <TextField field={field} placeholder="Email" />
                            }
                        </Field>

                        <Button
                            onClick={() => void handleSubmit()}
                            className="text-lg font-bold p-2 justify-center items-center
                         bg-blue-400 hover:bg-blue-500 transition-colors duration-300 ease-in-out">
                            Cadastrar
                        </Button>
                    </div>
                </div>
            </div >
        </>
    )
}