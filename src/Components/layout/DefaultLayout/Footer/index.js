import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
import Button from '~/Components/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)

const list1 = [
    {
        title: 'Giới thiệu HAPPYHOW',
        to: '/home'
    },
    {
        title: 'Chương trình Affiliate',
        to: '/home'
    },
    {
        title: 'Blogger',
        to: '/home'
    },
    {
        title: 'Tin tức',
        to: '/home'
    },

]
const list2 = [
    {
        title: 'Phí vận chuyển',
        to: '/home'
    },
    {
        title: 'Hướng dẫn đặt hàng',
        to: '/home'
    },
    {
        title: 'Chính sách đổi / trả',
        to: '/home'
    },
    {
        title: 'Làm thế nào để theo dỗi',
        to: '/home'
    },
    {
        title: 'Hướng dẫn chọn size',
        to: '/home'
    },
]
const list3 = [
    {
        title: 'Liên hệ',
        to: '/home'
    },
    {
        title: 'Phương thức thanh toán',
        to: '/home'
    },
    {
        title: 'Điểm thưởng',
        to: '/home'
    },
    {
        title: 'Mua hàng online: 0903 000 000',
        to: '/home'
    },
    {
        title: 'Góp ý, khiếu nại: 1800 2086',
        to: '/home'
    },
]
function Footer() {
    return ( 
        <div className={cx('row','wrapper' )} >
            <div className={cx('col-6')}>
                <div className={cx('row')}>
                    <div className={cx('col-4')}>
                        <div className={cx('logo')}>
                            <img src='https://happyhow.me/1428355432291766272/images/22222.svg' alt= 'HAPPYHOW' />
                        </div>
                        {list1.map((item, idx) => (
                            <Button className={cx('link-item')} to ={item.to} key ={idx}>{item.title}</Button>
                        ))}
                    </div>
                    <div className={cx('col-4')}>
                        <h2 className={cx('heading')}>HỖ TRỢ KHÁCH HÀNG</h2>
                        {list2.map((item, idx) => (
                            <Button className={cx('link-item')} key={idx} to = {item.to}>{item.title}</Button>
                        ))}
                    </div>
                    <div className={cx('col-4')}>
                        <h2 className={cx('heading')}>DỊCH VỤ KHÁCH HÀNG</h2>
                        {list3.map((item, idx) => (
                            <Button className={cx('link-item')} key={idx} to = {item.to}>{item.title}</Button>
                        ))}
                    </div>
                </div>
                <div className={cx('license')}>
                    <h2 className={cx('heading_footer')}>© Bản quyền thuộc về HAPPYHOW.vn All rights reserved</h2>
                </div>
            </div>
            <div className={cx('col-6', 'netword')}>    
                <h2 className={cx('heading')}>KẾT NỐI VỚI CHÚNG TÔI </h2>
                <div className={cx('list-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon = {faFacebookF} />
                    <FontAwesomeIcon className={cx('icon')} icon = {faYoutube} />
                    <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                    <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                </div>
                <h2 className={cx('heading')}>ĐĂNG KÝ NHẬN TIN TỪ HAPPYHOW</h2>
                <div className={cx('input')}>
                    <input className={cx('input-email')} placeholder='Địa chỉ email của bạn'></input>
                    <button className={cx('btn-apply')}>Áp dụng</button>
                </div>
                <h2 className={cx('heading')}>PHƯƠNG THỨC THANH TOÁN ONLINE</h2>
                <div className={cx('pay')}>
                    <img src='https://www.happyhow.me/1428355432291766272/d/images/icon-visa.svg' />
                    <img src='https://www.happyhow.me/1428355432291766272/d/images/icon-vnpay.svg' />
                    <img src='https://www.happyhow.me/1428355432291766272/d/images/icon-momo.svg' />
                    <img src='https://www.happyhow.me/1428355432291766272/d/images/icon-mastercard.svg' />
                </div>
            </div>
        </div>
    );
}

export default Footer;