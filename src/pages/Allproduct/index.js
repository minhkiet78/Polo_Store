import { useEffect, useState } from 'react';
import styles from './Allproduct.module.scss';
import classNames from 'classnames/bind';
import { Row } from 'react-bootstrap';
import Slider from '~/Components/layout/DefaultLayout/Slider';
import Product from '~/Components/Product';
import ModalCart from '~/Components/Support/ModalCart';
import useStore from '~/store';

const cx = classNames.bind(styles);

function Allproduct() {
    const [state, dispatch] = useStore();
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
    }, []);

    const handleShow = () => {
        setShow(true);
    };
    const handleCloseShow = () => setShow(false);
    return (
        <div className={cx('wrapper')}>
            <Slider children={require('src/asetss/image/slider.jpeg')} />
            <div className={cx('sub')}>
                <h1 className={cx('sub-heading1')}>Mã ưu đãi</h1>
                <div className={cx('sub-heading')}>
                    <h1>G10</h1>
                    <p>Giảm 10% cho đơn hàng đầu tiên</p>
                </div>
                <div className={cx('sub-heading')}>
                    <h1>BEAR</h1>
                    <p>Freeship cho đơn hàng từ 500k</p>
                </div>
            </div>

            <div className={cx('baner')}>
                <div className={cx('big-sale')}>
                    <div className={cx('baner-sub')}>
                        <div className={cx('baner-wrapper')}>
                            <div className={cx('baner-heading')}>
                                <h2>MỪNG ĐẠI THẮNG - SALE CỰC CĂNG</h2>
                                <p>Duy nhất từ 25/5 - 31/5</p>
                            </div>
                            <p>GIẢM 50% ÁO THUN OVERSIZE</p>
                            <p>BỘ SƯU TẬP POLO CHỈ TỪ 199K</p>
                            <p>GIẢM 10% CHO TẤT CẢ SẢN PHẨM</p>
                        </div>
                    </div>
                    <img className={cx('anh1')} src={require('src/asetss/image/anh1.jpeg')} />
                </div>
            </div>
            <section id="new-product">
                <h2 className={cx('new-product')}>NEW COLLECTION</h2>
                <Row className={cx('product-list')}>
                    {state.product.map((item, idx) => (
                        <Product key={idx} product={item} handleShow={handleShow} />
                    ))}
                </Row>
            </section>
            <Slider children={require('src/asetss/image/slider2.jpeg')} />
            <section id="polo-product">
                <h2 className={cx('new-product')}>ORIGINAL POLO</h2>
                <Row className={cx('product-list')}>
                    {state.newProduct.map((item, idx) => (
                        <Product key={idx} product={item} handleShow={handleShow} />
                    ))}
                </Row>
            </section>
            <section id="boxer-product">
                <h2 className={cx('new-product')}>T-SHIRT & BOXER</h2>
                <Row className={cx('product-list')}>
                    {state.product_thun.map((item, idx) => (
                        <Product key={idx} product={item} handleShow={handleShow} />
                    ))}
                </Row>
            </section>
            {show && <ModalCart show={show} handleCloseShow={handleCloseShow} />}
        </div>
    );
}

export default Allproduct;
