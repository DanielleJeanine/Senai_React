import './style.css';
import logo from '../../assets/logo.png'
export default function Pergunta(props) {

    return (
        <>
        <div className="pergunta">
            <div className="text">
                <h1>{props.pergunta}</h1>
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    </>
    );
}