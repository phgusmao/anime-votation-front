import Formulario from "@/components/Formulario";
import { useState } from "react";

export default function IndexTela() {
    let nome = 'Carlos';

    const [valor, setValor] = useState('')

    console.log('Rodou')

    return (
        <>
            <h1>Nome: {valor}</h1>

            <input placeholder="Digite seu nome" onChange={(e) => setValor(e.target.value)}/>
        </>
    )
}