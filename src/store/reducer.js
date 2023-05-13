import {
    ACTIVE_PRODUCT,
    SHOW_TOAST,
    REMOVE_CART,
    EDIT_CART,
    SET_MODAL_CART,
    SET_MODAL_lOGIN,
    SET_DATA_USER,
} from './contains';

const initState = {
    productActive: null,
    isEdit: false,
    modalCart: false,
    modalLogin: false,
    toast: null,
    listCard: [],
    totalQuantity: 0,
    dataUser: null,
};
function reducer(state, action) {
    switch (action.type) {
        case ACTIVE_PRODUCT:
            return {
                ...state,
                productActive: action.payload,
            };
        case SET_MODAL_CART:
            return {
                ...state,
                modalCart: action.payload,
            };
        case SET_MODAL_lOGIN:
            return {
                ...state,
                modalLogin: action.payload,
            };
        case EDIT_CART:
            return {
                ...state,
                isEdit: action.payload,
            };
        case REMOVE_CART:
            const newData = state.listCard.filter(
                (item) => item.id !== action.payload.id || item.size !== action.payload.size,
            );
            return {
                ...state,
                listCard: newData,
            };
        case SHOW_TOAST:
            if (action.payload) {
                return {
                    ...state,
                    toast: {
                        type: action.payload.type,
                        message: action.payload.message,
                    },
                };
            } else {
                return {
                    ...state,
                    toast: null,
                };
            }
        case SET_DATA_USER:
            return {
                ...state,
                dataUser: action.payload,
            };
        default:
            throw new Error('Ivalid action');
    }
}
export { initState, reducer };
