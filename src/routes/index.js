import Home from '~/pages/Home';
import NewIn from '~/pages/Newin';
import Allproduct from '~/pages/Allproduct';
import CongDong from '~/pages/CongDong';
import ChinhSach from '~/pages/ChinhSach';
import ThatsMyBear from '~/pages/Thatsmybear';
const publicRoutes = [
    {path: '/home', component: Home},
    {path: '/newin', component: NewIn},
    {path: '/allproduct', component: Allproduct},
    {path: '/congdong', component: CongDong},
    {path: '/chinhsach', component: ChinhSach},
    {path: '/thatsmybear', component: ThatsMyBear}

]
const privateRoutes = []

export {publicRoutes, privateRoutes}