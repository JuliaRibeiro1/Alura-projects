import Remove from "../RemoverBtn"
import "./Colaborador.css"

const Colaborador = (props) => {

    return (
        
        <section className="colaborador">
            
            <div className="cabecalho" style={{backgroundColor:props.corDeFundo}}>
                <Remove>
                    <img src="/imagens/icon-lixo-preto.png" alt="colaborador" onClick={() => props.removeColaborador(props.nome)}/>
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