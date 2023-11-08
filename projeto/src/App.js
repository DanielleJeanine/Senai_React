import { useState } from 'react';
import './App.css';
import Pergunta from './Components/Pergunta';

function App() {
  const [perguntas, setPerguntas] = useState([
    {
      pergunta: 'Qual é a capital do Brasil?',
      alternativas: ['Rio de Janeiro', 'Brasília', 'Bahia', 'São Paulo'],
      respostaCerta: 'Brasília',
    },
    //Adicionar mais perguntas
  ])

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [cor, setCor] = useState(' ');
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);

  function aoConfirmar (opcaoConfirmada){
    if(opcaoConfirmada === perguntas[perguntaAtual].respostaCerta){
      console.log("Parabéns vc acertou!")
    } else {
      console.log('Errooooooou!')
    }
}

function aoSelecionar(opcaoSelecionada){
  console.log(opcaoSelecionada);
  setAlternativaSelecionada(opcaoSelecionada);
  colorir();
}

function colorir (){
  setCor('laranja');
}



  return (
    <div className="App">
      <Pergunta
        pergunta = {perguntas[0].pergunta}
        alternativas = {perguntas[0].alternativas}
        aoSelecionar = {aoSelecionar}
        aoConfirmar = {aoConfirmar}
        cor = {cor}
        alternativa = {alternativaSelecionada}




      />

    </div>
  );
}

export default App;
