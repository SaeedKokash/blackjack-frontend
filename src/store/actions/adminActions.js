import axios from 'axios';
import base64 from 'base-64';

import { login, getItems, getItem, addItem, updateItem, deleteItem, adminRequest, adminFail, adminSuccess } from '../features/adminSlicer';

export const loginAdmin = (dispatch, payload, navigate) => {

    const data = {
        userName: payload.target.userName.value,
        password: payload.target.password.value,
    }
    const encodedUser = base64.encode(`${data.userName}:${data.password}`);
    try {
        dispatch(adminRequest());
        axios.post(`${process.env.REACT_APP_API_URL}/login`, {}, {
            headers: {
                Authorization: `Basic ${encodedUser}`,
            },
        })
        .then((res) => { 
            dispatch(login(res.data.token)); 
            // localStorage.setItem('token', res.data.token);
            navigate('/admin/products');
        })
        .catch((err) => { 
            dispatch(adminFail(err.response.data.message));   
        });

    } catch (err) {
        dispatch(adminFail(err.response.data));
    }
};

export const getAdminItems = (dispatch) => {
    try {
        dispatch(adminRequest());
        axios.get(`${process.env.REACT_APP_API_URL}/items`)
        .then((res) => { dispatch(getItems(res.data)); })
        .catch((err) => { dispatch(adminFail(err.response.data)); });
    } catch (err) {
        dispatch(adminFail(err.response.data));
    }
};

export const getAdminItem = (dispatch, id) => {
    try {
        dispatch(adminRequest());
        axios.get(`${process.env.REACT_APP_API_URL}/item/${id}`)
        .then((res) => { dispatch(getItem(res.data)); })
        .catch((err) => { dispatch(adminFail(err.response.data)); });
    } catch (err) {
        dispatch(adminFail(err.response.data));
    }
}

export const getAdminItemByTitle = (dispatch, title) => {
    dispatch(adminRequest());
    try {
        axios.get(`${process.env.REACT_APP_API_URL}/item/title/${title}`)
        .then((res) => { 
            dispatch(getItem(res.data));    
        })
        .catch((err) => { dispatch(adminFail(err.response.data)); });
    } catch (err) {
        dispatch(adminFail(err.response.data));
    }
}

export const addAdminItem = (dispatch, payload, token) => {
    try {
        dispatch(adminRequest());
        axios.post(`${process.env.REACT_APP_API_URL}/item`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => { dispatch(addItem(res.data)); })
        .catch((err) => { dispatch(adminFail(err.response.data)); });
    } catch (err) {
        dispatch(adminFail(err.response.data));
    }
};

export const updateAdminItem = (dispatch, payload, token, itemId) => {

    try {
        dispatch(adminRequest());
        axios.put(`${process.env.REACT_APP_API_URL}/item/${itemId}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => { 
            dispatch(updateItem(res.data));  
        })
        .catch((err) => { dispatch(adminFail(err.response.data)); });
    } catch (err) {
        dispatch(adminFail(err.response.data));
    }
};

export const deleteAdminItem = (dispatch, id, token) => {
    try {
        dispatch(adminRequest());
        axios.delete(`${process.env.REACT_APP_API_URL}/item/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => { dispatch(deleteItem(id)); })
        .catch((err) => { dispatch(adminFail(err.response.data)); });
    } catch (err) {
        dispatch(adminFail(err.response.data));
    }
}

export const exportOrderXlsx = (dispatch, startDate, endDate) => {
    try {
        dispatch(adminRequest());
        if(startDate && endDate) {
            axios.get(`${process.env.REACT_APP_API_URL}/orders/exportxlsx?startDate=${startDate}&endDate=${endDate}`, {
                responseType: 'blob',
            })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${startDate} - ${endDate} orders.xlsx`);
                document.body.appendChild(link);
                link.click();
                dispatch(adminSuccess('Orders exported successfully'));
            })
            .catch((err) => { 
                dispatch(adminFail('No orders found')); 
            });
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}/orders/exportxlsx`, {
                responseType: 'blob',
            })
            .then((res) => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${new Date().toISOString().slice(0, 10)} orders.xlsx`);
                document.body.appendChild(link);
                link.click();
                dispatch(adminSuccess('Orders exported successfully'));
            })
            .catch((err) => { 
                dispatch(adminFail('No orders found')); 
            });
        }
    } catch (err) {
        dispatch(adminFail(err.response.data.massage));
    }
}

// const handleDownloadExcel = async () => {
//     try {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', `${process.env.REACT_APP_API_URL}/orders/exportxlsx`, true);
//         xhr.responseType = 'blob';
//         xhr.onload = function(e) {
//             if (this.status === 200) {
//                 var blob = this.response;
//                 var link = document.createElement('a');
//                 link.href = window.URL.createObjectURL(blob);
//                 link.download = `${new Date().toISOString().slice(0, 10)} orders.xlsx`;
//                 link.click();
//             }
//         };
//         xhr.send();
//     } catch (err) {
//         console.log(err)
//     }
// }
