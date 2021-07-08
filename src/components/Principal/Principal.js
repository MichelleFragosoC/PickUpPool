import './Principal.css';
import Navbar from '../Navbar/Navbar'
import { Redirect, useHistory } from 'react-router-dom'

const Principal =(props)=>{
    
    let history = useHistory();

    function handleClick() {
        history.push('/orders');        
    }
    function clickRegisterPicker() {
        history.push('/registerpicker');        
    }
    if(!props.user){
        return <Redirect to="/"/>
    }

    return(
        <div className='viewPrincipal'>
            <Navbar/>
            <h1>PickUp PooL</h1>
            <h3>Tu app de entrega de pedidos</h3>
            <div className='categories'>
                <div className='container'>
                    <h4>Mis pedidos</h4>
                    <button onClick={handleClick}>Ir</button>
                </div>
                <div className='container'>
                    <h4>Invita a un amigo para recibir créditos</h4>
                    <button>Invitar</button>
                </div>
                <div className='container'>
                    <h4>Vuélvete un Picker y gana</h4>
                    <button onClick={clickRegisterPicker} >Unirme</button>
                </div>
            </div>
        </div>
    )
}

export default Principal;
