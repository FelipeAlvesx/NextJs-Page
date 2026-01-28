import Link from "next/link";

export interface MenuItemProps {
    link: string;
    text: string;
    icon?: React.ElementType;
}


export default function MenuItem(props: MenuItemProps){
    return (
        
            <Link href={props.link} className="flex gap-2 items-center px-4 py-2 rounded-md hover:bg-white/10">
                {props.icon && <props.icon size={20} stroke={1.5}/>}
                <span>{props.text}</span> 
            </Link>
    )
}