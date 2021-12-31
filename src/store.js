import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    open: false,
    items: [],
    total: 0,
  },
  reducers: {
    toggleCart: state => {
      state.open = !state.open;
    },
    openCart: state => {
      state.open = true;
    },
    closeCart: (state) => {
      state.open = false;
    },
    addToCart: (state, action) => {
      const hasPokemonAdded = state.items.findIndex((pokemon) => pokemon.id === action.payload.id);

      if (hasPokemonAdded > -1) {
        state.items[hasPokemonAdded].qnty += 1;
       
      } else {
        state.items.push({
          qnty: 1,
          ...action.payload
        });
      }

      state.total = state.items.reduce((pv, item) => pv + item.price * item.qnty, 0)
    }
  }
})

export const { toggleCart, openCart, closeCart, addToCart } = counterSlice.actions

export default configureStore({
  reducer: {
    cart: counterSlice.reducer,
  }
})