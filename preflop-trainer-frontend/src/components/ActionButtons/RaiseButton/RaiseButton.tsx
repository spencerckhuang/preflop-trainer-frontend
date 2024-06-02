import React from 'react';
import './raiseButton.css'

interface RaiseButtonProps {
    processAction: Function;
}

const RaiseButton: React.FC<RaiseButtonProps> = ({ processAction }) => {
    return (
        <div 
            className="raise-container"
            onClick={() => {processAction('raise')}}
        >
            <h1 className="raise-button-text">Raise</h1>
        </div>
    );
}

export default RaiseButton;