import "./CampoTexto.css"
import React from "react"

const CampoTexto = ({valor,label,placeholder,obrigatorio,aoAlterado}) => {

    const aoDigitado = (e) => {
        aoAlterado(e.target.value)
     
    }
    return (
        
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto