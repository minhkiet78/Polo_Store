import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faRotate, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Carousel, Row, Col } from 'react-bootstrap';
import ButtonComponent from '~/Components/ButtonComponent';
import Product from '~/Components/Product';
import Heading from '~/Components/ButtonComponent/Heading';

import { getNewPolo } from '~/api/managermentProduct';
const cx = classNames.bind(styles);

const category = [
    {
        img: require('src/assets/image/danhmuc/polo.png'),
        title: 'ÁO POLO',
        to: '/allproduct#polo-product',
    },
    {
        img: require('src/assets/image/danhmuc/aothun.jpeg'),
        title: 'ÁO THUN',
        to: '/allproduct#boxer-product',
    },
    {
        img: require('src/assets/image/danhmuc/quanboxer.jpeg'),
        title: 'QUẦN BOXER',
        to: '/quanboxer',
    },
    {
        img: require('src/assets/image/danhmuc/banchaynhat.jpeg'),
        title: 'BÁN CHẠY NHẤT',
        to: '/banchaynhat',
    },
];
const procedure = [
    {
        img: require('src/assets/image/procedure/b1.jpeg'),
        title: 'Yên tâm tặng quà',
        sub_title: 'Sản phẩm được đóng gói sang trọng, 99% đúng ý nam giới',
        iocn: <FontAwesomeIcon className={cx('icon')} icon={faGift} />,
    },
    {
        img: require('src/assets/image/procedure/b2.jpeg'),
        title: 'Yên tâm đổi trả',
        sub_title: 'Miễn phí đổi trả trong 30 ngày nếu bạn không hài lòng',
        iocn: <FontAwesomeIcon className={cx('icon')} icon={faRotate} />,
    },
    {
        img: require('src/assets/image/procedure/b3.jpeg'),
        title: 'Yên tâm nhận liền',
        sub_title: 'Dịch vụ giao nhanh dành riêng cho những trường hợp "cấp bách"',
        iocn: <FontAwesomeIcon className={cx('icon')} icon={faTruckFast} />,
    },
];
const image_netword = [
    {
        image: require('src/assets/image/netword/netword1.jpeg'),
        title: 'HAPPY-GRAM',
        sub_title: 'Instagram duy nhất và chính thức của chúng tôi',
        to: '/instagram',
    },
    {
        image: require('src/assets/image/netword/netword2.jpeg'),
        title: 'NGHIỆN POLO',
        sub_title: 'Cộng đồng đam mê áo Polo đầy sôi nổi',
        to: '/faceboook',
    },
    {
        image: require('src/assets/image/netword/netword3.jpeg'),
        title: 'HAPPYHOW X TIKTOK',
        sub_title: 'Những chiếc video đầy thú vị về Ông Chú Polo',
        to: '/tiktok',
    },
];
const carousels = [
    {
        image: require('src/assets/image/Carousels/home/slider_home.jpeg'),
        title: 'Fist slide',
    },
    {
        image: require('src/assets/image/Carousels/home/slider_home2.jpeg'),
        title: 'Second slide',
    },
    {
        image: require('src/assets/image/Carousels/home/slider_home3.jpeg'),
        title: 'Last slide',
    },
];
function Home() {
    const [newProduct, setNewProduct] = useState([]);

    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
        getListNewPolo();
    }, []);
    const getListNewPolo = async () => {
        const res = await getNewPolo();
        if (res.status === 200) {
            setNewProduct(res.data.data);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <Carousel>
                {carousels.map((item, idx) => (
                    <Carousel.Item key={idx}>
                        <img className={cx('d-block w-100')} src={item.image} alt="First slide" />
                        <Carousel.Caption>{/* <h3>{item.title}</h3> */}</Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Heading />
            <div
                className={cx('d-flex', 'justify-content-center', 'align-items-center', 'flex-column')}
                style={{ marginBottom: '40px' }}
            >
                <ButtonComponent className={cx('btn-deal')} to={'/allproduct'}>
                    SĂN DEAL NGAY
                </ButtonComponent>
                <h1 className={cx('heading-category')}>DANH MỤC BẠN CẦN</h1>
            </div>
            <div className="container">
                <Row>
                    {category.map((item, idx) => (
                        <Col xs="6" lg="3" key={idx} className={cx('category')}>
                            <img className={cx('image')} src={item.img} />
                            <div className={cx('image_action')}>
                                <span className={cx('title')}>{item.title}</span>
                                <ButtonComponent className={cx('btn-link')} to={item.to}>
                                    Xem ngay
                                </ButtonComponent>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
            <div className={cx('content')} style={{ margin: '50px 0' }}>
                <div className="container">
                    <Row>
                        {procedure.map((item, idx) => (
                            <Col xs="12" md="4" key={idx} className={cx('procedure')}>
                                <div className={cx('procedure-image')} style={{ backgroundImage: `url(${item.img})` }}>
                                    <div className={cx('box-icon')}>{item.iocn}</div>
                                </div>
                                <h2 className={cx('procedure-heading')}>{item.title}</h2>
                                <p className={cx('sub-heading')}>{item.sub_title}</p>
                            </Col>
                        ))}
                    </Row>
                    <Row className="mt-5">
                        <Col xs="12" md="8">
                            <video
                                className={cx('video-process')}
                                src={require('src/assets/videos/video_process.mp4')}
                                controls
                                style={{ maxWidth: '100%' }}
                            />
                            <h1 className={cx('process-footer')}>QUY TRÌNH ĐÓNG GÓI 2 LỚP</h1>
                            <h2 className={cx('sub-footer')}>Bảo vệ sản phẩm bằng sự chân thành</h2>
                            <ButtonComponent className={cx('btn-link2')} to={'/newin'}>
                                TRẢI NGHIỆM NGAY
                            </ButtonComponent>
                        </Col>
                        <Col xs="4" className={cx('content-image-process')}>
                            <img
                                className={cx('image-process')}
                                src={require('src/assets/image/procedure/quytrinh.png')}
                                style={{ maxWidth: '100%' }}
                            />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="container">
                <Row className={cx('list-product')}>
                    {newProduct.map((item, idx) => (
                        <Product key={idx} product={item} />
                    ))}
                </Row>
            </div>
            <div className={cx('d-flex', 'justify-content-center')}>
                <ButtonComponent className={cx('btn-tronbo')} to={'/allproduct'}>
                    XEM TRỌN BỘ{' '}
                </ButtonComponent>
            </div>

            <div className={cx('content', 'content-image', 'mb-5')}>
                <div className="container">
                    <div className={cx('headingall')}>
                        <div>
                            <h2 className={cx('heading-image')}>Vì sao lại là HappyHow ?</h2>
                            <div className={cx('heading-2')}>
                                <h1>
                                    CHIẾC TÊN MỚI,
                                    <br />
                                    TẦM NHÌN MỚI
                                </h1>
                            </div>
                        </div>
                        <p className={cx('heading-3')}>
                            Chúng mình muốn gửi đến bạn những cảm xúc tích cực và đầy
                            <br />
                            năng lượng trong từng điểm chạm, hãy trải nghiệm những khác
                            <br />
                            biệt đó ngay bây giờ.
                        </p>
                    </div>

                    <div className={cx('imasge-content')}>
                        <img className={cx('image-1')} src={require('src/assets/image/procedure/ab1.jpeg')} />
                        <img className={cx('image-2')} src={require('src/assets/image/procedure/ab2.jpeg')} />
                        <img className={cx('image-3')} src={require('src/assets/image/procedure/ab3.jpeg')} />
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <Row>
                    {image_netword.map((item, idx) => (
                        <Col xs="4" key={idx}>
                            <div className={cx('netword-item')}>
                                <ButtonComponent className={cx('image-link')} to={item.to}>
                                    <img src={item.image} />
                                </ButtonComponent>
                                <h1 className={cx('title-netword')}>{item.title}</h1>
                                <p className={cx('sub-title_netword')}>{item.sub_title}</p>
                                <ButtonComponent className={cx('btn-netword')} to={item.to}>
                                    Khám phá ngay
                                </ButtonComponent>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Home;
