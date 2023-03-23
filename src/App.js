import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import useStore from './store';
import { Toast } from 'react-bootstrap';
import DefaultLayoute from './Components/layout/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { showToast } from './store/action';
function App() {
    const [state, dispatch] = useStore();

    useEffect(() => {
        document.getElementById('mainContent').scrollTo(0, 0);
    }, []);
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
                {state.toast && (
                    <Toast
                        animation={true}
                        position="top-end"
                        onClose={() => dispatch(showToast(null))}
                        show
                        delay={3000}
                        bg={state.toast.type}
                        autohide
                        style={{
                            position: 'fixed',
                            top: '20px',
                            right: '20px',
                            zIndex: 100,
                            color: '#fff',
                        }}
                    >
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Thông báo</strong>
                        </Toast.Header>
                        <Toast.Body>{state.toast.message}</Toast.Body>
                    </Toast>
                )}
            </div>
        </Router>
    );
}

export default App;
