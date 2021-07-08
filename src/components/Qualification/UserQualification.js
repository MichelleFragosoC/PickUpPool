import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './UserQualification.css';
import { db } from '../../firebase';
import success from '../../assets/success.png'
import swal from 'sweetalert';

export const UserQualification = () =>{

    let history = useHistory();

    const[llegada, setLlegada] = useState('');
    const[amabilidad, setAmabilidad] = useState('');
    const[commits, setCommits] = useState('');

    const userQualifity = async (e) =>{
        e.preventDefault();
        const qualificationUser = {
            llegada: llegada,
            amabilidad: amabilidad,
            commits: commits
        };
        try{
            await db.collection('qualificationUser').add(qualificationUser);
            swal('¡Gracias!','Tus comentarios han sido enviados exitosamente', 'success');
            history.push('/deliveries');
            console.log('Comentarios guardados');
        }
        catch(error){
            console.log('Datos no guardados', error);
        }
    }   

    return(
        <div className="qualificationUser">
            <Navbar />
            <p className="titleCalificacion">Calificación</p>
            <h4>¡Pedido entregado exitosamente!</h4>
            <img className="success" src={success} alt="pedido entregado" />
            <p>Califica tu entrega: </p>
            <div className="qualificationContainer">
                    <div className="selects">
                        <select value={llegada} onChange={(e) => {setLlegada(e.target.value)}} required className="buttonUserQualification">
                            <option></option>
                            <option name="puntual">Llego puntual</option>
                            <option name="tarde">Llego tarde</option>
                        </select>
                        <select value={amabilidad} onChange={(e) => {setAmabilidad(e.target.value)}} required className="buttonUserQualification">
                            <option></option>
                            <option name="amable">Fue amable</option>
                            <option name="grosero">Fue grosero</option>
                        </select>
                    </div>

                <div className="commitsQualification">
                    <p>Comentarios:</p>
                    <textarea className="comentarios" value={commits} onChange={(e) => {setCommits(e.target.value)}} placeholder="Escribe tus comentarios aquí....."></textarea>
                </div>
                <div>
                    <button className="btnEnviarCalificacion" value="calificacion"  onClick={userQualifity}>Enviar</button>
                </div>
            </div>
        </div>
    )
};