import React from 'react';
import './style.css'


function DetailDesc({ descContent }) {
    return (
        <div className='desc'>
            <h3>{`Thông Số Kỹ Thuật Đồng Hồ ${descContent?.title}`}</h3>
            <ul className='desc_content'>
                <div className="desc_list"><li> <span className='desc_item'>Thương Hiệu:</span>{descContent?.brand || 'Không có.'}</li>
                    <li> <span className='desc_item'>Giới Tính:</span>{descContent?.type || 'Không có.'}</li>
                    <li> <span className='desc_item'>Loại Kính:</span>{descContent?.describe?.loaikinh || 'Không có.'}</li>
                    <li> <span className='desc_item'>Máy:</span>{descContent?.describe?.may || 'Không có.'}</li>
                    <li> <span className='desc_item'>Chất Liệu Dây:</span>{descContent?.describe?.chatlieuday || 'Không có.'}</li>
                    <li> <span className='desc_item'>Màu Mặt số:</span>{descContent?.describe?.maumatso || 'Không có.'}</li></div>
                <div className="desc_list">
                    <li> <span className='desc_item'>Đường Kính:</span>{descContent?.describe?.duongkinh || 'Không có.'}</li>
                    <li> <span className='desc_item'>Độ Dày:</span>{descContent?.describe?.doday || 'Không có.'}</li>
                    <li> <span className='desc_item'>Màu Dây:</span>{descContent?.describe?.mauday || 'Không có.'}</li>
                    <li> <span className='desc_item'>Niềng:</span>{descContent?.describe?.nieng || 'Không có.'}</li>
                    <li> <span className='desc_item'>Chịu Nước:</span>{descContent?.describe?.chiunuoc || 'Không có.'}</li>
                    <li> <span className='desc_item'>Chức Năng:</span>{descContent?.describe?.chucnang || 'Không có.'}</li>
                </div>
            </ul>
        </div>
    );
}

export default DetailDesc;