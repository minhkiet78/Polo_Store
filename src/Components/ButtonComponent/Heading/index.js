import classNames from 'classnames/bind';
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

function Heading() {
    return (
        <div className={cx('sub', 'container')}>
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
    );
}

export default Heading;
