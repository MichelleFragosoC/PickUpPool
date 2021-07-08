import { useHistory } from 'react-router-dom'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/back.png';
import '../FormNewPicker/FormNewPicker.css'

export const FormNewPicker = () =>{
    let history = useHistory();

    function handleClick() {
        history.push('/orders');
    }
    function handleClic() {
        history.push('/tracking');
    }
    return (
        <>
        <Navbar />
        <img onClick={handleClick} src={arrow} className="return" alt="return" />
        <div className="newPicker">
        <p>Asignar Picker</p>
        <form className="formPicker">
            <label htmlFor="text" className="labelOne">Nombre completo:*</label>
            <input className="inputPicker"></input>
            <label htmlFor="text" className="labelTwo">Numero telefónico:*</label>
            <input className="inputPicker"></input>
            <label htmlFor="text" className="labelThree">ID del Pedido:*</label>
            <input className="inputPicker"></input>
            <button className="buttonNewPicker" onClick={handleClic}>Confirmar Picker</button>
        </form>
        </div>
        </>
    )
}
