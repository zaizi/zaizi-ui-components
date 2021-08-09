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
    let valueChange = function(text) {
        setValue(text.target.value)
    }
    return <input
        name = {name}
        id = {id}
        type = "text"
        className = {className}
        value={value}
        placeholder = {placeholder}
        onChange={(text) => valueChange(text)}>
    </input>
}

export default TextInput;