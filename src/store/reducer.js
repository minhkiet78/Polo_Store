import { ACTIVE_PRODUCT, ADD_CART, SHOW_TOAST, REMOVE_CART } from './contains';

const initState = {
    productActive: null,
    toast: null,
    listCard: [],
    product: [
        {
            id: 31,
            image: require('src/asetss/image/polo/polo1.jpeg'),
            name: 'Áo thun nam MyBear chất vải CVC',
            price: 215000,
            popular: true,
        },
        {
            id: 12,
            image: require('src/asetss/image/polo/polo2.jpeg'),
            name: 'Áo Polo Nam OriginalBear Chất Vải CVC',
            price: 270000,
        },
        {
            id: 13,
            image: require('src/asetss/image/polo/polo3.jpeg'),
            name: 'Áo Polo Nam Leno Họa Tiết Glen',
            price: 290000,
            new: true,
        },
        {
            id: 14,
            image: require('src/asetss/image/polo/polo4.jpeg'),
            name: 'Áo Polo Nam BasicBear Chất Vải CVC',
            price: 270000,
            popular: true,
        },
        {
            id: 15,
            image: require('src/asetss/image/polo/polo5.jpeg'),
            name: 'Áo Polo Nam BillionBear Chất Vải CVC',
            price: 270000,
            popular: true,
        },
        {
            id: 16,
            image: require('src/asetss/image/polo/polo6.jpeg'),
            name: 'Áo Polo Nam ElegantBear Chất Vải CVC',
            price: 270000,
        },
        {
            id: 17,
            image: require('src/asetss/image/polo/polo7.jpeg'),
            name: 'Áo Polo Nam RichBear Chất Vải CVC',
            price: 270000,
            new: true,
        },
        {
            id: 18,
            image: require('src/asetss/image/polo/polo8.jpeg'),
            name: 'Áo Polo Nam GentleBear Chất Vải CVC',
            price: 270000,
            new: true,
        },
        {
            id: 19,
            image: require('src/asetss/image/polo/polo9.jpeg'),
            name: 'Áo Polo Nam Fly Chất Vải CVC',
            price: 270000,
        },
        {
            id: 310,
            image: require('src/asetss/image/polo/polo10.jpeg'),
            name: 'Áo Polo Nam Floy Chất Vải CVC',
            price: 270000,
            popular: true,
        },
        {
            id: 311,
            image: require('src/asetss/image/polo/polo11.jpeg'),
            name: 'Áo Polo Nam Flen Chất Vải CVC',
            price: 270000,
            popular: true,
        },
        {
            id: 312,
            image: require('src/asetss/image/polo/polo12.jpeg'),
            name: 'Áo Polo Nam Mio Chất Vải CVC',
            price: 270000,
        },
        {
            id: 313,
            image: require('src/asetss/image/polo/polo13.jpeg'),
            name: 'Áo Polo Nam Uni Chất Vải Jacquard Giả Jeans',
            price: 290000,
            new: true,
        },
        {
            id: 314,
            image: require('src/asetss/image/polo/polo14.jpeg'),
            name: 'Áo Polo Nam Dylen Họa Tiết Glen',
            price: 290000,
        },
        {
            id: 315,
            image: require('src/asetss/image/polo/polo15.jpeg'),
            name: 'Áo Polo Cian Nam Chất Vải CVC',
            price: 199000,
            new: true,
        },
        {
            id: 316,
            image: require('src/asetss/image/polo/polo16.jpeg'),
            name: 'Áo Polo Nam Enzo Chất Vải CVC',
            price: 270000,
        },
        {
            id: 317,
            image: require('src/asetss/image/polo/polo17.jpeg'),
            name: 'Áo Polo Nam Aron Họa Tiết Madras',
            price: 290000,
            popular: true,
        },
        {
            id: 318,
            image: require('src/asetss/image/polo/polo18.jpeg'),
            name: 'Áo Polo Nam Fin Chất Vải CVC',
            price: 270000,
        },
        {
            id: 319,
            image: require('src/asetss/image/polo/polo19.jpeg'),
            name: 'Áo Polo Nam Kola Chất Vải CVC',
            price: 199000,
        },
        {
            id: 120,
            image: require('src/asetss/image/polo/polo20.jpeg'),
            name: 'Áo Polo Nam Tover Vải CVC Màu Nâu Trendy',
            price: 199000,
            new: true,
        },
    ],

    newProduct: [
        {
            id: 21,
            image: require('src/asetss/image/newPolo/newpolo1.jpeg'),
            name: 'Áo Polo Nam Basic Vải CVC Gam Màu Trendy',
            price: 250000,
            popular: true,
        },
        {
            id: 22,
            image: require('src/asetss/image/newPolo/newpolo2.jpeg'),
            name: 'Áo Polo Nam Nelux Chất Vải CVC',
            price: 250000,
            new: true,
        },
        {
            id: 31,
            image: require('src/asetss/image/newPolo/newpolo3.jpeg'),
            name: 'Áo Polo Nam Doking Chất Vải CVC',
            price: 299000,
            new: true,
        },
        {
            id: 24,
            image: require('src/asetss/image/newPolo/newpolo4.jpeg'),
            name: 'Áo Polo Nam Gobo Chất Vải CVC',
            price: 199000,
        },
        {
            id: 25,
            image: require('src/asetss/image/newPolo/newpolo5.jpeg'),
            name: 'Áo Polo Nam Bufo Chất Vải CVC',
            price: 270000,
            popular: true,
        },
        {
            id: 26,
            image: require('src/asetss/image/newPolo/newpolo6.jpeg'),
            name: 'Áo Polo Nam Xaru Họa Tiết Dottie',
            price: 270000,
            popular: true,
        },
        {
            id: 27,
            image: require('src/asetss/image/newPolo/newpolo7.jpeg'),
            name: 'Áo Polo Nam Tedi Họa Tiết Gấu',
            price: 270000,
        },
        {
            id: 28,
            image: require('src/asetss/image/newPolo/newpolo8.jpeg'),
            name: 'Áo Polo Nam Sipa Họa Tiết Stripe',
            price: 270000,
            new: true,
        },
        {
            id: 29,
            image: require('src/asetss/image/newPolo/newpolo9.jpeg'),
            name: 'Áo Polo Nam Uco Chất Vải CVC',
            price: 250000,
            new: true,
        },
        {
            id: 210,
            image: require('src/asetss/image/newPolo/newpolo10.jpeg'),
            name: 'Áo Polo Nam Tabi Họa Tiết Typography',
            price: 270000,
        },
        {
            id: 211,
            image: require('src/asetss/image/newPolo/newpolo11.jpeg'),
            name: 'Áo Polo Nam Dlo Chất Vải CVC',
            price: 250000,
            new: true,
        },
        {
            id: 212,
            image: require('src/asetss/image/newPolo/newpolo12.jpeg'),
            name: 'Áo Polo Nam Don Chất Vải CVC',
            price: 199000,
            new: true,
        },
    ],

    product_thun: [
        {
            id: 31,
            image: require('src/asetss/image/thun_nam/thun1.jpeg'),
            name: 'Áo Thun Nam MyBear Chất Vải CVC',
            price: 215000,
            new: true,
        },
        {
            id: 32,
            image: require('src/asetss/image/thun_nam/thun2.jpeg'),
            name: 'Áo Thun Nam UniqueBear Chất Vải Cotton Sợi Đôi',
            price: 250000,
        },
        {
            id: 33,
            image: require('src/asetss/image/thun_nam/thun3.jpeg'),
            name: 'Áo Thun Nam TravelBear Chất Vải Cotton Sợi Đôi',
            price: 140000,
        },
        {
            id: 34,
            image: require('src/asetss/image/thun_nam/thun4.jpeg'),
            name: 'Áo Thun Nam MotoBear Chất Vải Cotton Sợi Đôi',
            price: 140000,
            popular: true,
        },
        {
            id: 35,
            image: require('src/asetss/image/thun_nam/thun5.jpeg'),
            name: 'Áo Thun Nam StreetBear Chất Vải Cotton Sợi Đôi',
            price: 140000,
            popular: true,
        },
        {
            id: 36,
            image: require('src/asetss/image/thun_nam/thun6.jpeg'),
            name: 'Áo Thun Nam SimpleBear Chất Vải Cotton Sợi Đôi',
            price: 140000,
        },
        {
            id: 37,
            image: require('src/asetss/image/thun_nam/thun7.jpeg'),
            name: 'Áo Thun Nam WhiteBear Chất Vải Cotton Sợi Đôi',
            price: 140000,
            new: true,
        },
        {
            id: 38,
            image: require('src/asetss/image/thun_nam/thun8.jpeg'),
            name: 'Áo Thun Nam ChillBear Chất Vải Cotton Compact',
            price: 140000,
            new: true,
        },
        {
            id: 39,
            image: require('src/asetss/image/thun_nam/thun9.jpeg'),
            name: 'Áo Thun Nam Uri Chất Vải Thun Gân',
            price: 140000,
        },
        {
            id: 310,
            image: require('src/asetss/image/thun_nam/thun10.jpeg'),
            name: 'Áo Thun Nam Basic Vải Cotton Gam Màu Trendy',
            price: 134000,
        },
        {
            id: 311,
            image: require('src/asetss/image/thun_nam/thun11.jpeg'),
            name: 'Áo Thun Nam Clas Chất Vải Cotton Compact',
            price: 179000,
        },
        {
            id: 312,
            image: require('src/asetss/image/thun_nam/thun12.jpeg'),
            name: 'Áo Thun Nam Hado Chất vải CVC',
            price: 319000,
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
        case ADD_CART:
            let check = true;
            for (const i = 0; i < state.listCard.length; i++) {
                if (state.listCard[i].id === action.payload.id) {
                    check = false;
                    state.listCard[i].quantity += Number(action.payload.quantity);
                    state.listCard[i].total += action.payload.total;
                    break;
                }
            }
            if (check) {
                return {
                    ...state,
                    listCard: [...state.listCard, action.payload],
                };
            } else {
                return {
                    ...state,
                };
            }
        case REMOVE_CART:
            const newData = state.listCard.filter((item) => item.id !== action.payload);
            return {
                ...state,
                listCard: newData,
            };
        case SHOW_TOAST:
            if (action.payload != null) {
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
        default:
            throw new Error('Ivalid action');
    }
}
export { initState, reducer };
