import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  pizzas: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      state.totalPrice += action.payload.price;
      const findPizza = state.pizzas.find((obj) => obj.id === action.payload.id);

      if (findPizza) {
        findPizza.counterAdd++;
      } else {
        state.pizzas.push({
          ...action.payload,
          counterAdd: 1,
        });
      }
    },
    minusPizza(state, action) {
      const findPizza = state.pizzas.find((obj) => obj.id === action.payload.id);

      if (findPizza) {
        findPizza.counterAdd--;
        state.totalPrice -= action.payload.price;
      }
    },
    removePizza(state, action) {
      state.pizzas = state.pizzas.filter((obj) => obj.id !== action.payload);
    },
    clearCart(state) {
      state.pizzas = [];
      state.totalPrice = 0;
    },
  },
});

export const { addPizza, removePizza, clearCart, minusPizza } = cartSlice.actions;

export default cartSlice.reducer;
