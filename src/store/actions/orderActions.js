import axios from 'axios';

import { orderSuccess, orderRequest, orderFail, addToCart, removeItemFromCart, removeFromCart, clearCart } from '../features/orderSlicer';

export const addOrder = (dispatch, payload, navigate, select) => {
    // remove the first number from the phone number if it's 0
    if (payload.phoneNumber[0] === "0") {
        payload.phoneNumber = payload.phoneNumber.slice(1);
    }
    // add the country code to the phone number
    if (select === "JO") {
        payload.country = "Jordan";
        payload.phoneNumber = "+962" + payload.phoneNumber;
    } else if (select === "SA") {
        payload.country = "Saudi Arabia";
        payload.phoneNumber = "+966" + payload.phoneNumber;
    }

    payload.orderId = Math.floor(Math.random() * 1000000000);
    
    try {
        // dispatch(orderRequest())
        // axios.post(`${process.env.REACT_APP_API_URL}/order`, payload)
        // .then((res) => { 
            // console.log(payload)
            dispatch(orderSuccess(payload)); 
            dispatch(clearCart());
            navigate(`/success/${payload.orderId}`, { state: { order: payload } });
            
        // })
        // .catch((err) => { dispatch(orderFail(err.response.data)); });
    } catch (err) {
        dispatch(orderFail("failed to add order"));
    }
};

export const addCart = (dispatch, payload, toast) => {
    dispatch(addToCart(payload));
    if (!toast) return;
    toast({
        title: "Item added to cart.",
        status: "success",
        duration: 600,
        isClosable: true,
        // position: "center",
    });
};

export const removeItemCart = (dispatch, payload) => {
    dispatch(removeItemFromCart(payload));
};

export const removeCart = (dispatch, payload) => {
    dispatch(removeFromCart(payload));
};

export const deleteCart = (dispatch) => {
    dispatch(clearCart());
};




