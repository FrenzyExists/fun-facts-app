import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand">
            <h1>
            <FontAwesomeIcon icon={faBolt}  /> Fun Facts
            </h1>

            <h2>Project 1</h2>
        </nav>
    )
};

export default Navbar;