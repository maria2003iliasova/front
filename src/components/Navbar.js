import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav>
        <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Haircut">Haircut</Link></li>
        <li><Link to="/Hygiene">Hygiene</Link></li>
        <li><Link to="/Cleaning">Cleaning</Link></li>
        <li><Link to="/Creative">Creative</Link></li>
     	</ul>
        </nav>
        </>
    )
}

export default Navbar