import styles from './Newin.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Slider from '~/Components/layout/DefaultLayout/Slider';
import { product } from '~/Components/Product';
import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';

const carousels = [
    {
        image: require('src/asetss/image/Carousels/Newin/newin1.png'),
        title: 'Fist slide'
    },
    {
        image: require('src/asetss/image/Carousels/Newin/newin2.png'),
        title: 'Second slide'

    },
    {
        image: require('src/asetss/image/Carousels/Newin/newin3.png'),
        title: 'Last slide'

    }
]
const cx = classNames.bind(styles)

function NewIn() {
    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
    }, [])
    return ( 
        <div className={cx('wrapper')} >
            <video className={cx('video')} src = {require('src/asetss/videos/videonew_in.mp4')} controls autoPlay muted/>
            <div className={cx('sub')}>
                <h1 className={cx('sub-heading1')}>Mã ưu đãi</h1>
                <div  className={cx('sub-heading')}>
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
               {product.map((item, idx) => (
                    <div className={cx('col-3')} key = {idx}>
                        <div className={cx('product')}>
                            <img className={cx('product-image')} src={item.image}></img>
                            <FontAwesomeIcon className={cx('tym')} icon={faHeart} />
                            <div className={cx('shopping')}>
                                <FontAwesomeIcon className={cx('bag-shopping')} icon={faBagShopping} />
                            </div>
                            <div className={cx('product-name')}>{item.name}</div>
                            <span className={cx('product-price')}>{item.price}</span>
                            <span className={cx('sale')}>299.000đ</span>
                        </div>
                </div>
               ))}
            </div>
            <h1 className={cx('heading-slider')}>THAT'S MY BEAR</h1>
            <div className={cx('content_slider')}>
                <div className={cx('background-slider')}>
                    
                </div>
                <Carousel className={cx('container_slider')}>
                {carousels.map((item, idx) => (
                    <Carousel.Item key={idx} className = {cx('slider-item')}> 
                        <img
                            className={cx('d-block w-100', 'image-slider')}
                            src={item.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>{item.title}</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                
            </Carousel>
            </div>
            <div className={cx('content')} >
                <div className={cx('background-image')}></div>
                <div className={cx('content-image')}>
                    <img  className={cx('new-image')} src={require('src/asetss/image/newin/newin1.png')} />
                    <div className={cx('show-product')}>
                        <div className={cx('text-product')}>
                            <h1>ÁO THUN OVERSIZE</h1>
                            <p>Với phom áo Oversize, bạn sẽ cảm thấy vô cùng thoải mái khi phối đồ cũng như dễ dàng thể hiện chất thời trang của riêng mình.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewIn;