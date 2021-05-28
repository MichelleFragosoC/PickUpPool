import arrow from '../../assets/arrow.png';
import './Navbar.css';

const Navbar =()=>{
    return(
        <div className='navbar'>
            <img src={arrow} className="return" alt="return" />            
        </div>
    )
}

export default Navbar;
