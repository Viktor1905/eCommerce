import { cartResponse } from '../../api/cart-api/cart-types.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLastActiveCart } from '../../api/cart-api/get-cart.ts';
import { getTokenFromCookie } from '../../pages/profile/ProfilePage.tsx';

export const refreshCart = createAsyncThunk('cart/refreshCart', async () => {
  if (!getTokenFromCookie()) {
    return null;
  }
  return await getLastActiveCart();
});

const initialState: CartState = {
  cart: null,
  productNumber: 0,
};
export interface CartState {
  cart: cartResponse | null;
  productNumber: number;
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProductNumber: (state, action: PayloadAction<number>) => {
      state.productNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refreshCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      if (action.payload?.lineItems) {
        state.productNumber = action.payload.lineItems.length;
      }
    });
  },
});
export const { setProductNumber } = cartSlice.actions;
export default cartSlice.reducer;
