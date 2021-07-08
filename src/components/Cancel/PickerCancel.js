import React, { useState } from 'react';
import { db } from '../../firebase';
import './PickerCancel.css'
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/back.png';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';

export const PickerCancel = () =>{
    
    let history = useHistory();

    function handleClick() {
        history.push('/deliveries');
    }

    const[commit, setCommit] = useState('');
    const commitCancelation = async (e) =>{
        const newCancelation = {
            commit: commit
        };
        try{
            await db.collection('pickerCancelation').add(newCancelation);
            console.log('Comentario de cancelación exitoso');
            swal('¡Gracias!','Se ha cancelado exitosamente', 'success');
            history.push('/deliveries');
        }
        catch(error){
            console.log('No exitoso', error)
        }
    };

    return(
        <>
            <Navbar />
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className="cancelContainer">
                <p className="titleCancel">¿Por qué estás cancelando la entrega?</p>
                <div className="buttonCancel">
                    <div className="prueba">
                        <button className="firstButton btnhoover">La tienda no lo tiene en existencia</button>
                        <button className="secondButton btnhoover">No se actualizaron los datos del nuevo picker</button>
                        <button className="thirdButton btnhoover">Otro</button>
                        <p>Comentario:</p>
                        <textarea type="text" value={commit} onChange={(e) => { setCommit(e.target.value)}} placeholder="Coloca tus comentarios aquí....."></textarea>
                        <button className="enviar" onClick={commitCancelation}>Enviar Cancelación</button>
                    </div>
                </div>
            </div>
        </>
    )
}
