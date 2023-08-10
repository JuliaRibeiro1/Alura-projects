
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import React from "react"
import "./Formulario.css"
import SeletorCor from "../SeletorCor"
import Checkbox from "../Checkbox"

const Formulario = (props) => {
  
    const aoSalvar = (e) => {
        e.preventDefault()

        props.addCor(time, corPrimaria, corSecundaria)

            setTextoButao(prev => !prev)
            setTimeout(() => {
                setTextoButao(prev => !prev)
           
 
            props.setNovoTime(
                {
                  nome: timeAlternativo,
                  corPrimaria: '#2a628c',
                  corSecundaria: '#1a4463'
                }
    ) 
                  
            props.aoColaboradorCadastrado({
                key:nome,
                nome,
                cargo,
                imagem,
                time : time === "Outro" ? timeAlternativo : time,
                corPrimaria : "red" 
                
            })
          
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
        setTimeAlternativo("")
    },1500)
    }

    const [textoButao, setTextoButao] = React.useState(false)
    const [nome, setNome] = React.useState('')
    const [cargo, setCargo] = React.useState('')
    const [imagem, setImagem] = React.useState('')
    const [time,setTime] = React.useState("")
    const [timeAlternativo, setTimeAlternativo] = React.useState("")
    const [checkboxCor, setCheckboxCor] = React.useState()
    const [corPrimaria, setCorPrimaria] = React.useState("#ebabeb")
    const [corSecundaria, setCorSecundaria] = React.useState("#7a9ee0")
    

    return (
      
        <section id="formularioId">
            <div className="formulario" >
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card da banda ou cantor(a)</h2>
            <CampoTexto 
                obrigatorio={true}
                type="text"
                label="Nome"
                valor={nome}
                placeholder="Lana Del Rey"
                aoAlterado={valor => setNome(valor)}
                />

            <CampoTexto 
                label="Música preferida" 
                type="text"
                valor={cargo}
                placeholder="Serene Queen"
                aoAlterado={valor => setCargo(valor)}
                />
            <CampoTexto 
                obrigatorio={true} 
                type="text"
                label="Imagem" 
                valor={imagem}
                placeholder="https://lana.png"
                aoAlterado={valor => setImagem(valor)}
                />

            <ListaSuspensa 
                label="Gênero" 
                type="text"
                valor={time}
                placeholder="Selecione um gênero"
                aoAlterado={valor => setTime(valor)}
                itens={props.timeLista} 
            />

            {time === "Outro" ?  
            <CampoTexto 
                obrigatorio={true} 
                type="text"
                label="Escreva o gênero" 
                valor={timeAlternativo}
                placeholder="Digite o time"
                aoAlterado={valor => setTimeAlternativo(valor)}
            /> : ""} 

            <Checkbox
                obrigatorio={true} 
                type="checkbox"
                label="Deseja personalizar cores?" 
                valor={checkboxCor}
                aoAlterado={valor => setCheckboxCor(valor)}
            />

            {checkboxCor ? 
            <div className="seletor-cor-container">
                <SeletorCor 
                    label="Cor primária" 
                    obrigatorio={true}
                    valor={corPrimaria }
                    aoAlterado={valor => setCorPrimaria(valor)}
                
                />
                <SeletorCor 
                    label="Cor secundária" 
                    brigatorio={true}
                    valor={corSecundaria}
                    aoAlterado={valor => setCorSecundaria(valor)}
                />
            </div>
        
            : "" }
                
            <button className={textoButao ? "botao animar" : "botao" }>
                {textoButao ? <img src="/imagens/icon-feito.png" alt="icone feito"/> : "Criar Card"}
            </button>
            </form>
             </div>
        </section>
       
    )
}
export default Formulario