import CadastroUsuario from "@/src/components/arvore/crud/CadastroUsuario";
import Titulo from "@/src/components/template/Titulo";


export default function page(){ 
    return (
            <div className="flex flex-col gap-5">
                 <Titulo 
                    principal="Cadastro" 
                    secundario="Cadastro de Usuarios"/>
                
                <CadastroUsuario />
            </div>
    )
}