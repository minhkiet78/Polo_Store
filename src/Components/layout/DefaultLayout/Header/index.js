import { Fragment, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import ButtonComponent from '~/Components/ButtonComponent';
import { setModalLogin } from '~/store/action';

const cx = classNames.bind(styles);
const nav_items = [
    {
        title: 'New in',
        to: '/newin',
        classe: '',
    },
    {
        title: 'Tất cả sản phẩm',
        to: '/allproduct',
        classe: '',
    },
    {
        title: 'Thats My Bear',
        to: '/thatsmybear',
        classe: '',
    },
    {
        title: 'Cộng đồng',
        to: '/congdong',
        classe: '',
    },
    {
        title: 'Chính sách',
        to: '/chinhsach',
        classe: '',
    },
];

function Header({ setCart }) {
    const location = useLocation();
    const [state, dispatch] = useStore();
    const [isLogin, setIsLogin] = useState(localStorage.getItem('user-login'));
    const handleCart = () => {
        setCart(true);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner', 'container-fluid')}>
                <Link to={'/'}>
                    <div className={cx('logo')}>
                        <img
                            src="https://polostore.vn/wp-content/uploads/2021/10/logo-polostore-1.png"
                            alt="HAPPYHOW"
                        />
                    </div>
                </Link>
                <div className={cx('search')}>
                    <input placeholder="Tìm Sản phầm và cửa hàng"></input>
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action-header')}>
                    {isLogin ? (
                        <Fragment>
                            <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} onClick={handleCart} />
                            <FontAwesomeIcon className={cx('icon')} icon={faUser} style={{ marginLeft: '30px' }} />
                        </Fragment>
                    ) : (
                        <Button variant="success" onClick={() => dispatch(setModalLogin(true))}>
                            Đăng nhập
                        </Button>
                    )}
                </div>
            </div>
            <div className={cx('nav-header')}>
                {nav_items.map((item, idx) => (
                    <ButtonComponent
                        className={cx(item.to === location.pathname ? 'active' : '', 'nav-item')}
                        key={idx}
                        to={item.to}
                    >
                        {item.title}
                    </ButtonComponent>
                ))}
            </div>
        </header>
    );
}

export default Header;
