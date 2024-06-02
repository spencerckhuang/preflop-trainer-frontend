import React from 'react';
import './callButton.css'

interface CallButtonProps {
    processAction: Function;
}

const CallButton: React.FC<CallButtonProps> = ({ processAction }) => {
    return (
        <div 
            className="call-container"
            onClick={() => {processAction('call')}}
        >
            <h1 className="call-button-text">Call</h1>
        </div>
    );
}

export default CallButton;