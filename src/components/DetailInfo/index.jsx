import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import DetailDesc from './DetailDesc';
import InsurancePolicy from './InsurancePolicy';
import DetailComment from './DetailComment';

DetailInfo.propTypes = {
    productDesc: PropTypes.object
};
const tabs = [
    {
        id : 1,
        name : 'desc',
        title :'Mô Tả',
    },
    {
        id : 2,
        name : 'insurance',
        title :'Chính Sách Bảo Hành'
    },
    {
        id : 3,
        name : 'comment',
        title :'Bình Luận'
    },
]

function DetailInfo({productDesc}) {
    const [tabActive , setTabActive] = useState('desc')
    const handleClickTag = (name) => {
        setTabActive(name)
    }

    console.log(tabActive);
    return (
        <div className='desc_wrap'>
            <div className="tab">
                {tabs.map((tab) => (
                    <button key={tab.id} className='btn_tab' onClick={() => handleClickTag(tab.name)}>{tab.title}</button>
                ))}
            </div>
            {tabActive === 'desc' && 
            <div className="tab_content tab_content_desc">
                <DetailDesc descContent = {productDesc}/>    
            </div>}
            {tabActive === 'insurance' && <div className="tab_content tab_content_desc">
                <InsurancePolicy insuranceContent = {productDesc}/>
            </div>}
            {tabActive === 'comment' && <div className="tab_content tab_content_desc">
                <DetailComment commentContent = {productDesc}/>
            </div>}
        </div>
    );
}

export default DetailInfo;