import axios from 'axios';
import { CREATE_CART, GET_ALL_LIST_CARTS, DELETE_CART, UPDATE_CART } from './configApi';

const getListCartUser = async () => {
    try {
        return await axios.get(GET_ALL_LIST_CARTS);
    } catch (error) {
        console.log(error);
    }
};
const createCart = async (payload) => {
    try {
        return await axios.post(CREATE_CART, payload);
    } catch (error) {
        return error.response;
    }
};
const deleteCart = async (id) => {
    try {
        return await axios.delete(DELETE_CART + `/${id}`);
    } catch (error) {
        return error.response;
    }
};

const updateCart = async (payload) => {
    try {
        return await axios.patch(UPDATE_CART, payload);
    } catch (error) {
        return error.response;
    }
};

export { createCart, getListCartUser, deleteCart, updateCart };
