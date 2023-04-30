import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ menu, onClick }) {
    return (
        <div className={cx('menu-item')} onClick={onClick}>
            <img src={`http://localhost:3000/uploads/${menu.image}`}></img>
            <p>{menu.name}</p>
        </div>
    );
}

export default MenuItem;
