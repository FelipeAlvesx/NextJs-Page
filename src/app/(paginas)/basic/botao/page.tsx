"use client"
import Titulo from "@/src/components/template/Titulo";

export default function BotaoPage(){
    function execute(){
        alert("Running!");
    }
    return (
        <div>
            <Titulo 
                principal="Botao Page"
                secundario="Utilizando buttons com react"/>
            <div className="py-7">
                <button className="botao azul" onClick={execute}>Executar</button>
            </div>
        </div>
    )
}