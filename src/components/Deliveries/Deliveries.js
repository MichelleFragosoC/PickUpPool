import React, { useState, useEffect } from 'react'
import { collectionDeliveries } from '../../firebase'
import './Deliveries.css';
import { useHistory } from 'react-router-dom'

function Deliveries() {
    const [createN, setCreate] = useState([]);
    let history = useHistory();

    useEffect(() => {
        const getNotes = async () => {
            const { docs } = await collectionDeliveries()
            const newArray = docs.map((item) => ({ id: item.id, ...item.data() }))
            setCreate(newArray)
        }
        getNotes()
    }, [])

    const goToOrderDetail = async (id) => {
        history.push({
            pathname: `/userProfile`,
            search: `?id=${id}`,
        })
}

    return (
        <>
            <div className="deliveriesDad">
            {
                createN.length !== 0 ? (
                    createN.map((item) => (
                        
                        <li className="deliveriesBoy" key={item.id}>
                            <p>Núm de orden: {item.numOrden}</p>
                            <p>Usuario: {item.cliente}</p>
                            <p>Telefono: {item.telefono}</p>
                            <p>Fecha de entrega {item.entrega}</p>
                            <button  className="btnDeliveries" onClick={(id)=>{goToOrderDetail(item.id)}}>Ver entrega</button>
                        </li>
                            
                    ))
                    ) : (
                        <span>Aún no hay nuevas entregas</span>
                        )
            }
                </div> 
        </>
    );
}

<<<<<<< HEAD
export default Deliveries;

=======
export default Deliveries;
>>>>>>> 8d54751cc0e4d7def42246d13abda56da7e46be9
