
import Colaborador from "../Colaborador"
import Remove from "../RemoverBtn"
import "./Time.css"

const Time = (props) => {
   
    return (
    props.colaboradores.length > 0 ?  <section className="time" style={{backgroundColor: props.corSecundaria}}>
       {props.colaboradores.length > 1 ? <Remove><img src="/imagens/icon-lixo.png" alt="Remover gênero" onClick={() => props.removeTime(props.nome)}/></Remove> : ""}
        <h3 style={{borderColor: props.corPrimaria}}>
            {props.nome}
        </h3>
        <div className="colaboradores">
            { props.colaboradores.map(item => <Colaborador key={item.name} {...item} corDeFundo = {props.corPrimaria} removeColaborador={props.removeColaborador} />)}
        </div>
        
    </section> : ""
    ) 
}

export default Time