import React from 'react';
import './style.css'


function DetailDesc({descContent}) {
    return (
        <div className='desc'>
            <h3>{`Thông Số Kỹ Thuật Đồng Hồ ${descContent?.title}`}</h3>
            <ul className='desc_content'>
                <li>{`Thương Hiệu:${descContent?.brand} `}</li>
                <li>{`Giới Tính:${descContent?.type} `}</li>
                <li>{`Loại Kính:${descContent?.describe?.loaikinh} `}</li>
                <li>{`Máy:${descContent?.describe?.may} `}</li>
                <li>{`Chất Liệu Dây:${descContent?.describe?.chatlieuday} `}</li>
                <li>{`Màu Mặt số:${descContent?.describe?.maumatso} `}</li>
                <li>{`Đường Kính:${descContent?.describe?.duongkinh} `}</li>
                <li>{`Độ Dày:${descContent?.describe?.doday} `}</li>
                <li>{`Màu Dây:${descContent?.describe?.mauday} `}</li>
                <li>{`Niềng:${descContent?.describe?.nieng} `}</li>
                <li>{`Chịu Nước:${descContent?.describe?.chiunuoc} `}</li>
                <li>{`Chức Năng:${descContent?.describe?.chucnang} `}</li>
            </ul>
        </div>
    );
}

export default DetailDesc;