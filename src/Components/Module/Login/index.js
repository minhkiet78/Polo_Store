import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import useStore from '~/store';
import Button from '~/Components/ButtonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Row, Col, Form } from 'react-bootstrap';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { showToast, setModalLogin } from '~/store/action';

import { register, login } from '~/api/apiAuth';
const cx = classNames.bind(styles);
function Login() {
    const [state, dispatch] = useStore();
    const userNameRef = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [is_register, setRegister] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (is_register) {
            if (validate()) {
                let payload = {
                    user_name: username,
                    password,
                    c_password: cpassword,
                };

                const res = await register(payload);
                if (res.status == 200) {
                    dispatch(showToast({ type: 'success', message: res.data.message }));
                    setRegister(false);
                    resetInput();
                    userNameRef.current.focus();
                } else {
                    dispatch(showToast({ type: 'danger', message: res.data.message }));
                }
            } else {
                dispatch(showToast({ type: 'danger', message: 'Mật khẩu không khớp !' }));
            }
        } else {
            let payload = {
                user_name: username,
                password,
            };
            const res = await login(payload);
            if (res.status == 200) {
                dispatch(showToast({ type: 'success', message: res.data.message }));
                localStorage.setItem('user_token', res.data.accessToken);
                window.location.reload();
            } else {
                dispatch(showToast({ type: 'danger', message: res.data.message }));
            }
        }
    };
    const validate = () => {
        return password === cpassword;
    };

    const resetInput = () => {
        setUsername('');
        setPassword('');
        setCpassword('');
    };
    const handleChangeAuth = () => {
        setRegister(!is_register);
        resetInput();
    };
    return (
        <Modal centered show size="lg" onHide={() => dispatch(setModalLogin(false))}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <div className={cx('wrapper')}>
                    <Row>
                        <Col xs="6" className={cx('content-text')}>
                            <Form>
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
                                        required
                                    ></input>
                                    <input
                                        className={cx('input')}
                                        type="password"
                                        value={password}
                                        placeholder="Mật khẩu"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    ></input>
                                    {is_register && (
                                        <input
                                            className={cx('input')}
                                            type="password"
                                            value={cpassword}
                                            placeholder="Nhập lại mật khẩu"
                                            onChange={(e) => setCpassword(e.target.value)}
                                            required
                                        ></input>
                                    )}

                                    <Button
                                        type="submit"
                                        className={cx('btn-xacnhan')}
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Xác nhận
                                    </Button>
                                </div>
                            </Form>
                            <div className={cx('sale')}>
                                <FontAwesomeIcon icon={faDeleteLeft} />
                                <p className={cx('text')}>Giảm 10% đơn hàng đầu tiên (Nhập mã G10)</p>
                            </div>
                            <div className={cx('net-word')}>
                                {!is_register && <p style={{ fontSize: '16px' }}>---------- Hoặc -----------</p>}

                                <Button className={cx('btn-register')} onClick={handleChangeAuth}>
                                    {is_register ? 'Đăng nhập' : 'Đăng ký'}
                                </Button>
                            </div>
                        </Col>
                        <Col xs="6">
                            <img
                                className={cx('image-login', 'google')}
                                src={require('src/assets/image/Login/login.jpg')}
                            />
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default Login;
