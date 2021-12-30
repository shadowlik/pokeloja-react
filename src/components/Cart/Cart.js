import { useDispatch, useSelector } from "react-redux";

import { closeCart } from "../../store";

export const Cart = (props) => {
    const pokemons = useSelector(state => state.cart.items);

    const dispatch = useDispatch();
    console.log(pokemons)
    return (
        <div>
            <div onClick={() => dispatch(closeCart())} className="cart-overlay"></div>
            <div className="cart">
                <span className="cart-title">Carrinho</span>
                {pokemons.length === 0 && <div className="cart-empty">Seu carinho está vazio</div>}

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
                    <button>Finalizar compra</button>
                </div>}
            </div>
        </div>
    );
}