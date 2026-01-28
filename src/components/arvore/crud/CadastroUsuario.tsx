"use client";
import { v4 as uuidv4 } from 'uuid';
import ListaUsuarios from "./ListaUsuarios";
import todosUsuarios from "../../../data/constants/usuarios";
import Usuario from "@/src/data/model/Usuario";
import { useState } from "react";
import FormUsuario from "./FormUsario";

export default function CadastroUsuario(){
    
    const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(null);
    const [usuarios, setUsuarios] = useState<Usuario[]>(todosUsuarios);

    function removerUsuario(usuario: Usuario): void{
        const listaAtualizada = usuarios.filter((u) => u.id !== usuario.id);
        setUsuarios(listaAtualizada);
    }

    function selecionarUsuario(usuario: Partial<Usuario>): void {
        setUsuarioAtual(usuario);
        console.log(usuario);
    }

    function cancelarEdicao(): void {
        setUsuarioAtual(null);
    }

    function salvarUsuario() {
       const usuarioExistente = usuarios.find((u) => u.id === usuarioAtual?.id);
       if(usuarioExistente){
            const listaAtualizada = usuarios.map((u) => { 
                return u.id === usuarioAtual?.id ? usuarioAtual : u 
            }
            );
            setUsuarios(listaAtualizada as Usuario[]);
       }else{
        setUsuarios([...usuarios, usuarioAtual as Usuario]);
       }
       setUsuarioAtual(null);
    }

    return (
        <div className="flex flex-col gap-5">

            <button className="botao verde self-end"
                    onClick={() => selecionarUsuario({ id:uuidv4() })}>
                        Novo Usuario
            </button>

            {usuarioAtual ? <FormUsuario
                usuario={usuarioAtual}
                cancelar={cancelarEdicao}
                salvar={salvarUsuario}
                alterarUsuario={setUsuarioAtual} /> :
            <ListaUsuarios
                usuarios={usuarios}
                removerUsuario={removerUsuario}
                selecionarUsuario={selecionarUsuario}/> }
        </div>
)}