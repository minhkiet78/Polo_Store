import styles from './Newin.module.scss';
import classNames from 'classnames/bind';

import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import Product from '~/Components/Product';
import Heading from '~/Components/ButtonComponent/Heading';
import { getNewProduct } from '~/api/managermentProduct';

const carousels = [
    {
        image: require('src/assets/image/Carousels/Newin/newin1.png'),
    },
    {
        image: require('src/assets/image/Carousels/Newin/newin2.png'),
    },
    {
        image: require('src/assets/image/slider_newin.jpeg'),
    },
    {
        image: require('src/assets/image/Carousels/Newin/newin3.png'),
    },
];
const cx = classNames.bind(styles);

function NewIn() {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
        getListNewProducts();
    }, []);
    const getListNewProducts = async () => {
        const res = await getNewProduct();
        if (res.status == 200) {
            setListProduct(res.data.data);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <video className={cx('video')} src={require('src/assets/videos/videonew_in.mp4')} controls autoPlay muted />
            <Heading />
            <h1 className={cx('heading-slider')}>THAT'S MY BEAR</h1>
            <div className="container">
                <Carousel className={cx('container_slider')}>
                    {carousels.map((item, idx) => (
                        <Carousel.Item key={idx} className={cx('slider-item p-0')}>
                            <div
                                className={cx('d-block', 'image-slider')}
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="container">
                <h1 className={cx('collection')}>BỘ SƯU TẬP MỚI</h1>
                <Row className={cx('product-list')}>
                    {listProduct.map((item, idx) => (
                        <Product key={idx} product={item} />
                    ))}
                </Row>
                <div>
                    <div className={cx('background-image')}></div>
                    <div className={cx('content-image')}>
                        <img className={cx('new-image')} src={require('src/assets/image/newin/newin1.png')} />
                        <div className={cx('show-product')}>
                            <div className={cx('text-product')}>
                                <h1>ÁO THUN OVERSIZE</h1>
                                <p>
                                    Với phom áo Oversize, bạn sẽ cảm thấy vô cùng thoải mái khi phối đồ cũng như dễ dàng
                                    thể hiện chất thời trang của riêng mình.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewIn;
