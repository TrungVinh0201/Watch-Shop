import { React } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState } from 'recoil';
import "../../App.css";
import '../../components/ProductList/style.css';
import { productListState } from '../../State/ProductState';
import { addToCart, cartState } from '../../State/CartState';
import "./style.css";
import { useNavigate } from 'react-router-dom';


function SimilarProduct({similarProduct}) {
    const [productList] = useRecoilState(productListState)
    const [cart, setCart] = useRecoilState(cartState);
    let navigate = useNavigate();


    const listSimilarProduct = productList.filter((product) => {
        return product?.describe?.may === similarProduct?.describe?.may
    }).slice(0,3)

    const handleAddToCart = (product) => {
        const newCart = addToCart(cart, product);
        setCart(newCart);
        toast.success('Thêm vào giỏ hàng thành công.',
        {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'dark'
        })
    }

    return (
        <div className='similar_product'>
            <h3>Sản Phẩm Tương Tự</h3>
            <div className="product_list">
              {listSimilarProduct.map((product) => (
                    <div className="product">
                    <img  className='product_img' src={`https://radiant-stream-23882.herokuapp.com/img/product/${product?.logo}`} alt={product?.logo}/>
                    <span className="product_name">{product?.title}</span>
                    <span className="product_price">{product?.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                    {product?.amount !== 0 && <div className="icon"onClick={() => handleAddToCart(product)} ><i className="fa-solid fa-cart-arrow-down" ></i></div>}
                    {product?.amount === 0 && <span className="out_of_stock">Hết Hàng</span>}
                </div>
              ))}
            </div>
        </div>
    );
}

export default SimilarProduct;