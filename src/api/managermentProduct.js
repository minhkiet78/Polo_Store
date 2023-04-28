import axios from 'axios';

import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_NEW_POLO, GET_NEW_PRODUCTS, GET_DETAIL_PRODUCT } from './configApi';

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

const getDetailProduct = async (slug) => {
    try {
        return await axios.get(GET_DETAIL_PRODUCT + `/${slug}`);
    } catch (error) {
        console.log(error);
    }
};

const getNewProduct = async () => {
    try {
        return await axios.get(GET_NEW_PRODUCTS);
    } catch (error) {
        console.log(error);
    }
};
const getNewPolo = async () => {
    try {
        return await axios.get(GET_NEW_POLO);
    } catch (error) {
        console.log(error);
    }
};

export { createProduct, getAllProduct, getNewProduct, getNewPolo, getDetailProduct };
