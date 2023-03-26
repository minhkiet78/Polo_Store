import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ menu }) {
    return (
        <div className={cx('menu-item')}>
            <img src={menu.image}></img>
            <p>{menu.name}</p>
        </div>
    );
}

export default MenuItem;
