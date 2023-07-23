import "./CampoTexto.css"
import React from "react"

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
     
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder="Digite o seu nome"/>
        </div>
    )
}

export default CampoTexto