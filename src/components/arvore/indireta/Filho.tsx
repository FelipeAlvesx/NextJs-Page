"use client"
export interface FilhoProps {
    options: string[];
    onSelect: (option: string) => void;
}

export default function Filho(props: FilhoProps) {
    return (
        <div className="flex gap-3">
            {props.options.map(option => (
                <button key={option} className="botao azul" onClick={() => props.onSelect?.(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}