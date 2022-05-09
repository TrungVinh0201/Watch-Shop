import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import "../../App.css";
import { addToCart, cartState } from "../../State/CartState";
import "./style.css";
toast.configure();

function FilterByCategory() {
    const searchParams = useLocation().search;
    const filterInfo = searchParams.slice(1, searchParams.length);
    const brandName = filterInfo.slice(
        filterInfo.lastIndexOf("=") + 1,
        filterInfo.length
    );

    const [filterProductList, setFilterProductList] = useState([]);
    let navigate = useNavigate();
    const [cart, setCart] = useRecoilState(cartState);
    const [isLoading, setIsLoading] = useState(true)

    //call Api
    useEffect(() => {
        fetch(
            `https://radiant-stream-23882.herokuapp.com/api/v1/product?${filterInfo}`
        )
            .then((response) => response.json())
            .then((product) => {
                setFilterProductList(product.data);
                setIsLoading(false)
            });
    }, [filterInfo]);

    const handleGoToDetail = (productID) => {
        navigate("/product/" + productID);
    };

    const handleAddToCart = (product) => {
        const newCart = addToCart(cart, product);
        setCart(newCart);
        toast.success("Thêm vào giỏ hàng thành công.", {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "dark",
        });
    };

    return (
        <>
            {isLoading &&
                <div className='loading'>
                    <div className="loader"></div>
                    <h3>Đang lấy thông tin sản phẩm....</h3>
                </div>
            }
            <div className="filter_wrap">
                <div className="filter_top">
                    <span className="filter_category">{`Đồng hồ đeo tay thương hiệu ${brandName}`}</span>
                </div>
                {filterProductList.map((product) => (
                    <div className="product" key={product._id}>
                        <img
                            onClick={() => handleGoToDetail(product._id)}
                            className="product_img"
                            src={`https://radiant-stream-23882.herokuapp.com/img/product/${product.logo}`}
                            alt={product.logo}
                        />
                        <span
                            className="product_name"
                            onClick={() => handleGoToDetail(product._id)}
                        >
                            {product.title}
                        </span>
                        <span className="product_price">
                            {product.price.toLocaleString("vi", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </span>
                        {product.amount !== 0 && (
                            <div className="icon" onClick={() => handleAddToCart(product)}>
                                <i className="fa-solid fa-cart-arrow-down"></i>
                            </div>
                        )}
                        {product.amount === 0 && (
                            <span className="out_of_stock">Hết Hàng</span>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default FilterByCategory;