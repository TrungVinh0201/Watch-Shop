import React from 'react';
import DOMPurify from 'dompurify';

function InsurancePolicy({insuranceContent}) {
    const safeDescription = DOMPurify.sanitize(insuranceContent.warrantyPolicy)
    return (
        <div style={{marginTop : '30px' ,padding : '5px 20px'}} dangerouslySetInnerHTML={{ __html: safeDescription }}>
        </div>
    );
}

export default InsurancePolicy;