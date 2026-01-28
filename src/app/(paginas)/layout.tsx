import Pagina from "@/src/components/template/Pagina";

export default function layout(props: any){
    return (
        <Pagina>
            {props.children}
        </Pagina> 
    )
}