import { useEffect, useState } from 'react';
import styles from './Allproduct.module.scss';
import classNames from 'classnames/bind';
import { Row, Col, Carousel } from 'react-bootstrap';
import Slider from '~/Components/layout/DefaultLayout/Slider';
import Product from '~/Components/Product';
import useStore from '~/store';
import Heading from '~/Components/ButtonComponent/Heading';

import { getAllProduct } from '~/api/managermentProduct';

// import {get}
const cx = classNames.bind(styles);

function Allproduct() {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
        getAll();
    }, []);

    const getAll = async () => {
        const res = await getAllProduct();
        if (res.status === 200) {
            setListProduct(res.data.data);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Slider children={require('src/assets/image/slider.jpeg')} />
            <Heading />

            <div className="container">
                <Row className={cx('baner')}>
                    <Col xs="6" className={cx('baner-sub')}>
                        <div className={cx('baner-wrapper')}>
                            <div className={cx('baner-heading')}>
                                <h2>MỪNG ĐẠI THẮNG - SALE CỰC CĂNG</h2>
                                <p>Duy nhất từ 25/5 - 31/5</p>
                            </div>
                            <p>GIẢM 50% ÁO THUN OVERSIZE</p>
                            <p>BỘ SƯU TẬP POLO CHỈ TỪ 199K</p>
                            <p>GIẢM 10% CHO TẤT CẢ SẢN PHẨM</p>
                        </div>
                    </Col>
                    <Col xs="6">
                        <img className={cx('anh1')} src={require('src/assets/image/anh1.jpeg')} />
                    </Col>
                </Row>
            </div>
            <section id="new-product" className="container">
                <h2 className={cx('new-product')}>NEW COLLECTION</h2>
                <Row className={cx('product-list')}>
                    {listProduct
                        .filter((item) => item.category === 'product')
                        .map((item, idx) => (
                            <Product key={idx} product={item} />
                        ))}
                </Row>
            </section>
            <Slider children={require('src/assets/image/slider2.jpeg')} />
            <section id="polo-product" className="container">
                <h2 className={cx('new-product')}>ORIGINAL POLO</h2>
                <Row className={cx('product-list')}>
                    {listProduct
                        .filter((item) => item.category === 'new_product')
                        .map((item, idx) => (
                            <Product key={idx} product={item} />
                        ))}
                </Row>
            </section>
            <section id="boxer-product" className="container">
                <h2 className={cx('new-product')}>T-SHIRT & BOXER</h2>
                <Row className={cx('product-list')}>
                    {listProduct
                        .filter((item) => item.category === 'product_thun')
                        .map((item, idx) => (
                            <Product key={idx} product={item} />
                        ))}
                </Row>
            </section>
        </div>
    );
}

export default Allproduct;
