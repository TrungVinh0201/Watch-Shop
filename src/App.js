import { useEffect } from "react";
  import { Route, Routes, useLocation } from "react-router-dom";
  import "./App.css";
  import BackTop from "./components/BackTop";
  import CartInfo from "./components/CartInfo";
  import Checkout from "./components/Checkout";
  import FilterByCategory from "./components/FilterByCategory";
  import Footer from "./components/Footer";
  import FormLogin from "./components/FormLogin";
  import Header from "./components/Header";
  import Navbar from "./components/Navbar";
  import Detail from "./Pages/Detail";
  import HomePage from "./Pages/Home";
  import Post from "./Pages/Post";

  function App() {
    const isLogin = Boolean(localStorage.getItem("token"));
    const location = useLocation();

    
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
          <Route path="category/*" element={<FilterByCategory />} />
        </Routes>
        <Footer />
        <BackTop />
      </>
    );
  }

  export default App;