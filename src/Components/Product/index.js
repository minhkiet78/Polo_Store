import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Product({ product }) {
    return (
        <div className={cx('col-3')}>
            <div className={cx('product')}>
                <img className={cx('product-image')} src={product.image}></img>
                <FontAwesomeIcon className={cx('tym')} icon={faHeart} />
                <div className={cx('shopping')}>
                    <FontAwesomeIcon className={cx('bag-shopping')} icon={faBagShopping} />
                </div>
                <div className={cx('product-name')}>{product.name}</div>
                <span className={cx('product-price')}>{product.price}</span>
                <span className={cx('sale')}>299.000đ</span>
            </div>
        </div>
    );
}

export default Product;
