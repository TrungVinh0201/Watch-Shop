import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DetailComment from './DetailComment';
import DetailDesc from './DetailDesc';
import InsurancePolicy from './InsurancePolicy';
import SimilarProduct from './SimilarProduct';
import './style.css';

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
    const [activeID , setActiveID] = useState(1)

    const handleClickTag = (name,tabID) => {
        setTabActive(name)
        setActiveID(tabID)
    }

    return (
       <>
        <div className='desc_wrap'>
            <div className="tab">
                {tabs.map((tab) => (
                    <button key={tab.id} className={`btn_tab ${activeID === tab.id ? 'active' : ''}`} onClick={() => handleClickTag(tab.name, tab.id)}>{tab.title}</button>
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
        <SimilarProduct similarProduct = {productDesc}/>
       </>
    );
}

export default DetailInfo;