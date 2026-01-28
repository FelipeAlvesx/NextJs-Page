import { IconHeart } from "@tabler/icons-react";

export default function Rodape(){
    return (
        <footer className="flex items-center justify-end gap-1.5 text-sm
             text-zinc-300 h-16 border-t border-zinc-800 px-6">
            <span>Feito Com</span>
            <IconHeart size={14} className="text-red-400" />
            <span> por FORMACAO.DEV</span>
        </footer>
    )
}