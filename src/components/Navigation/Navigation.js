
import { faShoppingCart, faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../assets/scss/Navigation.scss';

import logo from '../../assets/images/logo.png';

export const Navigation = (props) => {
    return (
        <nav className="navigation">
            <div className='container'>
                <div>
                    <a href="#"><img className='logo' src={logo} alt="Pokémon" /></a>
                    <ul className='nav-links'>
                        <li>
                            <a href='#'><span>Home</span></a>
                        </li>
                        <li>
                            <a href='#'><span>Contato</span></a>
                        </li>
                        <li>
                            <a href='#'><span>Categorias</span></a>
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
        </nav>
    );
}