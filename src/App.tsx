import * as React from "react";
import Input from "./Input";
import useForm from "./hooks/useForm";

export default function App() {
  const nome = useForm();
  const sobrenome = useForm();

  return (
    <div className="App">
      <Input name="nome" label="Nome" required {...nome} />
      <Input name="sobrenome" label="Sobrenome" {...sobrenome} />
    </div>
  );
}
