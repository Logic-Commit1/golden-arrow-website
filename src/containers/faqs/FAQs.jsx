import React from 'react';
import './faqs.css'

const handleClick = (e) => {
    e.target.classList.toggle('active');
}

const FAQs = () => {
    return(
        <div className="faqs-section">
            <p className="faqs-header">Frequently Asked Questions (FAQS)<div className="border"></div></p>
            <div className="pops">
                <div className="card pop" onClick={handleClick}>
                    <p className="title" data-pop-target='icon'>What products do you offer?<span><i className="fa-solid fa-plus"></i></span></p>                    
                    
                    <p className="content">GCMES presents a range of <strong>marine machinery</strong>, available in both brand new and surplus options, all at highly <strong>competitive prices.</strong>  Additionally, our services encompass installations and more.</p>
                </div>
                <div className="card pop" onClick={handleClick}>
                    <p className="title" data-pop-target='icon'>What payment methods do you accept for orders?<span><i className="fa-solid fa-plus"></i></span></p>
                    
                    <p className="content"> You can conveniently settle your orders with us through <strong>checks, bank deposits, or bank transfers.</strong> Our goal is to make the payment process as <strong>hassle-free</strong> as possible for our valued clients.</p>
                </div>
                <div className="card pop" onClick={handleClick}>
                    <p className="title" data-pop-target='icon'>Where are you located?<span><i className="fa-solid fa-plus"></i></span></p>
                    
                    <p className="content"> Visit us at: <strong> 193 M.H Del Pilar Street,Tinajeros, Malabon City, Philippines </strong></p>
                </div>
            </div>
        </div>
    )
};

export default FAQs;
