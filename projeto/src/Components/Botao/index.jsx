import '../Botao/style.css'
export default function Botao(props){

    return(
        <button onClick={props.onClick}>{props.children}</button>
    );
}