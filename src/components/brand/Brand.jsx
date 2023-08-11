import React from 'react';
import './brand.css'
import { twogo, chelseahip, cnc, frabelle, psacc, tasli } from './imports';

const Brand = () => {
    return(
        <div class="golden-chain_brands section_padding">
            <div>
                <img src={twogo} />
            </div>
            <div>
                <img src={chelseahip} />
            </div>
            <div>
                <img src={cnc} />
            </div>
            <div>
                <img src={frabelle} />
            </div>
            <div>
                <img src={psacc} />
            </div>
            <div>
                <img src={tasli} />
            </div>
        </div>
    )
};

export default Brand;
