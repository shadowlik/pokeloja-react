
import { faShoppingCart, faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../assets/scss/Navigation.scss';

import logo from '../../assets/images/logo.png';
import {  
    Outlet,
    Link,
    useMatch,
    useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
          className={match ? "active" : "" }
          to={to}
          {...props}
        >
          {children}
        </Link>
    );
}

export const Navigation = (props) => {
    return (
        <nav className="navigation">
            <div className='container'>
                <div>
                <CustomLink to="/"><img className='logo' src={logo} alt="Pokémon" /></CustomLink>
                    <ul className='nav-links'>
                        <li>
                            <CustomLink to="/"><span>Home</span></CustomLink>
                        </li>
                        <li>
                            <a><span>Contato</span></a>
                        </li>
                        <li>
                            <a><span>Categorias</span></a>
                        </li>
                    </ul>
                </div>

                <div>
                    <button className="btn-search">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn-cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
            <Outlet />
        </nav>
    );
}