import React from 'react';
import {
    useRecoilState,
    useRecoilValue
} from 'recoil';
import { cartQuantity, cartState, cartTotal } from '../../State/CartState';
import "./style.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Checkout() {
    const cart = useRecoilValue(cartState)
    const total = useRecoilValue(cartTotal)
    const [cartList, setCartList] = useRecoilState(cartState);
    let navigate = useNavigate();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const confirmBuy = () => {
        navigate('/product')
        toast.success('Chúc mừng bạn đã đặt hàng thành công.',
            {
                position: toast.POSITION.BOTTOM_RIGHT,
                theme: 'colored'
            })
        setCartList([])
    }
    return (
        <div className='bill'>
            <h3 className='bill_title'>Thông Tin Hóa Đơn</h3>
            <div className="bill_info">
                {cart.map((item, index) => (
                    <div className='info' style={{ display: 'flex', gap: '50px' }}>
                        <span style={{ display: 'block' }}>{index + 1}</span>
                        <span>{item?.product?.title} x {item?.quantity} sản phẩm</span>
                        <span>{(item?.product?.price * item?.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                ))}
                <div className="bill_detail">
                    <h5 className='bill_total'>{`Tổng tiền cần thanh toán : ${total.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`}</h5>
                    <span className='bill_time'>Ngày thanh toán : {today.toDateString()}</span>

                </div>
            </div>
            <button onClick={confirmBuy} className='btn btn_confirm'>Xác nhận thanh toán</button>
        </div>
    );
}
export default Checkout;