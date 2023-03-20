import styles from './Newin.module.scss';
import classNames from 'classnames/bind';

import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';
import useStore from '~/store';
import Product from '~/Components/Product';
import Slider from '~/Components/layout/DefaultLayout/Slider';

const carousels = [
    {
        image: require('src/asetss/image/Carousels/Newin/newin1.png'),
        title: 'Fist slide',
    },
    {
        image: require('src/asetss/image/Carousels/Newin/newin2.png'),
        title: 'Second slide',
    },
    {
        image: require('src/asetss/image/Carousels/Newin/newin3.png'),
        title: 'Last slide',
    },
];
const cx = classNames.bind(styles);

function NewIn() {
    const state = useStore();

    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <video className={cx('video')} src={require('src/asetss/videos/videonew_in.mp4')} controls autoPlay muted />
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
            <Slider children={require('src/asetss/image/slider_newin.jpeg')} />
            <h1 className={cx('collection')}>BỘ SƯU TẬP MỚI</h1>
            <div className={cx('row', 'product-list')}>
                {state.product.map((item, idx) => (
                    <Product key={idx} product={item} />
                ))}
            </div>
            <h1 className={cx('heading-slider')}>THAT'S MY BEAR</h1>
            <div className={cx('content_slider')}>
                <div className={cx('background-slider')}></div>
                <Carousel className={cx('container_slider')}>
                    {carousels.map((item, idx) => (
                        <Carousel.Item key={idx} className={cx('slider-item')}>
                            <img className={cx('d-block w-100', 'image-slider')} src={item.image} alt="First slide" />
                            <Carousel.Caption>{/* <h3>{item.title}</h3> */}</Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className={cx('content')}>
                <div className={cx('background-image')}></div>
                <div className={cx('content-image')}>
                    <img className={cx('new-image')} src={require('src/asetss/image/newin/newin1.png')} />
                    <div className={cx('show-product')}>
                        <div className={cx('text-product')}>
                            <h1>ÁO THUN OVERSIZE</h1>
                            <p>
                                Với phom áo Oversize, bạn sẽ cảm thấy vô cùng thoải mái khi phối đồ cũng như dễ dàng thể
                                hiện chất thời trang của riêng mình.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewIn;
