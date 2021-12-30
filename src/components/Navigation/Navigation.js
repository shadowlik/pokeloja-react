
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleCart } from '../../store';

import '../../assets/scss/Navigation.scss';

import logo from '../../assets/images/logo.png';
import {
    Outlet,
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";
import { useDispatch } from "react-redux";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={match ? "active" : ""}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
}

export const Navigation = (props) => {
    const dispatch = useDispatch();

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
                            <CustomLink to="/sobre"><span>Sobre</span></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/contato"><span>Contato</span></CustomLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <button className="btn-search">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button onClick={() => dispatch(toggleCart())} className="btn-cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
            <Outlet />
        </nav>
    );
}