import Home from '~/pages/Home';
import NewIn from '~/pages/Newin';
import Allproduct from '~/pages/Allproduct';
import CongDong from '~/pages/CongDong';
import ChinhSach from '~/pages/ChinhSach';
import ThatsMyBear from '~/pages/Thatsmybear';
import ProductDetail from '~/pages/ProductDetail';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/newin', component: NewIn },
    { path: '/allproduct', component: Allproduct },
    { path: '/congdong', component: CongDong },
    { path: '/chinhsach', component: ChinhSach },
    { path: '/thatsmybear', component: ThatsMyBear },
    { path: '/product/detail/:id', component: ProductDetail },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
