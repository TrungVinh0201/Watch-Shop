import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    useRecoilValue,useRecoilState
} from 'recoil';
import { cartQuantity } from '../../State/CartState';
import { productListState } from '../../State/ProductState';
import './style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Header() {
    let navigate = useNavigate();
    const [valueInput, setValueInput] = useState('')
    const isLogin = Boolean(localStorage.getItem('token'))
    const [productList ,setProductList] = useRecoilState(productListState)
    const [listProductSearch ,setListProductSearch] = useState([])
    const quantity = useRecoilValue(cartQuantity);
    const handleGoToLoginPage = () => {
        navigate('/')
    }
    const handleGoToLogout = () => {
        navigate('/')
        localStorage.removeItem('token')
    }
    const handleGoToCart = () => {
        if (isLogin) {
            navigate('/cart')
        }
    }

    const handleSearch = () => {
        fetch(`https://radiant-stream-23882.herokuapp.com/api/v1/search?title=${valueInput}`)
        .then(response => response.json())
        .then(product => setProductList(product.data));
    }
    return (
        <div className="header">
            <div className="header_search">
                <input className="search_input" type="text" placeholder="Tìm kiếm...." value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                <div className="search_icon" onClick={handleSearch}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="header_logo">
                <h3 onClick={() => navigate('/product')}>WATCH</h3>
            </div>
            <div className="header_action">
                {isLogin ? <button className="btn btn-login" onClick={handleGoToLogout}>ĐĂNG XUẤT</button> : <button className="btn btn-login" onClick={handleGoToLoginPage}>ĐĂNG NHẬP</button>}
                <span>|</span>
                <button onClick={handleGoToCart} className="btn btn-cart">{`GIỎ HÀNG / ${quantity || 0} SẢN PHẨM`}</button>
            </div>
        </div>
    );
}

export default Header;