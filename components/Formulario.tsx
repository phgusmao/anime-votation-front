export interface FormularioProps {
    texto: string
}

export default function Formulario(props: FormularioProps) {

    const {texto} = props;

    return (
        <>
            <p>{props.texto} </p>
            <input placeholder={"Digite seu " + texto} />
        </>
    )
}