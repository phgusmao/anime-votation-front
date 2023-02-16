import MainTemplate from "../templates/main";
import styles from './../styles/Resultado.module.css'

export default function ResultadoPage() {
    return (
       <MainTemplate>
            <h1>Obrigado pelo seu voto!</h1>

            {/* <!-- ANIMES MAIS VOTADOS --> */}
            <h2>Animes mais votados</h2>
            <div id={styles.animes}>
                {/* <!-- ANIME 1 --> */}
                <div className={styles.anime}>
                    <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b0e25e68ede7bd9f8d6a8f49812e88bc.jpe" />
                    <h1 className={styles.gold}>1º</h1>
                    <h2>Ranking of Kings (10)</h2>
                </div>

                {/* <!-- ANIME 2 --> */}
                <div className={styles.anime}>
                    <img src="https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/08/Bleach-Thousand-Year-Blood-War-anime-visual-2-1.jpg?resize=1280%2C1809&ssl=1" />
                    <h1 className={styles.silver}>2º</h1>
                    <h2 >Bleach (8)</h2>
                </div>

                {/* <!-- ANIME 3 --> */}
                <div className={styles.anime}>
                    <img src="https://jovemnerd.com.br/wp-content/uploads/2022/03/jogos-bizarre-adventure-stone-ocean.jpg" />
                    <h1 className={styles.bronze}>3º</h1>
                    <h2>JoJos Bizarre Adventure (3)</h2>
                </div>
            </div>

            {/* <!-- ULTIMOS VOTOS --> */}
            <h2>Últimos Votos</h2>
            <div id={styles.votos}>
                <ul>
                    <li>carloswgama@gmail.com - Ranking of Kings</li>
                    <li>carloswgama@gmail.com - Ranking of Kings</li>
                    <li>carloswgama@gmail.com - Ranking of Kings</li>
                    <li>carloswgama@gmail.com - Ranking of Kings</li>
                </ul>
            </div>
       </MainTemplate>
    )
}