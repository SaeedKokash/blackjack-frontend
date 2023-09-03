import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        items: [],
        item: {},
        token: null,
        error: null,
        loading: false,
    },
    reducers: {
        adminRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        adminFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        adminSuccess: (state) => {
            state.loading = false;
            state.error = null;
        },

        login: (state, action) => {
            state.token = action.payload;
        },

        getItems: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },

        getItem: (state, action) => {
            state.item = action.payload;
            state.loading = false;
        },

        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
            state.loading = false;
        },

        updateItem: (state, action) => {
            state.items = state.items.map((item) =>
                item._id === action.payload._id ? action.payload : item
            );
            state.loading = false;
        },

        deleteItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id !== action.payload
            );
            state.loading = false;
        },

    },
});

export const { login, getItems, getItem, addItem, updateItem, deleteItem, adminRequest, adminFail, adminSuccess } = adminSlice.actions;

export default adminSlice.reducer;