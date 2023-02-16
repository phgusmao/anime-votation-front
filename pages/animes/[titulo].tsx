import { useRouter } from "next/router"

export default function AnimesTela() {

    const router = useRouter()
    

    return (
        <h1>Anime buscado: {router.query.titulo}</h1>
    )
}