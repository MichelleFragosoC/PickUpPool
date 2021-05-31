import React, { useState } from 'react'
import { collectionDeliveries } from '../../firebase'
import './Deliveries.css';
// import { useHistory } from 'react-router-dom'

function Deliveries() {
    // let history = useHistory();

    // function handleClick() {
    //     history.push('/details');
    // }
    const [createN, setCreate] = useState([]);

    React.useEffect(() => {
        const getNotes = async () => {
            const { docs } = await collectionDeliveries()
            const newArray = docs.map((item) => ({ id: item.id, ...item.data() }))
            setCreate(newArray)
        }
        getNotes()
    }, [])

    return (
        <>
            {/* <div onClick={handleClick} className="deliveriesDad"> */}
            {
                createN.length !== 0 ? (
                    createN.map((item) => (
                        
                        <span className="deliveriesBoy" key={item.id}>
                            <p>Núm de orden: {item.numOrden}</p>
                            <p>Usuario: {item.cliente}</p>
                            <p>Telefono: {item.telefono}</p>
                            <p>Fecha de entrega {item.entrega}</p>
                            <p>Ubicación: {item.ubicación}</p>
                        </span>
                            
                    ))
                    ) : (
                        <span>Aún no hay nuevas entregas</span>
                        )
            }
            {/* </div> */}
        </>
    );
}

export default Deliveries;

