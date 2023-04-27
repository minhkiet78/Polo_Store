import { Fragment, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import useStore from '~/store';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCartShopping,
    faCircleQuestion,
    faGear,
    faMagnifyingGlass,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Spinner } from 'react-bootstrap';
import { DebounceInput } from 'react-debounce-input';
import { setModalLogin } from '~/store/action';
import helper from '~/Components/Support/helper';
import Tippy from '@tippyjs/react';
import ButtonComponent from '~/Components/ButtonComponent';
import Menu from '~/Components/Menu';
import MenuItem from '~/Components/MenuItem';
import listProduct from '~/store/listproduct';
import Popper from '~/Components/Menu/Popper';

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
        title: 'Admin',
        to: '/admin',
        classe: '',
    },
    // {
    //     title: 'Cộng đồng',
    //     to: '/congdong',
    //     classe: '',
    // },
    // {
    //     title: 'Chính sách',
    //     to: '/chinhsach',
    //     classe: '',
    // },
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
function Header({ handleToggleCart }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const [isLogin, setIsLogin] = useState(localStorage.getItem('user-login'));
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('user-login')) {
            setIsLogin(true);
        } else {
            setIsLogin(state.checkLogin);
        }
    }, [state.checkLogin]);

    const handleSearch = (value) => {
        setSearch(value);
        setLoading(true);
        if (value.length) {
            setResult(
                listProduct
                    .filter((item) => helper.formatSearch(item.name).includes(helper.formatSearch(value)))
                    .slice(0, 6),
            );
            setTimeout(() => {
                setLoading(false);
            }, 400);
        } else {
            setLoading(false);
            setResult([]);
        }
    };
    const handleClickSearch = (item) => {
        setSearch('');
        navigate(`/product/detail/${item.id}`);
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
                    visible={search.length ? true : false}
                    interactive
                    delay={[0, 300]}
                    render={(attrs) => (
                        <div className={cx('wapper-search')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <div className={cx('result-search')}>
                                    <h5 className={cx('heading')}>Sản phẩm tìm kiếm:</h5>
                                    {loading && (
                                        <div className={cx('loading')}>
                                            <Spinner animation="grow" size="xl" />
                                        </div>
                                    )}

                                    {!loading &&
                                        result.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                menu={item}
                                                onClick={() => handleClickSearch(item)}
                                            />
                                        ))}
                                </div>
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <DebounceInput
                            value={search}
                            debounceTimeout={300}
                            placeholder="Tìm Sản phầm và cửa hàng"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
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
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faCartShopping}
                                    onClick={handleToggleCart}
                                />
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
