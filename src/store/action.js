import {
    ACTIVE_PRODUCT,
    SHOW_TOAST,
    REMOVE_CART,
    EDIT_CART,
    SET_MODAL_CART,
    SET_MODAL_lOGIN,
    SET_DATA_USER,
    SET_DATA_CART,
} from './contains';

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

const removeCart = (payload) => {
    return {
        type: REMOVE_CART,
        payload,
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

const setDatacart = (payload) => {
    return {
        type: SET_DATA_CART,
        payload,
    };
};

export { activeProduct, showToast, removeCart, editCart, setModalCart, setModalLogin, setDataUser, setDatacart };
