import React from 'react'
import './actionWindow.css'

import CallButton from './CallButton/CallButton';
import FoldButton from './FoldButton/FoldButton';
import RaiseButton from './RaiseButton/RaiseButton';


interface ActionWindowProps {
    processAction: Function;
}

const ActionWindow: React.FC<ActionWindowProps> = ({ processAction }) => {
    return (
        <div className="container">
            <FoldButton
                processAction={processAction}
            />
            <CallButton
                processAction={processAction}
            />
            <RaiseButton
                processAction={processAction}
            />
            
        </div>
    );
}

export default ActionWindow