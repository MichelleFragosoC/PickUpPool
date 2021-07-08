import './PickerQualification.css';
import Navbar from '../Navbar/Navbar'
import Stars from '../Qualification/Starts'
import { useHistory } from 'react-router-dom'
import arrow from '../../assets/back.png';
import swal from 'sweetalert';

const PickerQualification =()=>{
    let history = useHistory();

    function handleClick() {
        history.push('/principal');
    }

    function handleQualify() {
        swal('¡Gracias!', 'Tu calificación ha sido enviada', 'success');
        history.push('/principal');
    }



    return(
        <>
            <Navbar />
            <img onClick={handleClick} src={arrow} className="return" alt="return" />
            <div className='review'>
                <p className='reviewP'>Califica tu servicio</p>
                <div className="container-review">
                    <div>
                        <p>Puntualidad</p>
                        <Stars/>
                    </div>
                    <div>
                        <p>Estado del paquete</p>
                        <Stars/>
                    </div>
                    <div>
                        <p>Servicio</p>
                        <Stars/>
                    </div>
                    <div>
                        <button className='confirm-review' onClick={handleQualify}>Enviar calificación</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickerQualification;