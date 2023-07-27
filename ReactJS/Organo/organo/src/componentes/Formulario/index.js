import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import React from "react"
import "./Formulario.css"

const Formulario = (props) => {

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    const [nome, setNome] = React.useState('')
    const [cargo, setCargo] = React.useState('')
    const [imagem, setImagem] = React.useState('')
    const [time,setTime] = React.useState("")

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do personagem</h2>
            <CampoTexto 
                obrigatorio={true}
                label="Nome"
                valor={nome}
                placeholder="Digite seu nome"
                aoAlterado={valor => setNome(valor)}
                />

            <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                valor={cargo}
                placeholder="Digite seu cargo"
                aoAlterado={valor => setCargo(valor)}
                />
            <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                valor={imagem}
                placeholder="Digite o endereço da imagem"
                aoAlterado={valor => setImagem(valor)}
                />

            <ListaSuspensa 
                label="Time" 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                itens={props.timeLista} />

            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}
export default Formulario