import styles from './Payment.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import CartItem from './CartItem';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import helper from '~/Components/Support/helper';

const cx = classNames.bind(styles);
function Payment() {
    const [state, dispatch] = useStore();
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div className={cx('container mt-5 wrapper')}>
            <div className={cx('header-payment')}>
                <div className={cx('select-product')}>
                    <input type="checkbox" />
                    <span>Sản phẩm</span>
                </div>
                <div className={cx('header-sub-heading')}>
                    <span>Phân loại</span>
                    <span>Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Số tiền</span>
                    <span>Thao tác</span>
                </div>
            </div>
            <div className={cx('list-cart')}>
                {state.listCarts.map((product, idx) => (
                    <CartItem key={idx} cart={product} />
                ))}
            </div>
            <div className={cx('footer-payment')}>
                <div className={cx('container', 'content-payment')}>
                    <div className={cx('footer-payment-select')}>
                        <input type="checkbox" />
                        <span>Chọn tất cả ({state.listCarts.length})</span>
                        <span>Xóa</span>
                    </div>
                    <div className={cx('content-footer-price')}>
                        <span>
                            Tổng thanh toán ({state.listCarts.length} Sản phẩm):{' '}
                            <span className={cx('total-price')}>{helper.formatMoney(totalPrice)}</span>{' '}
                        </span>
                        <Button variant="success">Mua hàng</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
