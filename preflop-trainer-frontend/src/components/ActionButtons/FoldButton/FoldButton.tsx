import React from 'react';
import './foldButton.css'

interface FoldButtonProps {
    processAction: Function;
}

const FoldButton: React.FC<FoldButtonProps> = ({ processAction }) => {
    return (
        <div 
            className="fold-container"
            onClick={() => {processAction('fold')}}
        >
            <h1 className="fold-button-text">Fold</h1>
        </div>
    );
}

export default FoldButton;