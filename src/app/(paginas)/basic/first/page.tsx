export default function firstComponent(){
    return (
    <div className="flex flex-col gap-3 p-8">
        
            <h1 className="text-3xl font-black">First Component</h1>
            <p className="text-sm text-1xl font-extrabold text-zinc-500 ">Texto aleatorio</p>
        <div>
            <span className="text-2xl ">conteudo</span>
        </div>
        <button className="butao azul self-start">Save</button>

        <div>
            <h1>{Math.ceil(Math.random())}</h1>
        </div>
    </div>
    )
}
