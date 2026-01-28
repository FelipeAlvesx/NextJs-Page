import Pai from "@/src/components/arvore/direta/Pai";
import Titulo from "@/src/components/template/Titulo";

export default function ComunicacaoDireta(){
    return (
        <div>
            <Titulo 
                principal="Texto Principal..."
                secundario="texto secundario..."
            />
            <Pai 
                nome="Vitor"
                sobrenome="Akita"/>
        </div>
    )
}