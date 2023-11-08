import './style.css';
export default function Pergunta(props) {

    return (
        <div>
            <h2>{props.pergunta}</h2>
            <ul>
                {props.alternativas.map((alternativa, index) => (
                    <li key={index}>
                        <button onClick = {() => props.aoSelecionar(alternativa)}
                            onDoubleClick = {() => props.aoConfirmar(alternativa)}
                            id= {props.cor}
                            className={props.alternativa}>
                            {alternativa}
                            
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}