const API = 'http://localhost:3000/api';

// auth
const REGISTER = `${API}/auth/register`;
const LOGIN = `${API}/auth/login`;

// user

const GET_USER = `${API}/user/profile`;

// product
const CREATE_PRODUCT = `${API}/products/create`;
const GET_ALL_PRODUCT = `${API}/products`;
const GET_DETAIL_PRODUCT = `${API}/products`;
const GET_NEW_PRODUCTS = `${API}/products/new`;
const GET_NEW_POLO = `${API}/products/new_polo`;
const SEARCH_PRODUCTS = `${API}/products`;

// oder
const CREATE_CART = `${API}/cart/create`;
const GET_ALL_LIST_CARTS = `${API}/cart/get_all`;

export {
    REGISTER,
    LOGIN,
    CREATE_PRODUCT,
    GET_ALL_PRODUCT,
    GET_NEW_PRODUCTS,
    GET_NEW_POLO,
    GET_DETAIL_PRODUCT,
    GET_USER,
    SEARCH_PRODUCTS,
    CREATE_CART,
    GET_ALL_LIST_CARTS,
};
