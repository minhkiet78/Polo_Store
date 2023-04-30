import {
    ACTIVE_PRODUCT,
    ADD_CART,
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
        case ADD_CART:
            let check = true;
            for (let i = 0; i < state.listCard.length; i++) {
                if (state.listCard[i].id === action.payload.id && state.listCard[i].size === action.payload.size) {
                    check = false;
                    if (state.isEdit) {
                        state.listCard[i] = action.payload;
                    } else {
                        state.listCard[i].quantity += Number(action.payload.quantity);
                        state.listCard[i].total += action.payload.total;
                    }
                    break;
                }
            }
            if (check) {
                return {
                    ...state,
                    listCard: [...state.listCard, action.payload],
                };
            } else {
                const newQuantity = state.listCard.reduce((total, curr) => total + curr.quantity, 0);
                return {
                    ...state,
                    totalQuantity: newQuantity,
                };
            }
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
