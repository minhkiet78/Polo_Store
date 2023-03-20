import styles from './Cart.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartArrowDown, faClose, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function Cart({isShow, setShow}) {

    const handleClose = () => {
        setShow(false)
    }
    return ( 
        <div className={cx('wrapper', isShow ? 'active' : '')}>
            <div className={cx('heading')}>
                <h3>GIỎ HÀNG CỦA BẠN</h3>
                <p>(0 sản phẩm)</p>
                <FontAwesomeIcon icon={faClose} onClick = {handleClose}/>
            </div>
            <div className={cx('sub-heading')}>
                <FontAwesomeIcon icon={faTruckFast} />
                <p>Miễn Phí giao hàng cho đơn hàng trên 500.000đ</p>
            </div>
            <div  className={cx('content-cart')}>
                <div className={cx('cart-rong')}>
                    <FontAwesomeIcon className={cx('icon-cart')} icon={faCartArrowDown} />
                    <p>Giỏ hàng của bạn đang trống</p>
                </div>
            </div>
            <div className={cx('pay')}>
                <div className={cx('sum-pay')}>
                    <h3>Tổng thanh toán:</h3>
                    <span>0đ</span>
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