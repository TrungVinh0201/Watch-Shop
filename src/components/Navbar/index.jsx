import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";

const navbarItem = [
    {
        id: 1,
        title: "Thương Hiệu",
        category: "",
    },
    {
        id: 2,
        title: "Đồng Hồ Nam",
        category: "nam",
    },
    {
        id: 3,
        title: "Đồng Hồ Nữ",
        category: "nu",
    },
    {
        id: 4,
        title: "Tin Tức",
    },
];
function Navbar() {
    const [brandList, setBrandList] = useState([]);
    const isLogin = localStorage.getItem("token");
    const location = useLocation();

    let navigate = useNavigate();
    const getBrandList = () => {
        fetch("https://radiant-stream-23882.herokuapp.com/api/v1/brand")
            .then((response) => response.json())
            .then((brand) => setBrandList(brand.data));
    };
    useEffect(() => {
        getBrandList();
    }, []);

    const handleFilterByCategory = (category, brand) => {
        navigate(`category?type=${category}&brand=${brand}`);
    };

    return (
        <>
            {isLogin && (
                <div className="navbar">
                    <ul className="navbar_list">
                        {navbarItem.map((item) =>
                            item.title !== "Tin Tức" ? (
                                <li className="navbar_item" key={item.id}>
                                    <span className="navbar_name">
                                        {item.title} <i className="fa-solid fa-angle-down"></i>
                                    </span>
                                    <ul className="sub_list">
                                        {brandList.map((brand) => (
                                            <li
                                                className="sub_item"
                                                key={brand._id}
                                                onClick={() =>
                                                    handleFilterByCategory(item.category, brand.title)
                                                }
                                            >
                                                {brand.title}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li
                                    className="navbar_item"
                                    key={item.id}
                                >
                                    <span className="navbar_name">{item.title}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;