import AuthLogout from './AuthLogout';
import { Link } from 'react-router-dom';
import HangerIcon from '../assets/HangerIcon.png';
import './styles/Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <Link to="/">
                <div className='link-logo'>
                    <img className="logo-icon" src={HangerIcon} alt="logo" />
                    <h3 className='font-brand'>Hanger</h3>
                </div>
            </Link>
            <AuthLogout />
        </div>
    )
}


export default Navbar;