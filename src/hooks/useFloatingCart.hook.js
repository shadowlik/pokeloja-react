import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from "../store";

const useFloatingCart = () => {
  const cartOpened = useSelector((state) => state.cart.open);
  const dispatch = useDispatch();

  const keydown = (e) => {
    if (e.code === "Escape") {
      dispatch(closeCart());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydown, true);
    return () => window.removeEventListener("keydown", keydown, true);
  });

  return {
    cartOpened,
  };
};

export { useFloatingCart };
