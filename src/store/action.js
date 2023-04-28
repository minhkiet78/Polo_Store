import {
    ACTIVE_PRODUCT,
    ADD_CART,
    SHOW_TOAST,
    REMOVE_CART,
    EDIT_CART,
    SET_MODAL_CART,
    SET_MODAL_lOGIN,
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

const addCard = (payload) => {
    return {
        type: ADD_CART,
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

export { activeProduct, addCard, showToast, removeCart, editCart, setModalCart, setModalLogin };
