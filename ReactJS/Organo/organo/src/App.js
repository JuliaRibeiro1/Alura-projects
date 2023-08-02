
import Banner from './componentes/Banner'
import Formulario from "./componentes/Formulario"
import React from "react"
import Time from './componentes/Time'
import Rodape from './componentes/Rodape'

function App() {

 const [colaboradores,setColaboradores] = React.useState([])

 const [novoTime, setNovoTime] = React.useState({});

const [times, setTimes] = React.useState([
  {
   
    nome: 'Rock',
    corPrimaria: '#82CFFA',
    corSecundaria: 'rgb(23, 61, 97)',
  },
  {

    nome: 'Metal',
    corPrimaria: '#A6D157',
    corSecundaria: 'rgb(26, 59, 94)',
  },
  {
  
    nome: 'Rap',
    corPrimaria: '#E06B69',
    corSecundaria: 'rgb(22, 65, 97)',
  },
  {

    nome: 'Pop',
    corPrimaria: '#598c2F',
    corSecundaria: 'rgb(20, 61, 92)',
  },
  {
    nome: 'MPB',
    corPrimaria: '#1082c9',
    corSecundaria: 'rgb(17, 55, 84)',
  },
  {
    nome: 'Eletrônica',
    corPrimaria: '#3070a1',
    corSecundaria: 'rgb(16, 51, 78)',
  },
  {
    nome: "Outro",
    corPrimaria: '#FEB2F5',
    corSecundaria: '#bF3F'
  }
])
 
React.useEffect(() => {


 setTimes(prev => {
  const timeExiste = prev.some(item => item.nome === novoTime.nome);

  if (!timeExiste && novoTime.nome ) {
  
    return [
      ...prev,
      novoTime
    ];
  }
  else {
    return prev
  }

})

},[novoTime])

const timeNomes = times.map(item => {
  return item.nome
})

console.log(colaboradores)
  return (
    <div className="App">
      <Banner/>
     <Formulario aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores,colaborador,])} timeLista={timeNomes} setTimes={timeNomes} setNovoTime={setNovoTime}/>
      {times.map((time) => {

        return ( 
         
         <Time 
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(item => item.time === time.nome)}
          />
        )
      })}

      <Rodape/>
    </div>
  );
}

export default App;
