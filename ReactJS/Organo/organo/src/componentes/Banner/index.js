
import "./Banner.css"
import { HashLink  } from 'react-router-hash-link';

function Banner() {
    return (
        <header className="banner" style={{backgroundImage:"url('/imagens/banner.png')"}}>
        
        <div className="container">
       
            <div className="center">
    
                <h1>Sintonize sua Playlist Perfeita:</h1>
                <h2>Organize suas Estrelas Musicais!</h2>
                <button className="comecar-btn" > COMEÇAR </button>
                
            </div>
            <span>ORGANO</span>
        </div>
    
        </header>
        
    )
}
export default Banner