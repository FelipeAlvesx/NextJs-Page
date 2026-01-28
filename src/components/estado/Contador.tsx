"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export interface CounterProps {
    startValue?: number;
}    


export default function Counter(props: CounterProps){
    const [value, setValue] = useState(props.startValue ?? 0);

    function incrementa(){
        setValue(value + 1);
    }

    function decrementa(){
        setValue(value - 1);
    }
       
    return (
        <div>
            <h2 className="text-xl font-bold text-center">Contador</h2>
            <div className="flex flex-col items-center">
                <span className="text-6xl font-semibold">{value}</span>
                <div className="flex gap-3">
                    <button onClick={incrementa}>
                        <IconPlus />
                    </button>
                    <button onClick={decrementa}>
                        <IconMinus />
                    </button>
                </div>
            </div>
        </div>
    )
}