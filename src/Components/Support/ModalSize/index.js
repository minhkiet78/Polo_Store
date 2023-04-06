import classNames from 'classnames/bind';
import styles from './ModalSize.scss';

const cx = classNames.bind(styles);

function ModalSize() {
    return <img src="https://cdn.kiwisizing.com/polomanor-1675237423290.jpeg" className={cx('image')} />;
}

export default ModalSize;
