
import Colaborador from "../Colaborador"
import Remove from "../RemoverBtn"
import "./Time.css"

const Time = ({nome,corPrimaria,corSecundaria,colaboradores,removeColaborador,removeTime}) => {
   
    return (
    colaboradores.length > 0 ?  <section className="time" style={{backgroundColor: corSecundaria}}>
       {colaboradores.length > 1 ? <Remove><img src="/imagens/icon-lixo.png" alt="Remover gênero" onClick={() => removeTime(nome)}/></Remove> : ""}
        <h3 style={{borderColor: corPrimaria}}>
            {nome}
        </h3>
        <div className="colaboradores">
            {colaboradores.map(item => <Colaborador {...item} corDeFundo = {corPrimaria} removeColaborador={removeColaborador} />)}
        </div>
        
    </section> : ""
    ) 
}

export default Time