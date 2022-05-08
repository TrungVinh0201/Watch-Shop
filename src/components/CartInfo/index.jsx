import React from "react";
import "./style.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    cartQuantity,
    cartTotal,
    cartState,
    deleteItemCart,
    addToCart,
    decreaseQuantity,
} from "../../State/CartState";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function CartInfo() {
    const cart = useRecoilValue(cartState);
    const quantity = useRecoilValue(cartQuantity);
    const total = useRecoilValue(cartTotal);
    let navigate = useNavigate();
    const [cartList, setCartList] = useRecoilState(cartState);
    const backHome = () => {
        navigate("/product");
    };
    const handleCheckout = () => {
        navigate("/checkout");
    };
    const hanldeDeleteCart = (idDelete) => {
        const newCart = deleteItemCart(cart, idDelete);
        setCartList(newCart);
        toast.success("Xoá sản phẩm thành công.", {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "dark",
        });
    };
    const handleIncreaseQuantity = (product) => {
        const newCart = addToCart(cart, product);
        setCartList(newCart);
    };
    const handleDecreaseQuantity = (product) => {
        const newCart = decreaseQuantity(cart, product);
        setCartList(newCart);
    };
    return (
        <div className="cart_wrap">
            <h4>Cart</h4>
            {cart.length > 0 ? (
                <div className="cart">
                    {cart.map((item) => (
                        <div key={item.id} className="cart_item">
                            <img
                                className="cart_img"
                                src={`https://radiant-stream-23882.herokuapp.com/img/product/${item?.product?.logo}`}
                                alt=""
                            />
                            <span className="cart_title">
                                Tên sản phẩm : {item?.product?.title}{" "}
                            </span>
                            <span className="cart_price">
                                Giá :
                                {item?.product?.price.toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                })}{" "}
                            </span>
                            <div className="quantity">
                                <button
                                    className="quantity_decrease"
                                    onClick={() => handleDecreaseQuantity(item?.product)}
                                >
                                    -
                                </button>
                                <input type="text" disabled value={item?.quantity > 0 ? item?.quantity : hanldeDeleteCart(item.id)} />
                                <button
                                    className="quantity_increase"
                                    onClick={() => handleIncreaseQuantity(item?.product)}
                                >
                                    +
                                </button>
                            </div>
                            <span className="cart_total">
                                Tổng cộng:{" "}
                                {(item?.product?.price * item?.quantity).toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </span>
                            <span
                                className="delete"
                                onClick={() => hanldeDeleteCart(item?.id)}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <img
                    className="img_placeholder"
                    src="https://sethisbakery.com/assets/website/images/empty-cart.png"
                    alt=""
                    srcset=""
                />
            )}
            <div className="cart_header">
                <span>{`Bạn đang có ${quantity || 0} sản phẩm trong giỏ 🛒`}</span>
                <span>{`Thành tiền : ${total.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                })}💰`}</span>
                <button onClick={handleCheckout} className="btn buy_now">
                    Tiến Hành Đặt Hàng
                </button>
            </div>
            <span onClick={backHome} className="back_home">
                <i className="fa-solid fa-arrow-left-long"></i>
            </span>
        </div>
    );
}

export default CartInfo;