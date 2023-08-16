import React from 'react';
import './clients.css'
import { twogo, chelseahip, cnc, frabelle, psacc, tasli } from './imports';

const Clients = () => {
    return(
        <div className="golden-chain-clients">
            <p className="clients-text">Trusted by various companies</p>
            <div className="grid-container">
                <div className="grid-item"><img src={twogo} width={150} /></div>
                <div className="grid-item"><img src={chelseahip} /></div>
                <div className="grid-item"><img src={cnc} /></div>
                <div className="grid-item"><img src={frabelle} /></div>
                <div className="grid-item"><img src={psacc} /></div>
                <div className="grid-item"><img src={tasli} /></div>
            </div>
        </div>
    )
};

export default Clients;
