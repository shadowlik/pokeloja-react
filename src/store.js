import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    open: false,
    items: [],
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
        return;
      }

      state.items.push({
        qnty: 1,
        ...action.payload
      });
    }
  }
})

export const { toggleCart, openCart, closeCart, addToCart } = counterSlice.actions

export default configureStore({
  reducer: {
    cart: counterSlice.reducer,
  }
})