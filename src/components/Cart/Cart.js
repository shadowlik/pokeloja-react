import { useDispatch } from "react-redux";

import { closeCart } from "../../store";

export const Cart = (props) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div onClick={() => dispatch(closeCart())} className="cart-overlay"></div>
            <div className="cart">
                <span>Carrinho</span>
            </div>
        </div>
    );
}