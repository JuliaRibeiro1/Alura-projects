import "./Colaborador.css"

const Colaborador = (props) => {
    console.log(props.removeColaborador)
    return (
        
        <section className="colaborador">
            
            <div className="cabecalho" style={{backgroundColor:props.corDeFundo}}>
                <button className="deletarColaboradorBtn" onClick={() => props.removeColaborador(props.nome)}>x</button>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </section>
    )
}

export default Colaborador