import React from 'react'


function useForm(tipo) {
    const mensagens = {
        nome: {
            mensagem: "Digite o nome do artista"
        },
        genero: {
            mensagem: "Escolha o gênero musical"
        }
    }

    const dados = {
        checkbox: {
            function : () => {setValor(prev => !prev)}
        }
    }
    const check = tipo === "corPrimaria" ?  "#f06cff" : tipo === "corSecundaria" ? "#588dc9" : ""
    const [erro, setErro] = React.useState("")
    const [valor, setValor] = React.useState(check)

    function validate() {
        if(valor.length === 0 && tipo) {
            setErro(mensagens[tipo].mensagem)
            return false;
        }
        else {
            setErro(null)
            return true
        }
    }

    function onChange({target}) {
        console.log(target)
        console.log("fwfwfwfwfwf")
        if (erro) {
            validate(target.value)
        };

        target.type === "checkbox" ? dados["checkbox"].function() :  setValor(target.value);

    }

  return {
    valor,
    setValor,
    onChange,
    erro,
    validate: () => validate(),
    onBlur: () => validate()

  }
}

export default useForm