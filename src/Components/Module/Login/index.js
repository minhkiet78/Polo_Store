import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import useStore from '~/store';
import Button from '~/Components/ButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Row, Col } from 'react-bootstrap';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { showToast, setModalLogin } from '~/store/action';
const cx = classNames.bind(styles);
const arrAcount = JSON.parse(localStorage.getItem('list-user'));
function Login() {
    const [state, dispatch] = useStore();
    const userNameRef = useRef();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpassword, setCpassword] = useState(null);
    const [register, setRegister] = useState(false);

    const handleSubmit = () => {
        if (register) {
            if (validate()) {
                const object = {
                    user_name: username,
                    password: password,
                };
                arrAcount.push(object);
                localStorage.setItem('list-user', JSON.stringify(arrAcount));
                dispatch(showToast({ type: 'success', message: 'Đăng ký thành công' }));
                setRegister(false);
                userNameRef.current.focus();
            } else {
                dispatch(showToast({ type: 'danger', message: 'Mật khẩu không khớp !' }));
            }
        } else {
            if (checkLogin()) {
                dispatch(showToast({ type: 'success', message: 'Đăng nhập thành công' }));
                localStorage.setItem('user-login', true);
                dispatch(setModalLogin(false));
            } else {
                dispatch(showToast({ type: 'danger', message: 'Tài khoản hoặc mật khẩu không đúng' }));
            }
        }
    };
    const validate = () => {
        return password === cpassword;
    };
    const checkLogin = () => {
        let check = false;
        for (const user of arrAcount) {
            if (user.user_name === username && user.password === password) {
                check = true;
                break;
            }
        }
        return check;
    };
    return (
        <Modal centered show size="lg" onHide={() => dispatch(setModalLogin(false))}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className={cx('wrapper')}>
                    <Row>
                        <Col xs="6" className={cx('content-text')}>
                            <div className={cx('content-login')}>
                                <div className={cx('logo')}>
                                    <img
                                        src="https://polostore.vn/wp-content/uploads/2021/10/logo-polostore-1.png"
                                        alt="HAPPYHOW"
                                    />
                                </div>
                                <input
                                    className={cx('input')}
                                    ref={userNameRef}
                                    autoFocus
                                    value={username}
                                    placeholder="Tên tài khoản"
                                    onChange={(e) => setUsername(e.target.value)}
                                ></input>
                                <input
                                    className={cx('input')}
                                    type="password"
                                    value={password}
                                    placeholder="Mật khẩu"
                                    onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                {register && (
                                    <input
                                        className={cx('input')}
                                        type="password"
                                        value={cpassword}
                                        placeholder="Nhập lại mật khẩu"
                                        onChange={(e) => setCpassword(e.target.value)}
                                    ></input>
                                )}

                                <Button className={cx('btn-xacnhan')} onClick={handleSubmit}>
                                    Xác nhận
                                </Button>
                                <div className={cx('sale')}>
                                    <FontAwesomeIcon icon={faDeleteLeft} />
                                    <p className={cx('text')}>Giảm 10% đơn hàng đầu tiên (Nhập mã G10)</p>
                                </div>
                            </div>

                            <div className={cx('net-word')}>
                                {!register && <p style={{ fontSize: '16px' }}>---------- Hoặc -----------</p>}

                                <Button className={cx('btn-register')} onClick={() => setRegister(!register)}>
                                    {register ? 'Đăng nhập' : 'Đăng ký'}
                                </Button>
                            </div>
                        </Col>
                        <Col xs="6">
                            <img
                                className={cx('image-login', 'google')}
                                src={require('src/asetss/image/Login/login.jpg')}
                            />
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default Login;
