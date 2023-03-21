import { ACTIVE_PRODUCT, ADD_CART } from './contains';

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

export { activeProduct, addCard };
