export interface ApprovedProps {
   name: string;
}

export default function Approved(props: ApprovedProps){
   const name = "Felipe"
   return (
      <div className="flex justify-between bg-black p-3 rounded-md">
         <span className="text-zinc-300">{props.name}</span>
         <div className="flex gap-2">
            <button className="bg-blue-400 p-2 text-sm rounded-md">
               Editar
            </button>
            <button className="bg-red-500 p-2 text-sm rounded-md">
               Excluir
            </button>
         </div>
      </div>

   );
}