import axios from 'axios';

import { CREATE_PRODUCT, GET_ALL_PRODUCT } from './configApi';

const createProduct = async (payload) => {
    try {
        return await axios.post(CREATE_PRODUCT, payload);
    } catch (error) {
        return error.reponse;
    }
};
const getAllProduct = async () => {
    try {
        return await axios.get(GET_ALL_PRODUCT);
    } catch (error) {
        console.log(error);
    }
};
export { createProduct, getAllProduct };
