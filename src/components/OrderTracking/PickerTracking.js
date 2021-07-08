import { useHistory } from 'react-router-dom'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import './OrderTracking.css'
import arrow from '../../assets/back.png';
import MapView from './MapView';

function PickerTracking() {
    let history = useHistory();

    function handleClick() {
        history.push('/deliveries');
    }
    function handleClic() {
        history.push('/userqualify');
    }
    return (
        <>
            <Navbar />
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className='conteiner-orderTracking'>
                <div className="tracking">
                    <p className='titleTraking'>Rastreo de Pedidos</p>
                </div>
                <div className="conteiner-map">
                    <MapView />
                </div>
            </div>
            <button className='btnTraking' onClick={handleClic}>Paquete entregado</button>
        </>
    );
}

export default PickerTracking;