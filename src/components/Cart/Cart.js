import { faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

import { closeCart } from "../../store";

export const Cart = (props) => {
    const pokemons = useSelector(state => state.cart.items);

    const dispatch = useDispatch();
    
    const cartClose = () => dispatch(closeCart());

    return (
        <div>
            <div onClick={cartClose} className="cart-overlay"></div>
            <div className="cart">
                <div className="cart-title">
                    <div className="pokeball"></div>
                    <span>Pokebola</span>
                    <div className="cart-close" onClick={cartClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                {pokemons.length === 0 && <div className="cart-empty">Sua Pokebola está vazia</div>}

                {pokemons.length > 0 && <div>
                    {pokemons.map((pokemon) => <div className="cart-pokemon-item">
                        <img src={pokemon.imageUrl} alt={pokemon.name} />
                        <div>
                            <p>{pokemon.name}</p>
                            <p>Quantidade: {pokemon.qnty}</p>
                            <p>Preço: {pokemon.qnty * pokemon.price}</p>
                        </div>
                    </div>)}
                    <p>Total: R$ XXXXX,XX</p>
                    <button className="btn-buy">Finalizar compra</button>
                </div>}
            </div>
        </div>
    );
}