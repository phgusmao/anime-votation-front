/* eslint-disable @next/next/no-img-element */
import { Anime } from '../models/anime'
import { useState } from 'react'
import MainTemplate from '../templates/main'
import styles from './../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {

    const [animes, setAnimes] = useState<Anime[]>([
        {
            id: 1, titulo: 'Rankin of Kings', url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b0e25e68ede7bd9f8d6a8f49812e88bc.jpe'
        },
        {
            id: 2, titulo: 'Bleach', url: 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/08/Bleach-Thousand-Year-Blood-War-anime-visual-2-1.jpg?resize=1280%2C1809&ssl=1'
        },
        {
            id: 3, titulo: 'JoJo\'s Bizarre Adventure', url: 'https://jovemnerd.com.br/wp-content/uploads/2022/03/jogos-bizarre-adventure-stone-ocean.jpg'
        }
    ])

    const [animeSelecionado, setAnimeSelecionado] = useState<Anime|null>(null)

    const router = useRouter()

    const handleVotacao = () => {
        router.push('/resultado')
    }

  return (
            
    <MainTemplate>

            <h1>Bem vindo a votação de melhores animes de 2023</h1>
            <p>para votar apenas é preciso selecionar seu anime e informar seu email!</p>

            <div id={styles.animes}>

                {animes.map((anime) => (
                    <div className={styles.anime}>
                        <img src={anime.url} />
                        <h1>{anime.titulo}</h1>
                        <button onClick={() => setAnimeSelecionado(anime)}>Votar</button>
                    </div>
                ))}

            </div>

            {/* <!-- MODAL PARA CONFIRMAR VOTO --> */}
            {animeSelecionado && <div id={styles.votar}>
                <div id={styles.votar}>
                    <div id={styles.voto_container}>
                        <h1>Você votou em: <br/><b>{animeSelecionado.titulo}</b></h1>
                        <p>Informe o seu email para confirmar seu voto: </p>
                        <input type="email" name="email" placeholder="Digite seu email"/>
                        <p id={styles.voto_erro}>Informe um email!</p>
                        <div id={styles.voto_opc}>
                            <button id={styles.btn_voltar} onClick={handleVotacao}>Votar</button>
                            <button id={styles.btn_cancelar} onClick={() => setAnimeSelecionado(null)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>}

    </MainTemplate>
           
  )
}
