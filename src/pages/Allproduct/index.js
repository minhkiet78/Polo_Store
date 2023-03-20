import styles from './Allproduct.module.scss'
import classNames from 'classnames/bind';
import Slider from '~/Components/layout/DefaultLayout/Slider';

import { useEffect } from 'react';
import { product, newProduct, product_thun } from '~/Components/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)


function Allproduct() {
    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
    }, [])
    return ( 
        
        <div className={cx('wrapper')}>
            <Slider children={require('src/asetss/image/slider.jpeg')}/>
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

            <div className={cx('baner')}>
                <div className={cx('big-sale')}>
                    <div className={cx('baner-sub')} >
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
            <h2 className={cx('new-product')}>NEW COLLECTION</h2>
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
            <Slider children={require('src/asetss/image/slider2.jpeg')}/>
            <h2 className={cx('new-product')}>ORIGINAL POLO</h2>
            <div className={cx('row', 'product-list')}>
               {newProduct.map((item, idx) => (
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
            <h2 className={cx('new-product')}>T-SHIRT & BOXER</h2>
            <div className={cx('row', 'product-list')}>
               {product_thun.map((item, idx) => (
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
        </div>
    );
}

export default Allproduct;