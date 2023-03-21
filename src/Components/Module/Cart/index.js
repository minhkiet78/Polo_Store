import { Fragment, useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import helper from '~/Components/Support/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartArrowDown, faClose, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Cart({ isShow, setShow }) {
    const [state, dispatch] = useStore();
    const [payment, setPayment] = useState(0);

    useEffect(() => {
        setPayment(state.listCard.reduce((total, curr) => total + curr.total, 0));
    }, [state.listCard]);
    const handleClose = () => {
        setShow(false);
    };
    return (
        <div className={cx('wrapper', isShow ? 'active' : '')}>
            <div className={cx('heading')}>
                <h3>GIỎ HÀNG CỦA BẠN</h3>
                <p>({state.listCard.length} sản phẩm)</p>
                <FontAwesomeIcon icon={faClose} onClick={handleClose} />
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
                                    <p>
                                        Số lượng: <span>{product.quantity}</span>
                                    </p>
                                    <p>
                                        Tổng cộng: <span>{helper.formatMoney(product.total)}</span>
                                    </p>
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
