import Home from '~/pages/Home';
import NewIn from '~/pages/Newin';
import Allproduct from '~/pages/Allproduct';
import Admin from '~/pages/Admin';
// import CongDong from '~/pages/CongDong';
// import ChinhSach from '~/pages/ChinhSach';
import ThatsMyBear from '~/pages/Thatsmybear';
import ProductDetail from '~/pages/ProductDetail';
import Payment from '~/pages/Payment';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/newin', component: NewIn },
    { path: '/allproduct', component: Allproduct },
    // { path: '/congdong', component: CongDong },
    // { path: '/chinhsach', component: ChinhSach },
    { path: '/orders/payment', component: Payment },
    { path: '/thatsmybear', component: ThatsMyBear },
    { path: '/product/:slug', component: ProductDetail },
    { path: '/admin', component: Admin },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
