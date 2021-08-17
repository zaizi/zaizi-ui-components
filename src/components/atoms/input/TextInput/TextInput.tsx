import React, { HTMLAttributes, useState } from "react";

export interface TextInputProps extends HTMLAttributes<HTMLElement> {
    name?: string;
    type: string;
    placeholder?: string;
    id?: string;
    className?: string;
    onChange: () => void;
}

const TextInput: React.FC<TextInputProps> = ({name, placeholder, id, className, onChange}) => {
    const [value, setValue] = useState("")
    let valueChange = function(e) {
        setValue(e.target.value)
    }
    return <input
        name = {name}
        id = {id}
        type = "text"
        className = {className}
        value={value}
        placeholder = {placeholder}
        onChange={(e) => valueChange(e)}>
    </input>
}

export default TextInput;