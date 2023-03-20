import styles from './Slider.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)


function Slider({children}) {
    return ( 
        <div className={cx('slider')}>
            <img src={children} />
        </div>
     );
}

export default Slider;