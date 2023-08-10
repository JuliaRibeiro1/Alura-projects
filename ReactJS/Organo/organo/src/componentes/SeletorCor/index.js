import "./SeletorCor.css"

function SeletorCor(props) {

    const aoDigitado = (e) => {
      
        props.aoAlterado(e.target.value)
        console.log(props.valor)
     
    }
    return(
        <div className="seletor-cor">
            <label>{props.label}</label>
            <div className="card-cor">
            <input type="color" value={props.valor} onChange={aoDigitado} required={props.obrigatorio}  />  
            <span>{props.valor}</span>
            </div>
        </div>
    )
}

export default SeletorCor