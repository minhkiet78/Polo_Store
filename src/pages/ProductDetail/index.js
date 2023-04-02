import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faTape } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useStore from '~/store';
import { addCard, showToast } from '~/store/action';
import listProduct from '~/store/listproduct';
import helper from '~/Components/Support/helper';
const cx = classNames.bind(styles);

const arrStar = [1, 1, 1, 1, 1];
const listSize = [
    { title: 's', value: 's' },
    { title: 'm', value: 'm' },
    { title: 'l', value: 'l' },
];
const listImage = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_Dylen_011122_1_1.jpg?v=1672215751&width=56',
        value: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_Dylen_011122_1_1.jpg?v=1672215751&width=1206',
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_Dylen_011122_2.jpg?v=1672215751&width=64',
        value: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_Dylen_011122_2.jpg?v=1672215751&width=1508',
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_dylen_311022_2_1.jpg?v=1672215751&width=56',
        value: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_dylen_311022_2_1.jpg?v=1672215751&width=1440',
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_dylen_311022_4_1.jpg?v=1672215751&width=64',
        value: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_dylen_311022_4_1.jpg?v=1672215751&width=1440',
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_dylen_311022_5_1.jpg?v=1672215751&width=64',
        value: 'https://cdn.shopify.com/s/files/1/0685/2237/7522/products/Polomanor_ao-polo_dylen_311022_5_1.jpg?v=1672215751&width=1440',
    },
];
function ProductDetail() {
    const params = useParams();
    const [productDetail, setProductDetail] = useState(null);

    const [state, dispatch] = useStore();
    const [size, setSize] = useState('m');
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState(listImage[0]);
    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
        setProductDetail(listProduct.filter((item) => item.id == params.id)[0]);
    }, []);

    const handleAdd = () => {
        let payload = {
            ...productDetail,
            size: size,
            quantity: quantity,
            total: quantity * productDetail.price,
        };
        dispatch(addCard(payload));
        dispatch(showToast({ type: 'success', message: 'Thêm đơn hàng thành công !' }));
        setQuantity(1);
        setSize('m');
    };
    return (
        <div className={cx('container', 'wrapper')}>
            {productDetail && (
                <Row>
                    <Col xs="6" className={cx('container-product')}>
                        <div className={cx('list-image')}>
                            {listImage.map((item, idx) => (
                                <img
                                    src={item.image}
                                    key={idx}
                                    className={cx(image.id === item.id ? 'image-active' : '')}
                                    onClick={() => setImage(item)}
                                />
                            ))}
                        </div>
                        <img className={cx('image-product')} src={image.value} />
                    </Col>
                    <Col xs="6">
                        <div className={cx('content-product')}>
                            <h3 className={cx('heading')}>{productDetail.name}</h3>
                            <div style={{ marginTop: '20px' }}>
                                {arrStar.map((item, idx) => (
                                    <FontAwesomeIcon icon={faStar} key={idx} className={cx('icon-star')} />
                                ))}
                            </div>
                            <p>
                                <span>{helper.formatMoney(productDetail.price)}</span>{' '}
                                {productDetail.distanse && (
                                    <span>Giá niêm yết {helper.formatMoney(productDetail.distanse)}</span>
                                )}
                            </p>
                            <div>
                                <FontAwesomeIcon icon={faTape} className={cx('icon-size')} />
                                <span className={cx('instruct')}>Hướng dẫn chọn size áo</span>
                            </div>
                            <div className={cx('group-action_number')}>
                                <div>
                                    <p>Kích cỡ: {size.toUpperCase()}</p>
                                    <div className={cx('list-size')}>
                                        {listSize.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className={cx(size === item.value ? 'active' : '')}
                                                onClick={() => setSize(item.value)}
                                            >
                                                {item.title.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p>Số lượng: {quantity}</p>
                                    <input
                                        value={quantity}
                                        type="number"
                                        min="1"
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Button variant="primary" className={cx('btn-add')} onClick={handleAdd}>
                                Thêm vào giỏ hàng <FontAwesomeIcon icon={faCartPlus} />
                            </Button>
                        </div>
                        <div className={cx('description')}>
                            <ol>
                                <li>Chất vải Jacquard chống nhăn và thoáng mát cả ngày dài</li>
                                <li>Phom Regular Fit tôn dáng, hợp với hầu hết kích thước cơ thể</li>
                                <li>Thoải mái giặt máy, không ra màu và không mất phom áo</li>
                            </ol>
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default ProductDetail;
