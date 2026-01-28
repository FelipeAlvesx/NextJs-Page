
import OficialLogo from "./OficialLogo";

interface CabecalhoProps {

}


export default function Cabecalho(props: CabecalhoProps){
    return (
        <header className="flex items-center h-20 border-b border-zinc-800 px-6">
            <OficialLogo />
        </header>
    )
}