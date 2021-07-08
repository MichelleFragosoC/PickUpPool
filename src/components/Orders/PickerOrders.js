import { useHistory } from 'react-router-dom'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Deliveries from '../Deliveries/Deliveries'
import arrow from '../../assets/back.png';
import '../Deliveries/Deliveries.css';

function PickerOrders() {
    let history = useHistory();

    function handleClick() {
        history.push('/principal');
    }

    return (
        <>
            <Navbar />
            
            <div className='conteiner-pickerorders'>
                <p>Entregas</p>
                    <div className="conteiner-deliveries">
                        <Deliveries />
                    </div>
                    <img onClick={handleClick} src={arrow} className="return" alt="return" />
            </div>
        </>
    );

}

export default PickerOrders;

