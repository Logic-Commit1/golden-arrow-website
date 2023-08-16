import React from 'react';
import './faqs.css'

const FAQs = () => {
    return(
        <div className="faqs-section">
            <p className="faqs-header">Frequently Asked Questions (FAQS)</p>
            <div className="pops">
                <div className="card pop">
                    <p className="title">What do we provide?</p>                    
                    <span><i className="fa-solid fa-plus"></i></span>
                    <div className="content">Golden Arrow Trading presents a range of marine machinery, available in both brand new and surplus options, all at highly competitive prices. Additionally, our services encompass installations and more.</div>
                </div>
                <div className="card pop">
                    <p className="title">How to get in touch?</p>
                    <span><i className="fa-solid fa-plus"></i></span>
                    <div className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris eros, facilisis sit amet iaculis sollicitudin, consequat non lacus. </div>
                </div>
                <div className="card pop">
                    <p className="title">Where are we located?</p>
                    <span><i className="fa-solid fa-plus"></i></span>
                    <div className="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris eros, facilisis sit amet iaculis sollicitudin, consequat non lacus. </div>
                </div>
            </div>
        </div>
    )
};

export default FAQs;
