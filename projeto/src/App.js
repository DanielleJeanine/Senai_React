import { useState } from 'react';
import './App.css';
import Pergunta from './Components/Pergunta';
import Alternativa from './Components/Alternativa';
import Ajuda from './Components/Ajuda';

function App() {
  let listaDePerguntas = [
    {
      "pergunta": 'Qual é a capital do Brasil?',
      "alternativas": ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      "respostaCerta": 'Brasília',
    }
  ] //Carregar as perguntas;
  const [pergunta, setPergunta] = useState(
    {
      'pergunta': 'Qual é a capital do Brasil?',
      'alternativas': ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      'respostaCerta': 'Brasília'
    }
  );
  
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const [indexSelecionado, setIndexSelecionado] = useState(null);
  
  function aoConfirmar (){
    if(alternativaSelecionada == pergunta.respostaCerta){
      console.log("Parabéns vc acertou!")
    } else {
      console.log(alternativaSelecionada == pergunta.respostaCerta)
    }
  }

  //teste
  
  function aoSelecionar(opcaoSelecionada){
    console.log(opcaoSelecionada);
    setAlternativaSelecionada(opcaoSelecionada);
  }

  return (
    <div className="App">
      <Pergunta pergunta = {pergunta.pergunta}  />
      <div className='ajuste_ajuda'>
          <div className='pergntaApp'>
              {pergunta.alternativas.map((alternativa,index)  => (
                <Alternativa alternativa={alternativa}
                index={index}
                onClick={aoSelecionar}
                alternativaSelecionada={alternativaSelecionada} />
              ))}
          </div>
          <div className='ajudaApp'>
              <button onClick={aoConfirmar}>Confirmar</button>
              <Ajuda />
          </div>
      </div>
    </div>
  );
}

export default App;
