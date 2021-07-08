import './Navbar.css';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom'

const Navbar =()=>{

    let history = useHistory();

    function handleClickPrincipal() {
        history.push('/principal');
    }

    function handleLogout() {
        auth.signOut().then(() => console.log("Salir"));
    }

    return(
        <div className='navbar'>
            <p className='sloganApp' onClick={handleClickPrincipal}>PickUp PooL</p>
            <ul className='logOut' onClick={handleLogout}>Salir</ul>       
        </div>
    )
}

export default Navbar;