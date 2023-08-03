import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import React from "react"
import "./Formulario.css"

const Formulario = (props) => {
  
    const aoSalvar = (e) => {
        props.setNovoTime(
            {
              nome: timeAlternativo,
              corPrimaria: '#2a628c',
              corSecundaria: '#1a4463'
            }
) 

        e.preventDefault()
        props.aoColaboradorCadastrado({
            key:nome,
            nome,
            cargo,
            imagem,
            time : time === "Outro" ? timeAlternativo: time
            
        })
        
       // const mudarTexto = () => {
            setTextoButao(prev => !prev)
            setTimeout(() => {
                setTextoButao(prev => !prev)
            },1000)
     //   }
        
                 
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
    
React.useEffect(() => {
    
})
    return (
        <section className="formulario" id="formulario">
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
                placeholder="Serene Queen"
                aoAlterado={valor => setCargo(valor)}
                />
            <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                valor={imagem}
                placeholder="https://lana.png"
                aoAlterado={valor => setImagem(valor)}
                />

            <ListaSuspensa 
                label="Gênero" 
                valor={time}
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

            <Botao className="botao">
                {textoButao ? "Feito" : "Criar Card"}
            </Botao>
            </form>
        </section>
    )
}
export default Formulario