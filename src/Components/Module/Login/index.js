import styles from './Login.module.scss'
import classNames from 'classnames/bind';
import Button from '~/Components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles)
function Login({ isShow, setShow}) {

    const handleClose = () => {
        setShow(false)
    }
    return ( 
        <div className={cx('wrapper', isShow ? 'active' : '')}>
            <div className={cx('content')}>
                <div className={cx('content-text')}>
                   <div>
                        <div className={cx('logo')}>
                            <img src='https://happyhow.me/1428355432291766272/images/22222.svg' alt= 'HAPPYHOW' />
                        </div>
                        <p className={cx('heading')}>Đăng nhập nhanh bằng số điện thoại (xác thực OTP)</p>
                        <input className={cx('input')} placeholder = 'Nhập số điện thoại'></input>
                        <Button className = {cx('btn-xacnhan')}>Xác nhận</Button>
                        <div className={cx('sale')}>
                            <FontAwesomeIcon icon={faDeleteLeft} />
                            <p className={cx('text')}>Giảm 10% đơn hàng đầu tiên (Nhập mã G10)</p>
                        </div>
                   </div>
                   <div className={cx('net-word')}>
                        <p>---------- Hoặc -----------</p>
                        <Button className = {cx('btn-netword')} to = {'/facebook'}>
                            <FontAwesomeIcon className={cx('icon-netword', 'facebook')} icon={faFacebook} />
                            Đăng nhập với Facebook
                        </Button>
                        <Button className = {cx('btn-netword')} to = {'/google'}>
                            <FontAwesomeIcon className={cx('icon-netword')} icon={faGoogle} />
                            Đăng nhập với Google
                        </Button>
                   </div>
                </div>
                <FontAwesomeIcon className={cx('close')} icon={faClose} onClick = {handleClose} />
                <img className={cx('image-login', 'google')} src={require('src/asetss/image/Login/login.jpg')} />
            </div>
        </div>
    );
}

export default Login
