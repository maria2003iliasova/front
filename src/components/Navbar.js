import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Haircut">Haircut</Link></li>
        <li><Link to="/Hygiene">Hygiene</Link></li>
        <li><Link to="/Cleaning">Cleaning</Link></li>
        <li><Link to="/Creative">Creative</Link></li>
        <li><Link to="/Post_worker">Post_worker</Link></li>
        <li><Link to="/Post_service">Post_service</Link></li>
        <li><Link to="/Post_record">Post_record</Link></li>
     	</ul>
        </nav>
        </>
    )
}

export default Navbar