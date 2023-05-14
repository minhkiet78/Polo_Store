import { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import { showToast, setModalCart, editCart, setDatacart } from '~/store/action';
import useStore from '~/store';
import Header from './Header';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import ModalCart from '~/Components/Support/ModalCart';
import Login from '~/Components/Module/Login';
import Cart from '~/Components/Module/Cart';

import { getListCartUser } from '~/api/managermentCart';

const cx = classNames.bind(styles);
function DefaultLayoute({ children }) {
    const [showCart, setShowCart] = useState(false);
    const [state, dispatch] = useStore();
    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            getDatCart();
        }
    }, []);

    const getDatCart = async () => {
        const res = await getListCartUser();
        if (res.status == 200) {
            dispatch(setDatacart(res.data.data));
        }
    };
    const handleCloseModal = () => {
        dispatch(setModalCart(false));
        if (state.isEdit) {
            dispatch(editCart(false));
        }
    };
    const handleToggleCart = () => {
        setShowCart(!showCart);
    };
    return (
        <div id="mainContent" className={cx('wrapper')}>
            <Header handleToggleCart={handleToggleCart} />
            <div className={cx('container')}>{children}</div>
            <Footer />
            {state.modalLogin && <Login />}
            {showCart && <Cart handleToggleCart={handleToggleCart} />}

            {state.modalCart && <ModalCart show handleCloseShow={handleCloseModal} />}
            {state.toast && (
                <Toast
                    animation={true}
                    position="top-end"
                    onClose={() => dispatch(showToast(null))}
                    show
                    delay={2000}
                    bg={state.toast.type}
                    autohide
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: 2000,
                        color: '#fff',
                    }}
                >
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Thông báo</strong>
                    </Toast.Header>
                    <Toast.Body>{state.toast.message}</Toast.Body>
                </Toast>
            )}
        </div>
    );
}

export default DefaultLayoute;
