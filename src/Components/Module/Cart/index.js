import { Fragment, useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import helper from '~/Components/Support/helper';
import { removeCart, showToast, activeProduct, setModalCart, editCart } from '~/store/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faCartArrowDown,
    faClose,
    faPenToSquare,
    faTrash,
    faTruckFast,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Cart({ handleToggleCart }) {
    const [state, dispatch] = useStore();
    const [payment, setPayment] = useState(0);

    useEffect(() => {
        setPayment(state.listCard.reduce((total, curr) => total + curr.total, 0));
    }, [state.listCard, state.totalQuantity]);

    const handleEditcart = (product) => {
        dispatch(activeProduct(product));
        dispatch(editCart(true));
        dispatch(setModalCart(true));
    };
    const handleRomoveCart = (product) => {
        dispatch(removeCart(product));
        dispatch(showToast({ type: 'success', message: 'Xóa đơn hàng thành công !' }));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <h3>GIỎ HÀNG CỦA BẠN</h3>
                <p>({state.listCard.length} sản phẩm)</p>
                <FontAwesomeIcon className={cx('icon-close')} icon={faClose} onClick={handleToggleCart} />
            </div>
            <div className={cx('sub-heading')}>
                <FontAwesomeIcon icon={faTruckFast} />
                <p>Miễn Phí giao hàng cho đơn hàng trên 500.000đ</p>
            </div>
            <div className={cx('content-cart')}>
                {state.listCard.length === 0 ? (
                    <div className={cx('cart-rong')}>
                        <FontAwesomeIcon className={cx('icon-cart')} icon={faCartArrowDown} />
                        <p>Giỏ hàng của bạn đang trống</p>
                    </div>
                ) : (
                    <Fragment>
                        {state.listCard.map((product, idx) => (
                            <div className={cx('product-item')} key={idx}>
                                <img src={product.image} className={cx('image-product')} />
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
                                            Tổng cộng: <span>{helper.formatMoney(product.total)}</span>
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
                                                onClick={() => handleRomoveCart(product)}
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
                <div className={cx('sum-pay')}>
                    <h3>Tổng thanh toán:</h3>
                    <span>{helper.formatMoney(payment)}</span>
                </div>
                <button className={cx('btn-pay')}>
                    Thanh toán
                    <FontAwesomeIcon className={cx('arow')} icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default Cart;
