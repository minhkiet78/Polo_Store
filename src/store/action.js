import {
    ACTIVE_PRODUCT,
    SHOW_TOAST,
    REMOVE_CART,
    EDIT_CART,
    SET_MODAL_CART,
    SET_MODAL_lOGIN,
    SET_DATA_USER,
    GET_DATA_CART,
} from './contains';

import { getListCartUser } from '~/api/managermentCart';

const setModalCart = (payload) => {
    return {
        type: SET_MODAL_CART,
        payload,
    };
};
const setModalLogin = (payload) => {
    return {
        type: SET_MODAL_lOGIN,
        payload,
    };
};
const activeProduct = (payload) => {
    return {
        type: ACTIVE_PRODUCT,
        payload,
    };
};

const removeCart = (idCart) => {
    return {
        type: REMOVE_CART,
        idCart,
    };
};
const editCart = (payload) => {
    return {
        type: EDIT_CART,
        payload,
    };
};
const showToast = (payload) => {
    return {
        type: SHOW_TOAST,
        payload,
    };
};

const setDataUser = (payload) => {
    return {
        type: SET_DATA_USER,
        payload,
    };
};

const getDatacart = () => {
    return {
        type: GET_DATA_CART,
        payload: new Promise((resolve) => {
            resolve(getListCartUser());
        }),
    };
};

export { activeProduct, showToast, removeCart, editCart, setModalCart, setModalLogin, setDataUser, getDatacart };
