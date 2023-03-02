import MainTemplate from "../templates/main";
import styles from './../styles/Resultado.module.css'
import Axios from 'axios'
import { useEffect, useState } from "react";
import { Anime } from "@/models/anime";

type Voto = {
    id: number
    animeId: number
    email: string
    anime: Anime
}

export default function ResultadoPage() {

    const [votos, setVotos] = useState<Voto[]>([]);
    const [rank, setRank] = useState<any[]>([])

    useEffect(() => {
        Axios.get('http://localhost:3001/votacao')
            .then(success => setVotos(success.data))

        Axios.get('http://localhost:3001/animes/rank')
            .then(success => setRank(success.data))
    }, [])

    return (
       <MainTemplate>
            <h1>Obrigado pelo seu voto!</h1>

            {/* <!-- ANIMES MAIS VOTADOS --> */}
            <h2>Animes mais votados</h2>
            <div id={styles.animes}>
                {/* <!-- ANIME 1 --> */}
                {rank[0] && 
                <div className={styles.anime}>
                    <img src={rank[0].anime.url} />
                    <h1 className={styles.gold}>1º</h1>
                    <h2>{rank[0].anime.titulo} - {rank[0].votos}</h2>
                </div>
                }

                {/* <!-- ANIME 2 --> */}
                {rank[1] && 
                <div className={styles.anime}>
                    <img src={rank[1].anime.url} />
                    <h1 className={styles.gold}>2º</h1>
                    <h2>{rank[1].anime.titulo} - {rank[1].votos}</h2>
                </div>
                }

                {/* <!-- ANIME 3 --> */}
                {rank[2] && 
                <div className={styles.anime}>
                    <img src={rank[2].anime.url} />
                    <h1 className={styles.gold}>3º</h1>
                    <h2>{rank[2].anime.titulo} - {rank[2].votos}</h2>
                </div>
                }
            </div>

            {/* <!-- ULTIMOS VOTOS --> */}
            <h2>Últimos Votos</h2>
            <div id={styles.votos}>
                <ul>
                    { votos.map(voto => <li key={voto.id}>{voto.email} - {voto.anime.titulo}</li>)}
                </ul>
            </div>
       </MainTemplate>
    )
}