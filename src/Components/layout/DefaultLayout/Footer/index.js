import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Button from '~/Components/ButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const list1 = [
    {
        title: 'Giới thiệu HAPPYHOW',
        to: '/',
    },
    {
        title: 'Chương trình Affiliate',
        to: '/',
    },
    {
        title: 'Blogger',
        to: '/',
    },
    {
        title: 'Tin tức',
        to: '/',
    },
];
const list2 = [
    {
        title: 'Phí vận chuyển',
        to: '/',
    },
    {
        title: 'Hướng dẫn đặt hàng',
        to: '/',
    },
    {
        title: 'Chính sách đổi / trả',
        to: '/',
    },
    {
        title: 'Làm thế nào để theo dỗi',
        to: '/',
    },
    {
        title: 'Hướng dẫn chọn size',
        to: '/',
    },
];
const list3 = [
    {
        title: 'Liên hệ',
        to: '/',
    },
    {
        title: 'Phương thức thanh toán',
        to: '/',
    },
    {
        title: 'Điểm thưởng',
        to: '/',
    },
    {
        title: 'Mua hàng online: 0903 000 000',
        to: '/',
    },
    {
        title: 'Góp ý, khiếu nại: 1800 2086',
        to: '/',
    },
];
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <Row>
                    <Col xs="12" md="8">
                        <div className={cx('row')}>
                            <div className={cx('col-4')}>
                                <div className={cx('logo')}>
                                    <img
                                        src="https://polostore.vn/wp-content/uploads/2021/10/logo-polostore-1.png"
                                        alt="HAPPYHOW"
                                    />
                                </div>
                                {list1.map((item, idx) => (
                                    <Button className={cx('link-item')} to={item.to} key={idx}>
                                        {item.title}
                                    </Button>
                                ))}
                            </div>
                            <div className={cx('col-4')}>
                                <h2 className={cx('heading')}>HỖ TRỢ KHÁCH HÀNG</h2>
                                {list2.map((item, idx) => (
                                    <Button className={cx('link-item')} key={idx} to={item.to}>
                                        {item.title}
                                    </Button>
                                ))}
                            </div>
                            <div className={cx('col-4')}>
                                <h2 className={cx('heading')}>DỊCH VỤ KHÁCH HÀNG</h2>
                                {list3.map((item, idx) => (
                                    <Button className={cx('link-item')} key={idx} to={item.to}>
                                        {item.title}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <h2 className={cx('heading')}>KẾT NỐI VỚI CHÚNG TÔI </h2>
                        <div className={cx('list-icon')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />
                            <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                            <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                            <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                        </div>
                        <h2 className={cx('heading')}>ĐĂNG KÝ NHẬN TIN TỪ HAPPYHOW</h2>
                        <div className={cx('input')}>
                            <input className={cx('input-email')} placeholder="Địa chỉ email của bạn"></input>
                            <button className={cx('btn-apply')}>Áp dụng</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;
