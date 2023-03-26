import { Fragment, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCartShopping,
    faCircleQuestion,
    faGear,
    faMagnifyingGlass,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import ButtonComponent from '~/Components/ButtonComponent';
import Menu from '~/Components/Menu';
import MenuItem from '~/Components/MenuItem';
import Popper from '~/Components/Menu/Popper';
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
const listMenu = [
    {
        icon: faGear,
        title: 'Cài đặt',
        type: 'setting',
    },
    {
        icon: faCircleQuestion,
        title: 'Hỗ trợ',
        type: 'support',
    },
    {
        icon: faArrowRightFromBracket,
        title: 'Đăng xuất',
        type: 'logout',
    },
];
function Header({ setCart }) {
    const location = useLocation();
    const [state, dispatch] = useStore();
    const [isLogin, setIsLogin] = useState(localStorage.getItem('user-login'));
    const [search, setSearch] = useState('');

    useEffect(() => {
        setIsLogin(state.checkLogin);
    }, [state.checkLogin]);
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
                <Tippy
                    visible={search ? true : false}
                    interactive
                    delay={[0, 300]}
                    render={(attrs) => (
                        <div className={cx('wapper-search')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <div className={cx('text-seach')}>
                                    Tìm tất cả các sản phẩm có từ '<span>{search}</span>'
                                </div>
                                <h5 className={cx('heading')}>Sản phẩm liên quan:</h5>
                                {state.newProduct.slice(0, 5).map((item) => (
                                    <MenuItem key={item.id} menu={item} />
                                ))}
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            value={search}
                            placeholder="Tìm Sản phầm và cửa hàng"
                            onChange={(e) => setSearch(e.target.value)}
                        ></input>
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action-header')}>
                    {isLogin ? (
                        <Fragment>
                            <span className={cx('cart')}>
                                <span>{state.listCard.length}</span>
                                <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} onClick={handleCart} />
                            </span>
                            <Menu listMenu={listMenu}>
                                <span>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                </span>
                            </Menu>
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
