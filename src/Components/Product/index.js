import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { activeProduct } from '~/store/action';
import { Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import helper from '../Support/helper';
import useStore from '~/store';

const cx = classNames.bind(styles);
function Product({ product, handleShow }) {
    const [state, dispatch] = useStore();

    const handleAddShop = () => {
        dispatch(activeProduct(product));
        handleShow();
    };
    return (
        <Col xs="6" md="3">
            <div className={cx('product')}>
                <img className={cx('product-image')} src={product.image}></img>
                {product.popular && <span className={cx('ticker', 'ticker_popular')}>Phổ biến</span>}
                {product.new && <span className={cx('ticker', 'ticker_new')}>Mới</span>}
                <div className={cx('group-action')}>
                    <FontAwesomeIcon className={cx('action_icon', 'icon_heart')} icon={faHeart} />
                    <FontAwesomeIcon
                        className={cx('action_icon', 'icon_shop')}
                        icon={faCartPlus}
                        onClick={handleAddShop}
                    />
                </div>

                <div className={cx('product-name')}>{product.name}</div>
                <div className={cx('group-price')}>
                    <span className={cx('product-price')}>{helper.formatMoney(product.price)}</span>
                    <span className={cx('sale')}>{helper.formatMoney(299000)}</span>
                </div>
            </div>
        </Col>
    );
}

export default Product;
