import React, { HTMLAttributes, useState } from "react";

export interface RadioProps extends HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    value: string;
    checked: boolean;
    type: string;
    onClick: () => void;
}

const Radio: React.FC<RadioProps> = (props) => {
    const [value, setValue] = useState("")

    const buttonClicked = (e) => {
        setValue(e.target.value)
    }

    return <input 
        id={props.id}
        className={props.className}
        onClick={buttonClicked} 
        value={props.value} 
        type="radio" 
        checked={props.checked}>
        </input>
}

export default Radio;