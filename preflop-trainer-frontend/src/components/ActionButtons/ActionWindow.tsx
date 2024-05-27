import React from 'react'
import './actionWindow.css'

import CallButton from './CallButton/CallButton';
import FoldButton from './FoldButton/FoldButton';
import RaiseButton from './RaiseButton/RaiseButton';

const ActionWindow = () => {
    return (
        <div className="container">
            <FoldButton/>
            <CallButton/>
            <RaiseButton/>
            
        </div>
    );
}

export default ActionWindow