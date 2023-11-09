import './style.css'
import React, { useState } from 'react';

export default function Alternativa(props){

    return(
        <button
          className={props.alternativa === props.alternativaSelecionada ? 'laranja' : 'vermelho'}
          onClick={() => props.onClick(props.alternativa)}
        >
          {props.alternativa}
        </button>
    );
}