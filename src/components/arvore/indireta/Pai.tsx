"use client"
import { useState } from "react";
import Filho from "./Filho";

export default function Pai(){

    const [response, setResponse] = useState("???")

    function getResponse(option: string): void{
        setResponse(option);
    }

    return (
        <div>
            <span className="text-3xl font-bold">Quem Descobriu o Brasil?</span>
            <div className="flex gap-2 text-lg">
                <span className="text-zinc-500">Resposta:</span>
                <span className="font-semibold text-zinc-300">{response}</span>
            </div>
            <div className="py-7">
                <Filho options={["Colombo", "Pedro Alvares Cabral", "Indios"]} onSelect={getResponse}/>
            </div>
        </div> 
    )
}