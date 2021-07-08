import React, {useState} from 'react';
import '../../components/Register/Register.css'
import { auth, database} from '../../firebase'
import Logo from '../../LogoPickUp.png'
import {Link} from 'react-router-dom'
import arrow from '../../assets/back.png'
import { Redirect } from 'react-router';
import swal from 'sweetalert';

export const Register = (props) => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[msgError, setMsgError] = useState(null)
        
    const registerUser = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
            .then( (r) =>  {
                let ref = database.ref();
                let usersRef = ref.child("users");
                usersRef.push({
                    uid: r.user.uid,
                    email: r.user.email,
                    password: password
                });
                console.log(usersRef);
                alertSuccess();
            })
            .catch(error => {
                if(error.code === 'auth/invalid-email'){
                    setMsgError('Correo electrónico incorrecto')
                }
                if(error.code === 'auth/weak-password'){
                    setMsgError('La contraseña debe tener al menos 6 caracteres')
                }
            })
    }
    
    const alertSuccess =()=>{
        swal('Registro exitoso', 'Bienvenido a PickUp Pool', 'success');
    }

    if(props.user){ //Si es falso el usuario lo redirijera a otra parte
        return <Redirect to="/principal" />
    }

    return (
        <div className='register'>
            <h1 className='title'>PickUp PooL</h1>
            <p>Tu app de entrega de pedidos</p>
            <img className="logo" src={Logo} alt="logo" />
                <div className="registerDivForm">
                    <h3>REGÍSTRATE</h3>
                    <form className="registerForm"onSubmit={registerUser}> 
                        <label htmlFor="email">Correo electrónico*</label>
                        <input type="email" className="registerInput" onChange={(e)=>{setEmail(e.target.value)}} />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="registerInput" onChange={(e)=>{setPassword(e.target.value)}} />
                        <button value="regUser"  className="registerButton" >Unirme</button>
                    </form>
                    {
                            msgError !== null ?
                            (
                                <div>{msgError}</div>
                            )
                            :
                            (
                                <span></span>
                            )
                            }
                    <Link to="/"><img src={arrow} className="arrowBack" alt="back" /></Link>
                </div>  
            </div>
    );
};
