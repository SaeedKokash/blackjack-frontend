import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./features/adminSlicer";
import orderReducer from "./features/orderSlicer";

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        order: orderReducer,
    },
});