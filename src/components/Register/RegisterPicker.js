import React, { useState} from 'react';
import { db } from '../../firebase';
import './RegisterPicker.css'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'
import arrow from '../../assets/back.png';

export const RegisterPicker = (props) => {

    let history = useHistory();

    const[name, setName] = useState('');
    const[ine, setIne] = useState('');
    const[placas, setPlacas] = useState('');
    const[transport, setTransport] = useState('');
    const[phone, setPhone] = useState('');
    
    const registerPick = async (e) =>{
        e.preventDefault();
        const newPicker = {
            name : name,
            ine: ine,
            placas: placas,
            transport: transport,
            phone: phone, 
        };
        try{
            await db.collection('pickerInformation').add(newPicker);
            swal('¡Tu registro se ha realizado de manera exitosa!','¡Nuevo picker!', 'success');
            history.push('/deliveries');
            console.log('Datos guardados exitosamente');
        }
        catch(error){
            console.log('Datos no guardados', error)
        }
    };

    function handleClick() {
        history.push('/principal');
    }

    return(
        <div className="registerPicker">
            <h2 className='titlePicker'>REGISTRATE COMO PICKER</h2>
                <div className="registerDivFormP">
                    <form className="registerPickerForm" onSubmit={registerPick}> 
                        <label>{props.user.email}</label>
                        <label htmlFor="name">Nombre completo*</label>
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="registerPickerInput" required/>
                        <label htmlFor="key">Clave Electoral*</label>
                        <input value={ine} onChange={(e) => {setIne(e.target.value)}} type="text" className="registerPickerInput" required/>
                        <label htmlFor="transport">Medio de transporte</label>
                        <select className="radioButtom" value={transport} onChange={(e) => {setTransport(e.target.value)}} required>
                                <option></option>
                                <option  type="radio" name="bicicleta">Bicicleta</option>
                                <option type="radio" name="automovil" >Automóvil</option>
                                <option  type="radio" name="motocicleta">Motocicleta</option>
                                <option type="radio" name="caminando">Caminando</option>
                        </select>
                        <label htmlFor="key">No. de placas</label>
                        <input value={placas} onChange={(e) => {setPlacas(e.target.value)}} type="text" className="registerPickerInput"  />
                        <label htmlFor="telephone">Teléfono*</label>
                        <input value={phone} onChange={(e) => {setPhone(e.target.value)}} type="number" className="registerPickerInput" required/>
                        <button  value="regPicker" className="registerPickerButton" >Unirme</button>
                    </form>
                    <img onClick={handleClick} src={arrow} className="returnR" alt="return" />
                </div>
        </div>
    );
}