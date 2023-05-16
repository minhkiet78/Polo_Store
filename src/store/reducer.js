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

const initState = {
    productActive: null,
    isEdit: false,
    modalCart: false,
    modalLogin: false,
    toast: null,
    listCarts: [],
    totalQuantity: 0,
    dataUser: null,
    listOptionPayments: [
        {
            title: 'Master card',
            image: '~/assets/image/payment/master_card.png',
        },
        {
            title: 'Visa',
            image: '~/assets/image/payment/visa.png',
        },
        {
            title: 'Shoppe pay',
            image: '~/assets/image/payment/shoppe_pay.png',
        },
    ],
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
        case GET_DATA_CART:
            return {
                ...state,
                listCarts: action.payload.data.data || [],
            };
        case EDIT_CART:
            return {
                ...state,
                isEdit: action.payload,
            };
        case REMOVE_CART:
            const newData = state.listCarts.filter((item) => item.item_id !== action.idCart);
            return {
                ...state,
                listCarts: newData,
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
