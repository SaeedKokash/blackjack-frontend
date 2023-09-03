import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        order: [],
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        isConfirmed: false,
        error: null,
        loading: false,
    },
    reducers: {
        orderRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.isConfirmed = false;
        },

        orderFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        orderSuccess: (state, action) => {
            state.loading = false;
            state.order = action.payload;
            state.isConfirmed = true;
        },

        addToCart: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload._id);
            if (item) {
                item.quantity++;
                localStorage.setItem("cart", JSON.stringify(state.cart));
            } else {
                localStorage.setItem("cart", JSON.stringify(
                    [...localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
                    {...action.payload, quantity: 1}
                ]
                ));
            }
            state.cart = JSON.parse(localStorage.getItem("cart"));
        },

        removeItemFromCart: (state, action) => {
            const newCart = state.cart.filter((item) => item._id !== action.payload._id);
            localStorage.setItem("cart", JSON.stringify(newCart));
            state.cart = JSON.parse(localStorage.getItem("cart"));
        },

        removeFromCart: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload._id);
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem("cart", JSON.stringify(state.cart));
            } 
            else if (item.quantity === 1) {
                // remove the item from the cart
                const newCart = state.cart.filter((item) => item._id !== action.payload._id);
                localStorage.setItem("cart", JSON.stringify(newCart));
            }
            state.cart = JSON.parse(localStorage.getItem("cart"));
        },

        clearCart: (state) => {
            localStorage.removeItem("cart");
            state.cart = [];
        }

    },
});

export const { orderSuccess, orderRequest, orderFail, addToCart, removeItemFromCart, removeFromCart, clearCart } = orderSlice.actions;

export default orderSlice.reducer;
        
