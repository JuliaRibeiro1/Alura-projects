
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import React from "react"
import "./Formulario.css"
import SeletorCor from "../SeletorCor"
import Checkbox from "../Checkbox"

const Formulario = (props) => {
   
    const aoSalvar = (e) => {
        e.preventDefault()
      
       
       
        
            setTextoButao(prev => !prev)
            setTimeout(() => {
                setTextoButao(prev => !prev)
              
            const timeFinal = time === "Outro" ? timeAlternativo : time
    
            if(checkboxCor) {
                props.addCor(timeFinal, corPrimaria, corSecundaria)
            }
            props.aoColaboradorCadastrado({
                key:nome,
                nome,
                cargo,
                imagem,
                time : timeFinal,
                
            })

            props.setNovoTime(
                {
                  nome: timeAlternativo,
                  corPrimaria: checkboxCor ? corPrimaria :'#2a628c',
                  corSecundaria: checkboxCor ? corSecundaria : '#1a4463'
                }
        ) 
    },1500)
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
        setTimeAlternativo("")
       
 
    }

    const [textoButao, setTextoButao] = React.useState(false)
    const [nome, setNome] = React.useState('')
    const [cargo, setCargo] = React.useState('')
    const [imagem, setImagem] = React.useState('')
    const [time,setTime] = React.useState("")
    const [timeAlternativo, setTimeAlternativo] = React.useState("")
    const [checkboxCor, setCheckboxCor] = React.useState()
    const [corPrimaria, setCorPrimaria] = React.useState("#f06cff")
    const [corSecundaria, setCorSecundaria] = React.useState("#588dc9")


    return (
      
        <section id="formularioId">
            <div className="formulario" >
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card da banda ou cantor(a)</h2>
            <CampoTexto 
                obrigatorio={true}
                label="Nome"
                valor={nome}
                placeholder="Lana Del Rey"
                aoAlterado={valor => setNome(valor)}
                />

            <CampoTexto 
                label="Música preferida" 
                valor={cargo}
                obrigatorio={false}
                placeholder="Serene Queen"
                aoAlterado={valor => setCargo(valor)}
                />
            <CampoTexto 
                obrigatorio={false} 
                label="Imagem" 
                valor={imagem}
                placeholder="https://lana.png"
                aoAlterado={valor => setImagem(valor)}
                />

            <ListaSuspensa 
                label="Gênero" 
                valor={time}
                placeholder="Selecione um gênero"
                aoAlterado={valor => setTime(valor)}
                itens={props.timeLista} 
            />

            {time === "Outro" ?  
            <CampoTexto 
                obrigatorio={true} 
                label="Escreva o gênero" 
                valor={timeAlternativo}
                placeholder="Digite o time"
                aoAlterado={valor => setTimeAlternativo(valor)}
            /> : ""} 

            <Checkbox
                obrigatorio={true} 
                label="Deseja personalizar cores?" 
                valor={checkboxCor}
                aoAlterado={valor => setCheckboxCor(valor)}
            />

            {checkboxCor === true? 
            <div className="seletor-cor-container">
                <SeletorCor 
                    label="Cor primária" 
                    valor={corPrimaria }
                    aoAlterado={valor => setCorPrimaria(valor)}
                
                />
                <SeletorCor 
                    label="Cor secundária" 
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