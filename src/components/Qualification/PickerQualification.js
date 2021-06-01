import './PickerQualification.css';
import Navbar from '../Navbar/Navbar'
import Stars from '../Qualification/Starts'

const PickerQualification =()=>{

    return(
        <>
            <Navbar />
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
                        <button className='confirm-review'>Enviar calificación</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickerQualification;
