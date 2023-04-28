import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { activeProduct, setModalCart, setModalLogin } from '~/store/action';
import { Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import helper from '../Support/helper';
import useStore from '~/store';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Product({ product }) {
    const [state, dispatch] = useStore();

    const handleAddShop = () => {
        if (localStorage.getItem('user-login')) {
            dispatch(activeProduct(product));
            dispatch(setModalCart(true));
        } else {
            dispatch(setModalLogin(true));
        }
    };
    return (
        <Col xs="6" md="3">
            <div className={cx('product')}>
                <a href={`/product/detail/${product.slug}`}>
                    <img className={cx('product-image')} src={`http://localhost:3000/uploads/${product.image}`}></img>
                </a>
                {product.popular && <span className={cx('ticker', 'ticker_popular')}>Phổ biến</span>}
                {product.new && <span className={cx('ticker', 'ticker_new')}>Mới</span>}
                <div className={cx('group-action')}>
                    <FontAwesomeIcon
                        className={cx('action_icon', 'icon_shop')}
                        icon={faCartPlus}
                        onClick={handleAddShop}
                    />
                </div>

                <a href={`/product/detail/${product.slug}`}>
                    <div className={cx('product-name')}>{product.name}</div>
                    <div className={cx('group-price')}>
                        <span className={cx('product-price')}>{helper.formatMoney(product.price)}</span>
                        {product.distanse && <span className={cx('sale')}>{helper.formatMoney(product.distanse)}</span>}
                    </div>
                </a>
            </div>
        </Col>
    );
}

export default Product;
