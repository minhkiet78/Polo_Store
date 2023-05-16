import { Fragment, useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import helper from '~/Components/Support/helper';
import { removeCart, showToast, activeProduct, setModalCart, editCart, getDatacart } from '~/store/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faCartArrowDown,
    faClose,
    faPenToSquare,
    faTrash,
    faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import { deleteCart } from '~/api/managermentCart';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Cart({ handleToggleCart }) {
    const [state, dispatch] = useStore();
    const [listCart, setListCart] = useState([]);

    useEffect(() => {
        setListCart(state.listCarts);
    }, [state.listCarts]);

    const handleEditcart = (product) => {
        let newProduct = product.product_id;
        newProduct = { ...newProduct, quantity: product.quantity, size: product.size, cart_id: product.item_id };

        dispatch(activeProduct(newProduct));
        dispatch(editCart(true));
        dispatch(setModalCart(true));
    };

    const handleRomoveCart = async (id) => {
        const res = await deleteCart(id);
        if (res.status === 200) {
            dispatch(showToast({ type: 'success', message: res.data.message }));
            dispatch(removeCart(id));
            dispatch(getDatacart());
        } else {
            dispatch(showToast({ type: 'danger', message: 'Xóa thất bại' }));
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h3>GIỎ HÀNG CỦA BẠN</h3>
                <p>({listCart.length} sản phẩm)</p>
                <FontAwesomeIcon className={cx('icon-close')} icon={faClose} onClick={handleToggleCart} />
            </div>
            <div className={cx('sub-heading')}>
                <FontAwesomeIcon icon={faTruckFast} />
                <p>Miễn Phí giao hàng cho đơn hàng trên 500.000đ</p>
            </div>
            <div className={cx('content-cart')}>
                {listCart.length === 0 ? (
                    <div className={cx('cart-rong')}>
                        <FontAwesomeIcon className={cx('icon-cart')} icon={faCartArrowDown} />
                        <p>Giỏ hàng của bạn đang trống</p>
                    </div>
                ) : (
                    <Fragment>
                        {listCart.map((product, idx) => (
                            <div className={cx('product-item')} key={idx}>
                                <img
                                    src={`http://localhost:3000/uploads/${product.product_id.image}`}
                                    className={cx('image-product')}
                                />
                                <div className={cx('content-product')}>
                                    <p>{product.name}</p>
                                    <div className={cx('d-flex')} style={{ gap: '20px' }}>
                                        <p>
                                            Số lượng: <span>{product.quantity}</span>
                                        </p>
                                        <p>
                                            Size: <span>{product.size.toUpperCase()}</span>
                                        </p>
                                    </div>
                                    <div className={cx('content-action')}>
                                        <p>
                                            Tổng cộng: <span>{helper.formatMoney(product.total_price)}</span>
                                        </p>
                                        <div className={cx('group-action')}>
                                            <FontAwesomeIcon
                                                className={cx('icon', 'icon-edit')}
                                                icon={faPenToSquare}
                                                onClick={() => handleEditcart(product)}
                                            />
                                            <FontAwesomeIcon
                                                className={cx('icon', 'icon-delete')}
                                                icon={faTrash}
                                                onClick={() => handleRomoveCart(product.item_id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                )}
            </div>
            <div className={cx('pay')}>
                <Link to="/orders/payment" onClick={handleToggleCart}>
                    <button className={cx('btn-pay')}>
                        Đi đến thanh toán
                        <FontAwesomeIcon className={cx('arow')} icon={faArrowRight} />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
