import Remove from "../Remove"
import "./Colaborador.css"

const Colaborador = (props) => {
    console.log(props.removeColaborador)
    return (
        
        <section className="colaborador">
            
            <div className="cabecalho" style={{backgroundColor:props.corDeFundo}}>
                <Remove>
                    <img src="/imagens/icon-lixo-preto.png" onClick={() => props.removeColaborador(props.nome)}/>
                </Remove>
               
                <img src={props.imagem} alt={props.nome} className="img-artista"/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </section>
    )
}

export default Colaborador