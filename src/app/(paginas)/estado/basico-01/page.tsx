import Contador from "@/src/components/estado/Contador";
import Titulo from "@/src/components/template/Titulo";

export default function Basico01Page(){
    return (
        <div className="flex flex-col gap-7" >
            <Titulo 
                principal="Estado - Exemplo 01"
                secundario="Contador com estado"
                />
                <div className="flex flec-col gap-10">
                    <Contador />
                    <Contador startValue={1000} />
                </div>
        </div>
    )
}