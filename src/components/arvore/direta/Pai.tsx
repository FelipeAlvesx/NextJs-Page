import Filho from "./Filho";

export interface PaiProps {
    nome: string;
    sobrenome: string;
}

export default function Pai(props: PaiProps){
    return (
        <div>
            <h3 className="text-xl font-bold py-2">{props.nome} {props.sobrenome}</h3>
            <div className="py-6"></div>
            <Filho nome="Felipe" sobrenome={props.sobrenome}/>
            <Filho nome="Marcos" sobrenome={props.sobrenome}/>
        </div>
    )
}