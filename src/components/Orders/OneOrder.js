import React, {useEffect, useState } from 'react'
import { collectionOrders } from '../../firebase'
import './UserOrders.css'
import { useHistory } from 'react-router-dom'

function OneOrder() {
    const [createN, setCreate] = useState([]);
    let history = useHistory();

    useEffect(() => {
        const getOrders = async () => {
            const { docs } = await collectionOrders()
            const newArray = docs.map((item) => ({ id: item.id, ...item.data() }))
            console.log(newArray);
            setCreate(newArray)
        }
        getOrders()
    }, []);

    const goToOrderDetail = async (id) => {
            history.push({
                pathname: `/details`,
                search: `?id=${id}`,
            })
    }
    return (
        <>
            <div className="ordersDad">
            {
                createN.length !== 0 ? (
                    createN.map((item) => (
                        
                        <li className="ordersBoy" key={item.id}>
                            <p>Numero de orden: {item.numOrden}</p>
                            <p>Fecha de entrega: {item.entrega}</p>
                            <button  className='btn-details' onClick={(id)=>{goToOrderDetail(item.id)}}>Programar entrega</button>
                        </li>     
                    ))
                    ) : (
                        <span>No existen ordenes</span>
                        )
            }
            </div> 
        </>
    );
}

export default OneOrder;