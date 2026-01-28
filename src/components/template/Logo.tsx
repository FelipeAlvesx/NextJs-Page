import Image from "next/image";


interface LogoProps {

}


export default function Logo(props: LogoProps){
    return (
        <div className="flex gap-2 items-center">
                <Image 
                    src="https://cdn.freebiesupply.com/logos/large/2x/bugatti-3-logo-png-transparent.png"
                    height={50}
                    width={50}
                    alt="logo"
                />
                <span className="text-xl font-black">BUGATTI</span>
            </div>
    )
}