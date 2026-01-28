import Pai from "@/src/components/arvore/indireta/Pai";
import Titulo from "@/src/components/template/Titulo";

export default function ComunicacaoIndiretaPage(){ 
    return (
        <div>
            <Titulo 
                principal="Comunicação Indireta"
                secundario="Aula sobre comunicacao indireta entre componentes"/>
            <div className="flex flex-col py-7" >
                <Pai />
            </div>
        </div>
    )
}