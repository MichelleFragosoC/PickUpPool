import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/back.png';
import '../Profile/PickerProfile.css'
import { db } from '../../firebase'

export const PickerProfile = () =>{

    let history = useHistory();
    const [order, setOrder] = useState()

    function handleClick() {
        history.push('/principal');
    }
    function handleClic() {
        history.push('/tracking');
    }
    
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        const getOrderById = async () => {
            try{
                const doc = await db.collection('orders').doc(id).get();
                setOrder( doc.data() )
            } catch (e){
                console.log(e,"no existen datos")
            }
            
        }
        getOrderById()
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Navbar/>
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className="pickerProfile">
                <p className="title">Mis pedidos</p>
                <div className="profile">
                    {order && 
                        <p className="letter">
                            Numero de orden: {order.numOrden}.
                            <br/>
                            Tienda: {order.tienda}.
                            <br/>
                            <br/>
                            Picker asignado: {order.piker}.
                            <br/>
                            Contacto Picker: {order.celPiker}
                            <br/>
                            Transporte: {order.vehiculo}
                            <br/>
                            {order.detalles}
                            <br/>
                            <br/>
                            Fecha entrega: {order.entrega}.
                            <br/>
                            Lugar de entrega: {order.places}
                            <br/>
                            Hora de entrega: {order.hours}
                            <br/> 
                        </p>
            
                    }
                    <button to="/tracking"className="mapas" onClick={handleClic}>Rastrear paquete</button>

                    <Link to="/newPicker" className="profileLink">Cambiar Picker</Link>
                </div>
            
            </div>
        
        </>
    )
}