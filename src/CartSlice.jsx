import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    countitems: 0
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost}=action.payload;
        const existingItem = state.items.find(item=> item.name===name);
        if(existingItem){
            existingItem.quantity++;
        }else{
            state.items.push({name, image, cost, quantity: 1});
        }
        state.countitems +=1;
    },
    removeItem: (state, action) => {
        const cartitem = state.items.find(item => item.name === action.payload);
        if (cartitem) {
          state.countItems -= cartitem.quantity;
        }
        state.items=state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const {name, quantity}= action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate){
            itemToUpdate.quantity = quantity;
        }
    },
    increaseItem: (state, action) => {
        const itemToIncrease = state.items.find(item => item.name === action.payload);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      } 
      state.countItems += 1;
    },
    decreaseItem: (state, action) => {
        const itemToDecrease = state.items.find(item => item.name === action.payload);
        if (itemToDecrease && itemToDecrease.quantity > 1) {
          itemToDecrease.quantity -= 1;
          state.countItems -= 1;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity, increaseItem, decreaseItem} = CartSlice.actions;

export default CartSlice.reducer;
