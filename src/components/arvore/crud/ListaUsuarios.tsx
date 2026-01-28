"use client";
import Usuario from "@/src/data/model/Usuario"
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ListUsuariosProps {
    usuarios: Usuario[];
    selecionarUsuario: (usuario: Usuario) => void;
    removerUsuario: (usuario: Usuario) => void;
}

export default function ListaUsuarios(props: ListUsuariosProps): any {
    function renderizarUsuarios(usuario: Usuario){
        return (
            <div className="flex items-center px-6 py-3 rounded-md bg-zinc-900">
                <div className="flex-1 flex flex-col">
                    <span>{usuario.nome}</span>
                    <span className="text-sm text-zinc-400">{usuario.email}</span>
                </div>
                <div className="flex gap-2">
                    <button className="botao azul"
                            onClick={() => props.selecionarUsuario(usuario)}>
                        <IconEdit />
                    </button>
                    <button className="botao vermelho"
                            onClick={() => props.removerUsuario(usuario)}>
                        <IconTrash />
                    </button>
                </div>
            </div>
        )
    }

    return (    
        <ul className="flex flex-col gap-2">
            {props.usuarios.map((usuario) => {
                return <li key={usuario.id}>{renderizarUsuarios(usuario)}</li>
            }
            )}
        </ul>
    )
}

