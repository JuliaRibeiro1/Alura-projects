import "./SeletorCor.css"

function SeletorCor({valor, label, onChange}) {
    
    return(
        <div className="seletor-cor">
            <label>{label}</label>
            <div className="card-cor">
            <input type="color" value={valor} onChange={onChange}  />  
            <span>{valor}</span>
            </div>
        </div>
    )
}

export default SeletorCor