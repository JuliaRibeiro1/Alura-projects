
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import React from "react"
import "./Formulario.css"
import SeletorCor from "../SeletorCor"
import Checkbox from "../Checkbox"
import useForm from "../../hooks/useForm"
import uuid from 'react-uuid';
import useConfirm from "../../hooks/useConfirm"

const Formulario = ({addCor,aoColaboradorCadastrado,setNovoTime,timeLista}) => {

    const nome = useForm("nome")
    const cargo = useForm()
    const imagem = useForm()
    const time = useForm("genero")
    const timeAlternativo = useForm("genero")
    const checkBox = useForm("checkbox")
    const corPrimaria = useForm("corPrimaria")
    const corSecundaria = useForm("corSecundaria")

    const aoSalvar = (e) => {
     e.preventDefault()
     if(nome.validate() && time.validate()  ) {
        const id = uuid()
            setTextoButao(prev => !prev)
            setTimeout(() => {
            setTextoButao(prev => !prev)
              
           const timeFinal = time.valor === "Outro" ? timeAlternativo.valor : time.valor
            if(checkBox.valor) {
                addCor(timeFinal, corPrimaria.valor, corSecundaria.valor)
            }

            aoColaboradorCadastrado({
                key:id,
                id:id,
                nome:nome.valor,
                imagem:imagem.valor,
                time:timeFinal
            })

            setNovoTime(
                {
                  nome: timeFinal,
                  corPrimaria: checkBox.valor ? corPrimaria.valor :'#2a628c',
                  corSecundaria: checkBox.valor ? corSecundaria.valor : '#1a4463'
                }
        ) 
    },1500) }
    }
   
    const [textoButao, setTextoButao] = React.useState(false)
    const con = useConfirm("ooiii")
    return (
        <section id="formularioId">
           
            <div className="formulario" >
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card da banda ou cantor(a)</h2>
            <CampoTexto 
                nome="nome"
                label="Nome"
                placeholder="Lana Del Rey"
                {...nome}
                />

            <CampoTexto 
                nome="cargo"
                label="Música preferida" 
                placeholder="Serene Queen"
                {...cargo}
                />

            <CampoTexto 
                nome="imagem"
                label="Imagem" 
                placeholder="https://lana.png"
                {...imagem}
                />

            <ListaSuspensa 
                label="Gênero" 
                nome="time"
                placeholder="Selecione um gênero"
                itens={timeLista} 
                {...time}
            />

            {time.valor === "Outro" &&
            <CampoTexto 
                label="Escreva o gênero" 
                placeholder="Digite o time"
                {...timeAlternativo}
            /> } 

            <Checkbox
                label="Deseja personalizar cores?" 
                {...checkBox}
            />

            {checkBox.valor && 
            <div className="seletor-cor-container">
                <SeletorCor 
                    label="Cor primária" 
                    {...corPrimaria}
                />
                <SeletorCor 
                    label="Cor secundária" 
                    {...corSecundaria}
                />
            </div>
           }
            
           {textoButao  ? <button className="botao animar" disabled><img src="/imagens/icon-feito.png" alt="icone feito"/> </button> : <button className="botao">Criar card</button>}
           
            </form>
             </div>
        </section>
    )
}
export default Formulario