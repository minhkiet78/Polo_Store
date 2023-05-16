import styles from './Payment.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import helper from '~/Components/Support/helper';
// import image from '~/assets';

const cx = classNames.bind(styles);
function Payment() {
    const [state, dispatch] = useStore();
    const [listCarts, setListCarts] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [optionPayment, setOptionPayment] = useState('last');

    useEffect(() => {
        const newArr = state.listCarts.map((item) => {
            return { ...item, checked: false };
        });
        setListCarts(newArr);
    }, [state.listCarts]);

    const toggleCheckedCart = (id) => {
        const listUpdate = listCarts.map((cart) => {
            if (cart.item_id === id) {
                return { ...cart, checked: !cart.checked };
            } else {
                return cart;
            }
        });
        setListCarts([...listUpdate]);
        setSelectAll(listUpdate.every((item) => item.checked));
    };

    const handleSelectAll = (e) => {
        setSelectAll(e.target.checked);
        const listUpdate = listCarts.map((item) => {
            return { ...item, checked: e.target.checked };
        });
        setListCarts(listUpdate);
    };

    const handleChangeQuantity = (id, quantity) => {
        const listUpdate = listCarts.map((cart) => {
            if (cart.item_id === id) {
                return { ...cart, quantity, total_price: cart.product_id.price * quantity };
            } else {
                return cart;
            }
        });
        setListCarts([...listUpdate]);
    };

    const handleSelectPayment = (value) => {
        setOptionPayment(value);
    };
    return (
        <div className={cx('container mt-5 wrapper')}>
            <Row>
                <Col xs="3">
                    <div className={cx('payment-methoad')}>
                        <div className={cx('heading-methoad')}>
                            <h5>Thông tin thanh toán</h5>
                        </div>
                        <div className={cx('content-payment', 'mt-4')}>
                            <div className={cx('group-action')}>
                                <span
                                    className={cx('mb-2', optionPayment === 'first' ? 'option-active' : '')}
                                    onClick={() => handleSelectPayment('first')}
                                >
                                    Thanh toán trả trước
                                </span>
                                <span
                                    className={cx(optionPayment === 'last' ? 'option-active' : '')}
                                    onClick={() => handleSelectPayment('last')}
                                >
                                    Thanh toán khi nhận hàng
                                </span>
                            </div>
                            <div className={cx('list-option-payment')}>
                                {state.listOptionPayments.map((option) => (
                                    <div>
                                        <img src={option.image} />
                                        <p>{option.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs="9">
                    <div className={cx('header-payment')}>
                        <div className={cx('select-product')}>
                            <input
                                className={cx('input-check_box')}
                                type="checkbox"
                                checked={selectAll}
                                onChange={(e) => handleSelectAll(e)}
                            />
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
                        {listCarts.map((product, idx) => (
                            <CartItem
                                key={idx}
                                cart={product}
                                toggleCheckedCart={toggleCheckedCart}
                                handleChangeQuantity={handleChangeQuantity}
                            />
                        ))}
                    </div>
                    <div className={cx('footer-payment')}>
                        <div className={cx('container', 'content-payment')}>
                            <div className={cx('footer-payment-select')}>
                                <div className={cx('form-select')}>
                                    <input
                                        className={cx('input-check_box')}
                                        checked={selectAll}
                                        type="checkbox"
                                        onChange={(e) => handleSelectAll(e)}
                                    />
                                    <span>
                                        Chọn tất cả (
                                        <span style={{ color: 'var(--primary)' }}>{state.listCarts.length}</span>)
                                    </span>
                                </div>
                                <span className={cx('action-delete')}>Xóa</span>
                            </div>
                            <div className={cx('content-footer-price')}>
                                <span>
                                    Tổng thanh toán (
                                    <span style={{ color: 'var(--primary)' }}>
                                        {listCarts.filter((item) => item.checked).length}
                                    </span>{' '}
                                    Sản phẩm):{' '}
                                    <span className={cx('total-price')}>
                                        {helper.formatMoney(
                                            listCarts
                                                .filter((item) => item.checked)
                                                .reduce((total, curr) => (total += curr.total_price), 0),
                                        )}
                                    </span>{' '}
                                </span>
                                <Button variant="success" disabled>
                                    Mua hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Payment;
