/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Anime } from '../models/anime'
import { useEffect, useState } from 'react'
import MainTemplate from '../templates/main'
import styles from './../styles/Home.module.css'
import { useRouter } from 'next/router'
import Axios from 'axios';

export async function getStaticProps() {

    const response = await Axios.get('http://localhost:3001/animes')

    return {
        props: {anime: response.data},
        revalidate: 3600
    }
}

export default  function Home(props: any) {

    const [animeSelecionado, setAnimeSelecionado] = useState<Anime|null>(null);
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");
    const [animes, setAnimes] = useState<Anime[]>([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/animes').then(response => {
            setAnimes(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    
    const router = useRouter()

    const handleVotacao = () => {
        Axios.post('http://localhost:3001/votacao', {email, animeId: animeSelecionado?.id})
        .then(success => {
            router.push('/resultado')
        }).catch(erro => {
            setErro('Não foi possível realizar sua votação. Verifique os campos novamente ou tente novamente em alguns minutos!')
        })
    }

  return (
            
    <MainTemplate>

            <h1>Bem vindo a votação de melhores animes de 2023</h1>
            <p>para votar apenas é preciso selecionar seu anime e informar seu email!</p>

            <div id={styles.animes}>

                {animes.map((anime: Anime) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={anime.id} className={styles.anime}>
                        <img src={anime.url} />
                        <h1>{anime.titulo}</h1>
                        <button onClick={() => setAnimeSelecionado(anime)}>Votar</button>
                    </div>
                ))}

            </div>

            {/* <!-- MODAL PARA CONFIRMAR VOTO --> */}
            {
                animeSelecionado && <div id={styles.votar}>
                    <div id={styles.votar}>
                        <div id={styles.voto_container}>
                            <h1>Você votou em: <br/><b>{animeSelecionado.titulo}</b></h1>
                            <p>Informe o seu email para confirmar seu voto: </p>
                            <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                            {erro && <p id={styles.voto_erro}>{erro}</p>}
                            <div id={styles.voto_opc}>
                                <button id={styles.btn_voltar} onClick={handleVotacao}>Votar</button>
                                <button id={styles.btn_cancelar} onClick={() => setAnimeSelecionado(null)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

    </MainTemplate>
           
  )
}
