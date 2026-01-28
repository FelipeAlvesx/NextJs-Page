import Approved from "@/src/components/exercicio/Approved";


export default function exampleJsx(){
    const title = <h1>Criando Componentes</h1>;
    const listaAprovados = ["Gabriel", "Pedro", "Caio", "Jean"]
    const item = 20;
    const result = item % 2 == 0 ? (
        <span className="text-green-400 text-sm">Par</span>
    ) : (
        <span className="text-red-500 text-sm">impar</span>
    ); 

    function renderizaCirculo(texto: string){
        return (
            <div className="flex justify-center items-center h-10 w-10
            rounded-full bg-red-500 text-sm">
            {texto}
            </div>
        )
    }

    return (
        <div className="container">
            <div className="exemplo">
                {title}
                <div className="conteudo">
                    <div className="flex flex-col gap-3">
                        {listaAprovados.map(name => {
                            return <Approved key={name} name={name}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}