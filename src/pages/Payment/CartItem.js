import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Dropdown, NavLink } from 'react-bootstrap';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import helper from '~/Components/Support/helper';

import { useState } from 'react';

const cx = classNames.bind(styles);
function CartItem({ cart }) {
    const [quantity, setQuantity] = useState(cart.quantity);
    const [totalPrice, setTotalPrice] = useState(cart.total_price);

    const handleQuantity = (type) => {
        if (type === 'giam' && quantity === 1) return;
        const newQuantity = type === 'tang' ? quantity + 1 : quantity - 1;
        setQuantity(newQuantity);
        setValueTotalPrice(newQuantity);
    };

    const setValueTotalPrice = (number) => {
        setTotalPrice(cart.product_id.price * number);
    };
    return (
        <div className={cx('cart-item_container')}>
            <div className={cx('cart-item_info')}>
                <input type="checkbox" />
                <img src={`http://localhost:3000/uploads/${cart.product_id.image}`} />
                <div className={cx('cart-item_name')}>
                    <h3>{cart.product_id.name}</h3>
                    <Badge className={cx('text-free')} bg="success">
                        7 Ngày Miễn Phí Trả Hàng
                    </Badge>
                </div>
            </div>
            <div className={cx('content-detail')}>
                <Dropdown className={cx('item')}>
                    <Dropdown.Toggle as={NavLink}>
                        <span className="d-block">Màu: trắng</span>
                        <span style={{ marginRight: '4px' }}>Size: {cart.size}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>{/* <Dropdown.Item>Hello there!</Dropdown.Item> */}</Dropdown.Menu>
                </Dropdown>
                <span className={cx('item', 'price')}>{helper.formatMoney(cart.product_id.price)}</span>
                <div className={cx('item', 'quantity')}>
                    <span onClick={() => handleQuantity('tang')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <input value={quantity} />
                    <span onClick={() => handleQuantity('giam')}>
                        <FontAwesomeIcon icon={faMinus} />
                    </span>
                </div>
                <span className={cx('item', 'price')}>{helper.formatMoney(totalPrice)}</span>
                <div className={cx('action item')}>
                    <span className="d-block text-center">Xóa</span>
                    <p className="text-center">Sản phẩm tương tự</p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
