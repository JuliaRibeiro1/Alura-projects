import "../CampoTexto/CampoTexto.css"
import Erro from "../Erro/Erro"

const ListaSuspensa = ({valor,nome,label,placeholder,itens,onChange, onBlur,erro}) => {

    return (
        
        <div className="lista-suspensa">

            <label>{label}</label>

            <select name={nome} value={valor} onChange={onChange} onBlur={onBlur} >
                <option value="" disabled> {placeholder} </option>
                {itens.map(item => <option key={item} value={item}>{item}</option>) }
               
            </select>
            <Erro mensagem={erro}/>

        </div>
    )
}
export default ListaSuspensa