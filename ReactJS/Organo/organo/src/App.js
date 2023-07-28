
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
   
    nome: 'Front-End',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
  },
  {

    nome: 'Data Sciense',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
  },
  {
  
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
  },
  {

    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5',
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9',
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
  },
  {
    nome: "Outro",
    corPrimaria: '#FEB2F5',
    corSecundaria: '#bF3F'
  }
])
 
React.useEffect(() => {
  console.log("OI")
 //setTimes(prev => [...prev,novoTime])

 setTimes(prev => {
  const timeExiste = prev.some(item => item.nome === novoTime.nome);
//console.log(timeExiste)
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


  return (
    <div className="App">
      <Banner/>
     <Formulario aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores,colaborador,])} timeLista={timeNomes} setTimes={timeNomes} setNovoTime={setNovoTime}/>
      {times.map((time,index) => {

       const nome = time.nome === "Outro" ?  novoTime.nome : time.nome
 
        return ( 
         <Time 
            key={index}
            nome={time.nome === "Outro" ?  novoTime.nome : time.nome}
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
