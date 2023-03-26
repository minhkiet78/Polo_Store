import { useEffect } from 'react';
import styles from './Allproduct.module.scss';
import classNames from 'classnames/bind';
import { Row, Col, Carousel } from 'react-bootstrap';
import Slider from '~/Components/layout/DefaultLayout/Slider';
import Product from '~/Components/Product';
import useStore from '~/store';
import Heading from '~/Components/ButtonComponent/Heading';
const cx = classNames.bind(styles);

function Allproduct() {
    const [state] = useStore();
    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slider children={require('src/asetss/image/slider.jpeg')} />
            <Heading />

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
                    <Carousel>
                        {state.newProduct.slice(0, 1).map((item) => (
                            <Carousel.Item key={item.id}>
                                <Row>
                                    <Product product={item} />
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs="6">
                    <img className={cx('anh1')} src={require('src/asetss/image/anh1.jpeg')} />
                </Col>
            </Row>
            <section id="new-product">
                <h2 className={cx('new-product')}>NEW COLLECTION</h2>
                <Row className={cx('product-list')}>
                    {state.product.map((item, idx) => (
                        <Product key={idx} product={item} />
                    ))}
                </Row>
            </section>
            <Slider children={require('src/asetss/image/slider2.jpeg')} />
            <section id="polo-product">
                <h2 className={cx('new-product')}>ORIGINAL POLO</h2>
                <Row className={cx('product-list')}>
                    {state.newProduct.map((item, idx) => (
                        <Product key={idx} product={item} />
                    ))}
                </Row>
            </section>
            <section id="boxer-product">
                <h2 className={cx('new-product')}>T-SHIRT & BOXER</h2>
                <Row className={cx('product-list')}>
                    {state.product_thun.map((item, idx) => (
                        <Product key={idx} product={item} />
                    ))}
                </Row>
            </section>
        </div>
    );
}

export default Allproduct;
