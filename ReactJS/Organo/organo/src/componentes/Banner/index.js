import Botao from "../Botao/Botao"
import "./Banner.css"


function Banner() {
    return (
        <header className="banner" style={{backgroundImage:"url('/imagens/banner.png')"}}>
        
        <div className="container">
       
            <div className="center">
               
                <h1>Sintonize sua Playlist Perfeita:</h1>
                <h2>Organize suas Estrelas Musicais!</h2>
                <Botao className="comecar-btn">COMEÇAR</Botao>
            </div>
            <span>ORGANO</span>
        </div>
        </header>
    )
}
export default Banner