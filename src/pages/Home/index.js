import styles from './Home.module.scss'
import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faRotate, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';
import { product } from '~/Components/Product';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles)
const newProduct = product.slice(0,4)
const search = [
    {
        title: 'áo gấu',
        to: '/'
    },
    {
        title: 'dep',
        to: '/'
    },
    {
        title: 'polo trơn',
        to: '/'
    },
    {
        title: 'mẫu mới',
        to: '/'
    },
    {
        title: 'polo dylen',
        to: '/'
    },
    {
        title: 'nelux',
        to: '/'
    },
    {
        title: 'polo gấu',
        to: '/'
    },
    {
        title: 'new',
        to: '/'
    },
]   

const category = [
    {
        img: require('src/asetss/image/danhmuc/polo.png'),
        title: 'ÁO POLO',
        to: '/polo'
    },
    {
        img: require('src/asetss/image/danhmuc/aothun.jpeg'),
        title: 'ÁO THUN',
        to: '/aothun'
    },
    {
        img: require('src/asetss/image/danhmuc/quanboxer.jpeg'),
        title: 'QUẦN BOXER',
        to: '/quanboxer'
    },
    {
        img: require('src/asetss/image/danhmuc/banchaynhat.jpeg'),
        title: 'BÁN CHẠY NHẤT',
        to: '/banchaynhat'
    },
]
const procedure = [
    {
        img: require('src/asetss/image/procedure/b1.jpeg'),
        title: 'Yên tâm tặng quà',
        sub_title: 'Sản phẩm được đóng gói sang trọng, 99% đúng ý nam giới',
        iocn: <FontAwesomeIcon className={cx('icon')} icon={faGift} />
    },
    {
        img: require('src/asetss/image/procedure/b2.jpeg'),
        title: 'Yên tâm đổi trả',
        sub_title: 'Miễn phí đổi trả trong 30 ngày nếu bạn không hài lòng',
        iocn: <FontAwesomeIcon className={cx('icon')} icon={faRotate} />

    },
    {
        img: require('src/asetss/image/procedure/b3.jpeg'),
        title: 'Yên tâm nhận liền',
        sub_title: 'Dịch vụ giao nhanh dành riêng cho những trường hợp "cấp bách"',
        iocn: <FontAwesomeIcon className={cx('icon')} icon={faTruckFast} />

    },
]
const image_netword = [
    {
        image: require('src/asetss/image/netword/netword1.jpeg'),
        title: 'HAPPY-GRAM',
        sub_title: 'Instagram duy nhất và chính thức của chúng tôi',
        to: '/instagram'
    },
    {
        image: require('src/asetss/image/netword/netword2.jpeg'),
        title: 'NGHIỆN POLO',
        sub_title: 'Cộng đồng đam mê áo Polo đầy sôi nổi',
        to: '/faceboook'
    },
    {
        image: require('src/asetss/image/netword/netword3.jpeg'),
        title: 'HAPPYHOW X TIKTOK',
        sub_title: 'Những chiếc video đầy thú vị về Ông Chú Polo',
        to: '/tiktok'
    }
]
const carousels = [
    {
        image: require('src/asetss/image/Carousels/home/slider_home.jpeg'),
        title: 'Fist slide'
    },
    {
        image: require('src/asetss/image/Carousels/home/slider_home2.jpeg'),
        title: 'Second slide'

    },
    {
        image: require('src/asetss/image/Carousels/home/slider_home3.jpeg'),
        title: 'Last slide'

    }
]
// const $ = document.querySelector.bind()
function Home() {
    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
    }, [])
    return ( 
        <div className={cx('wrapper')}>
            <Carousel>
                {carousels.map((item, idx) => (
                    <Carousel.Item key={idx}> 
                        <img
                            className={cx('d-block w-100')}
                            src={item.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            {/* <h3>{item.title}</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                
            </Carousel>
            <div className={cx('sub')}>
                <h1 className={cx('sub-heading1')}>Mã ưu đãi</h1>
                <div  className={cx('sub-heading')}>
                    <h1>G10</h1>
                    <p>Giảm 10% cho đơn hàng đầu tiên</p>
                </div>
                <div className={cx('sub-heading')}>
                    <h1>BEAR</h1>
                    <p>Freeship cho đơn hàng từ 500k</p>
                </div>
            </div>
            <Button className = {cx('btn-deal')} to={'/allproduct'}>SĂN DEAL NGAY</Button>
            <div className={cx('container')}>
                <h1 className={cx('heading-category')}>DANH MỤC BẠN CẦN</h1>
                <div className={cx('row', 'row-category')}>
                        {category.map((item, idx) => (
                            <div key={idx} className={cx('col-3', 'category')}>
                                <img className={cx('image')} src={item.img} />
                                <span className={cx('title')}>{item.title}</span>
                                <Button className={cx('btn-link')} to={item.to}>Xem ngay</Button>
                            </div>
                        ))}
                </div>
                <div className={cx('content')}>
                    <div className={cx('row', 'row_process')}>
                        {procedure.map((item, idx) => (
                            <div key={idx} className={cx('col-4', 'procedure')}>
                                <img className={cx('procedure-image')} src={item.img} />
                                <div className={cx('box-icon')}>{item.iocn}</div>
                                <h2 className={cx('procedure-heading')}>{item.title}</h2>
                                <p className={cx('sub-heading')}>{item.sub_title}</p>
                            </div>
                        ))}
                
                    </div>
                    <div className={cx('row', 'process')}>
                        <div className={cx('col-8')}>
                            <video className={cx('video-process')} src={require('src/asetss/videos/video_process.mp4')} controls/>
                            <h1 className={cx('process-footer')}>QUY TRÌNH ĐÓNG GÓI 2 LỚP</h1>
                            <h2 className={cx('sub-footer')}>Bảo vệ sản phẩm bằng sự chân thành</h2>
                            <Button className ={cx('btn-link2')} to = {'/newin'}>TRẢI NGHIỆM NGAY</Button>
                        </div>
                        <div className={cx('col-4')}>
                            <img className={cx('image-process')} src={require('src/asetss/image/procedure/quytrinh.png')} />
                        </div>
                    </div>
        
                </div> 

                <div className={cx('content-newproduct')}>
                    <div className={cx('background-newproduct')}></div>
                    <div className={cx('row', 'list-product')}>
                        {newProduct.map((item, idx) => (
                            <div className={cx('col-3')} key = {idx}>
                                <div className={cx('product')}>
                                    <img className={cx('product-image')} src={item.image}></img>
                                    <FontAwesomeIcon className={cx('tym')} icon={faHeart} />
                                    <div className={cx('shopping')}>
                                        <FontAwesomeIcon className={cx('bag-shopping')} icon={faBagShopping} />
                                    </div>
                                    <div className={cx('product-name')}>{item.name}</div>
                                    <span className={cx('product-price')}>{item.price}</span>
                                    <span className={cx('sale')}>299.000đ</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Button className = {cx('btn-tronbo')} to = {'/allproduct'}>XEM TRỌN BỘ </Button>
                {/* <div class="container-fluid">
                    <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="12000">
                        <div class="carousel-inner row w-100 mx-auto flex-nowrap" role="listbox">
                            <div class="carousel-item col-md-3 active">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400/000/fff?text=1" alt="slide 1"/>
                            </div>
                            <div class="carousel-item col-md-3">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=2" alt="slide 2"/>
                            </div>
                            <div class="carousel-item col-md-3">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=3" alt="slide 3"/>
                            </div>
                            <div class="carousel-item col-md-3">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=4" alt="slide 4"/>
                            </div>
                            <div class="carousel-item col-md-3">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=5" alt="slide 5"/>
                            </div>
                            <div class="carousel-item col-md-3">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=6" alt="slide 6"/>
                            </div>
                            <div class="carousel-item col-md-3">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=7" alt="slide 7"/>
                            </div>
                            <div class="carousel-item col-md-3">
                                <img class="img-fluid mx-auto d-block" src="//via.placeholder.com/600x400?text=8" alt="slide 7"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                            <i class="fa fa-chevron-left fa-lg text-muted"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                            <i class="fa fa-chevron-right fa-lg text-muted"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div> */}
                


                <h2 className={cx('heading-search')}>TÌM KIẾM NHIỀU NHẤT</h2>
                <div className={cx('list-search')}>
                    {search.map((item, idx) => (
                        <Button className = {cx('btn-search')} to = {item.to} key = {idx} >{item.title}</Button>
                    ))}
                </div>
                <div className={cx('content', 'content-image')}>
                    <div className={cx('headingall')}>
                        <div>
                            <h2 className={cx('heading-image')}>Vì sao lại là HappyHow ?</h2>
                            <div className={cx('heading-2')}><h1>CHIẾC TÊN MỚI,<br />TẦM NHÌN MỚI</h1></div>
                        </div>
                        <p className={cx('heading-3')}>Chúng mình muốn gửi đến bạn những cảm xúc tích cực và đầy<br />
                                                        năng lượng trong từng điểm chạm, hãy trải nghiệm những khác<br />
                                                        biệt đó ngay bây giờ.
                        </p>

                    </div> 

                    <div className={cx('imasge-content')}>
                        <img className={cx('image-1')} src = {require('src/asetss/image/procedure/ab1.jpeg')} />
                        <img className={cx('image-2')} src = {require('src/asetss/image/procedure/ab2.jpeg')} />
                        <img className={cx('image-3')} src = {require('src/asetss/image/procedure/ab3.jpeg')} />
                    </div>
                    <p className={cx('comment')}>Niềm vui đơn giản là sự lựa chọn, và điều ấy trong thời trang <br />cũng không ngoại lệ.</p>
                    <p className={cx('comment')}>Tìm được mẫu áo mình thích để mặc hoặc tặng cho người thân,<br/> HappyHow chính xác là nơi bạn muốn đến.</p>
                </div>
                <div className={cx('wrapper-netword')}>
                    <div className={cx('background-image')}>
                    </div>
                    <div className={cx('row')}>
                        {image_netword.map((item, idx) => (
                                <div className={cx('col-4')}>
                                    <div className={cx('netword-item')} key = {idx}>
                                        <Button className = {cx('image-link')} to = {item.to}>
                                            <img src={item.image} />
                                        </Button>
                                        <h1 className={cx('title-netword')}>{item.title}</h1>
                                        <p className={cx('sub-title_netword')}>{item.sub_title}</p>
                                        <Button className = {cx('btn-netword')} to={item.to}>Khám phá ngay</Button>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
            
    );
}

export default Home;