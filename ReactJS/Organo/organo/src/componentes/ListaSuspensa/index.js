import "../CampoTexto/CampoTexto.css"

const ListaSuspensa = ({valor,obrigatorio,label,placeholder,itens,aoAlterado}) => {

   const aoSelecionado = (e) => {

        aoAlterado(e.target.value)
   }
    return (
        
        <div className="lista-suspensa">

            <label>{label}</label>

            <select required={obrigatorio} value={valor} onChange={aoSelecionado}>
                <option value="" disabled> {placeholder} </option>
                {itens.map(item => <option key={item} value={item}>{item}</option>) }
               
            </select>

        </div>
    )
}
export default ListaSuspensa