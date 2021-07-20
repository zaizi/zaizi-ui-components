import React, { HTMLAttributes } from "react";

export interface TextInputProps extends HTMLAttributes<HTMLElement> {
    name?: string;
    type: string;
    placeholder?: string;
    id?: string;
    className?: string;
}

const TextInput: React.FC<TextInputProps> = ({name, placeholder, id, className}) => {
    return <input
        name = {name}
        id = {id}
        type = "text"
        className = {className}
        placeholder = {placeholder}>
    </input>
}

export default TextInput;