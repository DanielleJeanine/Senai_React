import logo from './logo.svg';
import './App.css';
import Relogio from './Components/Relogio'
import Separador from './Components/Separador';
import Botao from './Components/Botao';
import { useState } from 'react';


function App() {

const [minutos, setMinutos] = useState (0);
const [segundos, setSegundos] = useState(0);
const [ milissegundos, SetMilissegundos] = useState(0);
const [iniciado, setIniciado] = useState(false);

if (iniciado){
  setTimeout(() =>{
    cronometrar();

  }, 1);
}

function cronometrar(){
  SetMilissegundos(milissegundos + 1);
  if(milissegundos > 999){
    SetMilissegundos(0);
    setSegundos(segundos + 1);
    
  }

  if(segundos > 59){
    setSegundos(0);
    setMinutos(minutos + 1);
    
  }

}

function zerar(){
  setIniciado(false);
  setMinutos(0);
  setSegundos(0);
  SetMilissegundos(0);

}




  return (
    <main>
       <h1>Cronômetro</h1>
      <section>
       
                 <Relogio className ='minutos' contador = {minutos}/>
                 <Separador separador = ':'/>
                 <Relogio contador = {segundos}/>
                 <Separador separador = ':'/>
                 <Relogio contador = {milissegundos}/>
      </section>
    
        <div className='botoes'>
        <Botao onClick = {() => setIniciado(true)}>Iniciar</Botao>
        <Botao>Pausar</Botao>
        <Botao onClick = {() => zerar()}>Zerar</Botao>
        </div>

    </main>
  
  );
}

export default App;
