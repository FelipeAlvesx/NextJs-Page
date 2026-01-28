import { IconBrandReact } from "@tabler/icons-react";

export default function OficialLogo(){
    return (
        <div className="flex items-center gap-2 text-zinc-300">
            <IconBrandReact size={40} stroke={1} />
            <span className="text-lg font-light">React & Next</span>
        </div>
    )
}