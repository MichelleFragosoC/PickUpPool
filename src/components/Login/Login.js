import React, {useState} from 'react';
import { auth } from '../../firebase'
import '../../components/Login/Login.css'
import Logo from '../../LogoPickUp.png'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router';

export const Login = (props) => {
    const initialInputs = { //Valor inicial del estado
        email: '',
        password: ''
    }
    const[inputs, setInputs] = useState(initialInputs)
    function handleOnChange(e){ //En que estado se encuentra, valor de estado para saber si cambio
        const {id, value} = e.target //Validar datos
        setInputs({...inputs, [id]: value})
    }
    function handleSubmit(e){ //Función que envía datos
        e.preventDefault() //Para que no recargue la página
        auth.signInWithEmailAndPassword(inputs.email, inputs.password)
        .then((user)=> console.log('Entrada con éxito')) //Consunmimos el resultado de la promesa
    }
    if(props.user){ //Si es falso el usuario lo redirijera a otra parte
        return <Redirect to="/principal" />
    }

    return (
        <div className="login">
            <h1>PickUp PooL</h1>
                    <p className="slogan">Tu app de entrega de pedidos</p>
                    <img className="logo" src={Logo} alt="logo" />
                    <div className="loginDivForm">
                    <h3>INICIA SESIÓN</h3>
                        <form className="loginForm"onSubmit={handleSubmit}> 
                        <label htmlFor="email">Correo electrónico*</label>
                        <input id="email" type="email" className="loginIn"value={inputs.email} onChange={handleOnChange} placeholder="Correo electrónico"/>
                        <label htmlFor="password">Contraseña*</label>
                        <input id="password" type="password" className="loginIn" value={inputs.password} onChange={handleOnChange} placeholder="Contraseña"/>
                        <input type="submit" value="Ingresar" className="loginButton" />
                    </form>
                    <p>¿Aún no tienes cuenta?</p>
                    <Link to="/register" className="registerLink">Registrate</Link>
                </div>  
            </div>
    )
};
