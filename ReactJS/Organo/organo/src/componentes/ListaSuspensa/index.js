import "../CampoTexto/CampoTexto.css"

const ListaSuspensa = (props) => {
    console.log(props.itens)
   
   const aoSelecionado = (e) => {
        props.aoAlterado(e.target.value)
   }
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.value} onChange={aoSelecionado}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa