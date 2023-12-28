import Remove from "../RemoverBtn"
import "./Colaborador.css"

const Colaborador = ({id,nome,cargo,imagem,corDeFundo,removeColaborador}) => {

    const subsituir = nome.charAt(0) 
    return (
       
        <section className="colaborador">
            
            <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
                <Remove>
                    <img src="/imagens/icon-lixo-preto.png" alt="colaborador" onClick={() => removeColaborador(id)}/>
                </Remove>
               
                {imagem === "" ? <div className="img-substituir" style={{backgroundColor:corDeFundo}}>{subsituir}</div> : <img src={imagem} alt={nome} className="img-artista" />}
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </section>
    )
}

export default Colaborador