import Button from "../Button/Button"

export default function CreateUserForm() {

    return (
        <>
            <div className="flex items-center justify-center">
                <form className="bg-blue-900 items-center justify-start p-4 m-2 rounded-xl text-white min-w-110 shadow-xl">
                    <h1 className="text-center text-2xl">Cadastro de Usuários</h1>
                    <div className="flex flex-col my-3 gap-3">
                        <input type="text" name="name" placeholder="Nome" className="bg-white/10 rounded-3xl p-2" />
                        <input type="text" name="age" placeholder="Idade" className="bg-white/10 rounded-3xl p-2" onChange={(e) => {
                            const onlyNumbers = e.target.value.replace(/\D/g, "")
                            e.target.value = onlyNumbers
                        }} />
                        <input type="email" name="email" placeholder="Email" className="bg-white/10 rounded-3xl p-2" />
                        <Button className="text-lg font-bold p-2 justify-center items-center bg-blue-400 hover:bg-blue-500 transition-colors duration-300 ease-in-out">Cadastrar</Button>
                    </div>
                </form>
            </div >
        </>
    )
}