import { useEffect, useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './ModalCart.module.scss';
import useStore from '~/store';
import helper from '../helper';
import { showToast, getDatacart } from '~/store/action';

import { createCart, updateCart } from '~/api/managermentCart';

const cx = classNames.bind(styles);
function ModalCart({ show, handleCloseShow }) {
    const [state, dispatch] = useStore();
    const product = state.productActive;

    const [number, setNumber] = useState(state.isEdit ? product.quantity : 1);
    const [size, setSize] = useState(state.isEdit ? product.size : 's');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(number * product.price);
    }, [number]);
    const handleAccept = async () => {
        const API = state.isEdit ? updateCart : createCart;
        let payload = {
            product_id: product._id,
            quantity: number,
            size: size,
            total_price: total,
        };

        payload = state.isEdit ? { ...payload, item_id: product.cart_id } : payload;
        const res = await API(payload);
        if (res.status == 200) {
            dispatch(showToast({ type: 'success', message: res.data.message }));
            dispatch(getDatacart());
            handleCloseShow();
        } else {
            dispatch(showToast({ type: 'danger', message: res.data.message }));
        }
    };
    return (
        <Modal centered show={show} size="lg" onHide={handleCloseShow}>
            <Modal.Body>
                <Row className={cx('data-product')}>
                    <Col xs="5">
                        <img src={`http://localhost:3000/uploads/${product.image}`} className={cx('image-product')} />
                    </Col>
                    <Col xs="7" className={cx('detail-product')}>
                        <p className={cx('name-product')}>{product.name}</p>
                        <p className={cx('price-product')}>
                            Giá: <span>{helper.formatMoney(product.price)}</span>
                        </p>
                        <div className={cx('size-product')}>
                            <span className={cx(size === 's' ? 'active' : '')} onClick={() => setSize('s')}>
                                S
                            </span>
                            <span className={cx(size === 'm' ? 'active' : '')} onClick={() => setSize('m')}>
                                M
                            </span>
                            <span className={cx(size === 'l' ? 'active' : '')} onClick={() => setSize('l')}>
                                L
                            </span>
                        </div>
                        <div className={cx('group-total')}>
                            <input
                                type="number"
                                value={number}
                                min="1"
                                autoFocus
                                className={cx('input-value')}
                                onChange={(e) => setNumber(Number(e.target.value))}
                            />
                            <p className={cx('price-product')} style={{ fontWeight: '700', margin: '0' }}>
                                Tổng: <span style={{ marginLeft: '10px' }}>{helper.formatMoney(total)}</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseShow}>
                    Hủy
                </Button>
                <Button variant="success" onClick={handleAccept}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCart;
