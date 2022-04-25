import React from 'react';
import { useNavigate } from "react-router-dom";

function DetailComment(props) {
    let navigate = useNavigate();
    const isLogin = localStorage.getItem('token')
    const handleNavigateToLogin = () => {
        navigate('/');
        localStorage?.removeItem('tokem')
    }
    return (
        <div className='comment'>
            {isLogin ? <>
            <h3 className='please'>Vui lòng để lại đánh giá của bạn</h3>
            <textarea className='text_area' name="" id="" cols="30" rows="10"></textarea>
            <button className='btn comment_btn'>Gửi Ngay</button>
            </> : 
                 <>
                 <span className='comment_title'>Vui lòng đăng nhập để có thể để lại bình luận.</span>
                 <span className='comment_res'>Đăng nhập để bình luận sản phẩm.</span>
                 <button className='btn comment_btn' onClick={handleNavigateToLogin}>Đăng Nhập</button>
                 </>
            }
       
        </div>
    );
}

export default DetailComment;