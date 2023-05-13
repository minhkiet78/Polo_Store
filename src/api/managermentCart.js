import axios from 'axios';
import { CREATE_CART, GET_ALL_LIST_CARTS } from './configApi';

const createCart = async (payload) => {
    try {
        return await axios.post(CREATE_CART, payload);
    } catch (error) {
        return error.response;
    }
};

const getListCartUser = async () => {
    try {
        return await axios.get(GET_ALL_LIST_CARTS);
    } catch (error) {
        console.log(error);
    }
};

export { createCart, getListCartUser };
