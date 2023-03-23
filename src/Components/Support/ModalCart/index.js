import { useEffect, useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './ModalCart.module.scss';
import useStore from '~/store';
import helper from '../helper';
import { addCard, showToast } from '~/store/action';

const cx = classNames.bind(styles);
function ModalCart({ show, handleCloseShow }) {
    const [state, dispatch] = useStore();
    const product = state.productActive;

    const [number, setNumber] = useState(state.isEdit ? product.quantity : 1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(number * product.price);
    }, [number]);
    const handleAccept = () => {
        const payload = {
            ...product,
            quantity: number,
            total,
        };
        dispatch(addCard(payload));
        dispatch(showToast({ type: 'success', message: `${state.isEdit ? 'Cập nhật' : 'Thêm'} đơn hàng thành công!` }));
        handleCloseShow();
    };
    return (
        <Modal centered show={show} onHide={handleCloseShow}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Row className={cx('data-product')}>
                    <Col xs="5">
                        <img src={product.image} className={cx('image-product')} />
                    </Col>
                    <Col xs="7" className={cx('detail-product')}>
                        <p className={cx('name-product')}>{product.name}</p>
                        <p className={cx('price-product')}>
                            Giá: <span>{helper.formatMoney(product.price)}</span>
                        </p>
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
                <Button variant="primary" onClick={handleAccept}>
                    Xác nhận
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCart;
