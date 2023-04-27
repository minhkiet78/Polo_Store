import classNames from 'classnames/bind';
import styles from './Admin.module.scss';

import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { createProduct } from '~/api/managermentProduct';
import useStore from '~/store';
import { showToast } from '~/store/action';

const cx = classNames.bind(styles);
function Admin() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState(0);
    const [category, setCategory] = useState('product');
    const [state, dispatch] = useStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Data = new FormData();
        Data.append('name', name);
        Data.append('image', image);
        Data.append('price', price);
        Data.append('sale', sale);
        Data.append('category', category);
        const res = await createProduct(Data);
        if (res.status === 200) {
            dispatch(showToast({ type: 'success', message: 'Thêm thành công!' }));
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    };
    return (
        <div className="container mt-5">
            <h2 className={'text-center'}>Add product</h2>
            <Form method="POST">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="file"
                        placeholder="Enter Image"
                        accept="image/png, image/gif, image/jpeg"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="number"
                        placeholder="Enter price"
                        value={price}
                        required
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="number"
                        placeholder="Sale"
                        value={sale}
                        onChange={(e) => setSale(e.target.value)}
                    />
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
                <Form.Select aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
                    <option value="product">Quần áo bình thường</option>
                    <option value="new_product">Quần áo mới</option>
                    <option value="product_thun">Áo thun</option>
                </Form.Select>
                <Button className="mt-5" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Admin;
