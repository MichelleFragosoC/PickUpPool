import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import OneOrder from './OneOrder'
import './UserOrders.css'
import arrow from '../../assets/back.png';

function UserOrders() {

    let history = useHistory();

    function handleClick() {
        history.push('/principal');
    }

    return (
        <>
            <Navbar />
            <div className='conteiner-userorders'>
                <p>Mis pedidos</p>
                    <div className="conteiner-orders">
                        <OneOrder />
                    </div>
                    <img onClick={handleClick} src={arrow} className="return" alt="return" />
            </div>
        </>
    );
}

export default UserOrders;
