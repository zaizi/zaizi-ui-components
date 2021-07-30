import React, { HTMLAttributes } from "react";

export interface TextInputProps extends HTMLAttributes<HTMLElement> {
    name?: string;
    type: string;
    placeholder?: string;
    id?: string;
    className?: string;
    onChange: () => void;
}

const TextInput: React.FC<TextInputProps> = ({name, placeholder, id, className, onChange}) => {
    return <input
        name = {name}
        id = {id}
        type = "text"
        className = {className}
        placeholder = {placeholder}>
        onChange={onChange}    
    </input>
}

export default TextInput;