import styles from './../styles/Home.module.css'

export default function Home() {
  return (
    <div id="container">
        {/* <!-- CABEÇALHO --> */}
        <header id="header">
            <h1>Votação de animes de 2022 - Curso de Férias - Sistemas de Informação</h1>
        </header>
        {/* <!-- CABEÇALHO [FIM] --> */}

        {/* <!-- CONTEUDO PRINCIPAL --> */}
        <div id="main">
            <h1>Bem vindo a votação de melhores animes de 2023</h1>
            <p>para votar apenas é preciso selecionar seu anime e informar seu email!</p>

            <div id={styles.animes}>

                {/* <!-- ANIME 1 --> */}
                <div className={styles.anime}>
                    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b0e25e68ede7bd9f8d6a8f49812e88bc.jpe" />
                    <h1>Ranking of Kings</h1>
                    <button>Votar</button>
                </div>

                {/* <!-- ANIME 2 --> */}
                <div className={styles.anime}>
                    <img src="https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/08/Bleach-Thousand-Year-Blood-War-anime-visual-2-1.jpg?resize=1280%2C1809&ssl=1" />
                    <h1>Bleach</h1>
                    <button>Votar</button>
                </div>

                {/* <!-- ANIME 3 --> */}
                <div className={styles.anime}>
                    <img src="https://jovemnerd.com.br/wp-content/uploads/2022/03/jogos-bizarre-adventure-stone-ocean.jpg" />
                    <h1>JoJos Bizarre Adventure</h1>
                    <button>Votar</button>
                </div>
                
                {/* <!-- ANIME 4 --> */}
                <div className={styles.anime}>
                    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe" />
                    <h1>Spy x Family</h1>
                    <button>Votar</button>
                </div>
                
                {/* <!-- ANIME 5 --> */}
                <div className={styles.anime}>
                    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe" />
                    <h1>Chainsaw Man</h1>
                    <button>Votar</button>
                </div>
                
                {/* <!-- ANIME 6 --> */}
                <div className={styles.anime}>
                    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe" />
                    <h1>Kimetsu no Yaiba</h1>
                    <button>Votar</button>
                </div>
            </div>

            {/* <!-- MODAL PARA CONFIRMAR VOTO --> */}
            {/* <div id="votar" style="display:none">
                <div id="voto_container">
                    <h1>Você votou em: <br/><b>Ranking of Kings</b></h1>
                    <p>Informe o seu email para confirmar seu voto: </p>
                    <input type="email" name="email" placeholder="Digite seu email"/>
                    <p id="voto_erro">Informe um email!</p>
                    <div id="voto_opc">
                        <button id="btn_votar">Votar</button>
                        <button id="btn_cancelar">Cancelar</button>
                    </div>
                </div>
            </div> */}

        </div>
        {/* <!-- CONTEUDO FIM --> */}

    </div>
  )
}
