import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/back.png';
import '../Profile/UserProfile.css'
import { Link, useHistory } from 'react-router-dom'

export const UserProfile = () =>  {
    let history = useHistory();
    const [order, setOrder] = useState()

    function handleClick() {
        history.push('/deliveries');
    }
    
    function handleClic() {
        history.push('/pickertracking');
    }

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        const getOrderById = async () => {
            try{
                const doc = await db.collection('orders').doc(id).get();
                console.log(doc.data())
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
            <Navbar />
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className="userProfile">
                <p className="titles">Mis pedidos</p>
                <div className="profileUser">
                    {order && 
                        <p className="letters">
                            Numero de orden: {order.numOrden}.
                            <br/>
                            Cliente: {order.cliente}.
                            <br/>
                            Telefono del cliente: {order.telefono}.
                            <br/>
                            <br/>
                            Tienda: {order.tienda}.
                            <br/>
                            Medidas del paquete: {order.dimensiones}.
                            <br/>
                            Peso del paquete: {order.peso}.
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
                    <button to="/tracking"className="maps" onClick={handleClic}>Mi ruta</button>
                    <Link to="/cancelation" className="cancelationLink" >Cancelar entrega</Link>
                </div>
            </div>
        </>
    ) 
}