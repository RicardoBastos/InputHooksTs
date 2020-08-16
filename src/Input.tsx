import React, { InputHTMLAttributes, ChangeEvent } from "react";
import { MdClose } from "react-icons/md";
import { ContainerInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange(event: ChangeEvent<HTMLInputElement> | null): void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  required,
  onChange,
  value,
  ...rest
}) => {
  const inputElement = React.useRef<HTMLInputElement>(null);

  const clearValueField = () => {
    onChange(null);
    inputElement.current?.blur();
  };

  return (
    <ContainerInput>
      <input
        type="text"
        ref={inputElement}
        required={required}
        name={name}
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
      {value && (
        <button onClick={clearValueField}>
          <MdClose size={15} />
        </button>
      )}
    </ContainerInput>
  );
};
export default Input;
