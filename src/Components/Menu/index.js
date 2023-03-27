import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Popper from './Popper';
import useStore from '~/store';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { checkLogin, showToast } from '~/store/action';

const cx = classNames.bind(styles);
function Menu({ children, listMenu }) {
    const [state, dispatch] = useStore();

    const handleMenu = (type) => {
        if (type === 'logout') {
            dispatch(checkLogin(false));
            dispatch(showToast({ type: 'success', message: 'Đăng xuất thành công ' }));
            localStorage.removeItem('user-login');
        }
    };
    const renderItem = () => {
        return (
            <Fragment>
                <div className={cx('group-avatar')}>
                    <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?resize=800%2C800&ssl=1" />
                    <div className={cx('content-avatar')}>
                        <p>Minh Kiệt</p>
                        <p className={cx('id')}>ID: 0145G552E</p>
                    </div>
                </div>
                {listMenu.map((item, idx) => (
                    <div className={cx('menu-item')} key={idx} onClick={() => handleMenu(item.type)}>
                        <FontAwesomeIcon icon={item.icon} className={cx('icon')} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </Fragment>
        );
    };
    return (
        <Tippy
            interactive
            delay={[0, 300]}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('list-menu')} tabIndex="-1" {...attrs}>
                    <Popper>{renderItem()}</Popper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
