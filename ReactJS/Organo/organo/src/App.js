
import Banner from './componentes/Banner'
import Formulario from "./componentes/Formulario"
import React from "react"
import Time from './componentes/Time'
import Rodape from './componentes/Rodape'
import { BrowserRouter } from 'react-router-dom'


function App() {

 const [colaboradores,setColaboradores] = React.useState([])

 const [novoTime, setNovoTime] = React.useState({});

 const [times, setTimes] = React.useState([
  {
   
    nome: 'Rock',
    corPrimaria: '#82CFFA',
    corSecundaria: 'rgb(23, 61, 97)'
  },
  {

    nome: 'Metal',
    corPrimaria: '#88c2e3',
    corSecundaria: 'rgb(26, 59, 94)'
  },
  {
  
    nome: 'Rap',
    corPrimaria: '#acd2e8',
    corSecundaria: 'rgb(22, 65, 97)'
  },
  {

    nome: 'Pop',
    corPrimaria: '#78b4d6',
    corSecundaria: 'rgb(20, 61, 92)'
  },
  {
    nome: 'MPB',
    corPrimaria: '#85b1c9',
    corSecundaria: 'rgb(17, 55, 84)'
  },
  {
    nome: 'Eletrônica',
    corPrimaria: '#6dadd1',
    corSecundaria: 'rgb(16, 51, 78)'
  },
  {
    nome: "Outro",
    
  }
])
 
React.useEffect(() => {

 setTimes(prev => {
  const timeExiste = prev.some(item => item.nome === novoTime.nome);

  if (!timeExiste && novoTime.nome ) {
    return [
      novoTime,...prev
      
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

const removeColaborador = (i) => {

  const arr = colaboradores.filter((item) => item.nome !== i);

  setColaboradores(arr);

};

const removeTime = (i) => {
  const arr = colaboradores.filter((item) => item.time !== i);
  setColaboradores(arr);
}

const addCor = (i, corPrimaria, corSecundaria) => {
  const arr = times.map(item => {
 
    if(item.nome === i) {
      return {...item, corPrimaria, corSecundaria}
    }
    return item
  })
 setTimes(arr)
}

  return (
    <div className="App">
      <BrowserRouter>
      <Banner/>
      </BrowserRouter>
     <Formulario aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores,colaborador,])} timeLista={timeNomes} addCor={addCor} setNovoTime={setNovoTime}/>
      
      {times.map((time) => {
   
        return ( 
         
         <Time 
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(item => item.time === time.nome)}
            removeColaborador={removeColaborador}
            removeTime={removeTime}
            
          />
        )
      })}

      <Rodape/>
    </div>
  );
}

export default App;
