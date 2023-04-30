import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { setDataUser } from './store/action';
import useStore from './store';
import DefaultLayoute from './Components/layout/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { getUser } from './api/apiUser';
function App() {
    const [state, dispatch] = useStore();

    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            getDataUser();
        }
    }, []);
    const getDataUser = async () => {
        const res = await getUser();
        if (res.status === 200) {
            dispatch(setDataUser(res.data.data));
        }
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, idx) => {
                        const Page = route.component;
                        let Layout = DefaultLayoute;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
