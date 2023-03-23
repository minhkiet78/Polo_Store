import { ACTIVE_PRODUCT, ADD_CART, SHOW_TOAST, REMOVE_CART } from './contains';

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
const showToast = (payload) => {
    return {
        type: SHOW_TOAST,
        payload,
    };
};

export { activeProduct, addCard, showToast, removeCart };
