import logo from './logo.svg';
import './App.css';
import Relogio from './Components/Relogio'
import Separador from './Components/Separador';
import Botao from './Components/Botao';

function App() {
  return (
    <main>
       <h1>Cronômetro</h1>
      <section>
       
                 <Relogio contador = '00'/>
                 <Separador separador = ':'/>
                 <Relogio contador = '00'/>
                 <Separador separador = ':'/>
                 <Relogio contador = '00'/>
      </section>
    
        <div className='botoes'>
        <Botao>Iniciar</Botao>
        <Botao>Pausar</Botao>
        <Botao>Reiniciar</Botao>
        </div>

    </main>
  
  );
}

export default App;
