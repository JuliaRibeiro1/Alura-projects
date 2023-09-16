import Erro from "../Erro/Erro"
import "./CampoTexto.css"
import React from "react"

const CampoTexto = ({valor,label,nome,placeholder,onChange,erro,onBlur}) => {
console.log(erro)
    return (
        
        <div className="campo-texto">

            <label>{label}</label>
            <input 
                name={nome} 
                value={valor} 
                onChange={onChange} 
                placeholder={placeholder}
                onBlur={onBlur}
            />

           {erro && <Erro mensagem={erro}/>}

        </div>
    )
}

export default CampoTexto