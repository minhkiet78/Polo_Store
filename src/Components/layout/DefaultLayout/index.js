import Header from "./Header";
import Footer from "./Footer";
import styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";
import { useState } from "react";

import Login from "~/Components/Module/Login";
import Cart from "~/Components/Module/Cart";



const cx = classNames.bind(styles)
function DefaultLayoute({children}) {
    const [showLogin, setShowLogin] = useState(false)
    const [showCart, setShowCart] = useState(false)

    return ( 
        <div id="mainContent" className={cx('wrapper')}>
            <Header 
                setLogin={(valueChild) => {
                    return setShowLogin(valueChild);
                }}
                setCart = {(valueChild) => {
                    return setShowCart(valueChild)
                }}
            />
            <div className={cx('container')} >
                {children}
            </div>
            <Footer />
            <Login 
                isShow = {showLogin}
                setShow = {(children) => {
                    return setShowLogin(children)
                }}
            />
            <Cart 
                isShow = {showCart}
                setShow = {(children) => {
                    return setShowCart(children)
                }}
            />
        </div>
    );
}

export default DefaultLayoute;