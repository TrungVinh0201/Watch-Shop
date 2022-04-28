import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import Detail from "./Pages/Detail";
import FormLogin from "./components/FormLogin";
import CartInfo from "./components/CartInfo";
import Post from "./Pages/Post";
import Checkout from "./components/Checkout";
import { useEffect } from "react";

function App() {
  const isLogin = Boolean(localStorage.getItem("token"));
  const location = useLocation();

  // always top...
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/product" element={<HomePage />} />
        <Route path="/cart" element={<CartInfo />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="product/:id" element={<Detail />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
