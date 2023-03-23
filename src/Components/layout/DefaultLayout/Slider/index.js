import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Slider({ children, type }) {
    return (
        <div className={cx('slider', type)}>
            <img src={children} />
        </div>
    );
}

export default Slider;
