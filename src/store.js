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
    closeCart: (state, action) => {
      state.open = false;
    },
    addToCart: (state, action) => {
      state.items.push(action);
    }
  }
})

export const { toggleCart, openCart, closeCart, addToCart } = counterSlice.actions

export default configureStore({
  reducer: {
    cart: counterSlice.reducer,
  }
})