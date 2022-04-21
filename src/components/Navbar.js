import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/"><img src={logo} height="60" width="260" alt="Logo" /></Link></li>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/Haircut">Стрижки</Link></li>
                    <li><Link to="/Hygiene">Гигиенические услуги</Link></li>
                    <li><Link to="/Cleaning">Чистка зубов</Link></li>
                    <li><Link to="/Creative">Креативные услуги</Link></li>
                    <li><Link to="/SignIn">Войти</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar