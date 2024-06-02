import React from 'react';

import './holeCard.css';

interface HoleCardProps {
    xPos: string;
    yPos: string;
    rank?: string;
    suit?: string;
}


const HoleCard: React.FC<HoleCardProps> = ({ xPos, yPos, rank = 'A', suit = 's' }) => {
    return (
        <div
            className="holecard-container"
            style={{
                left: xPos,
                bottom: yPos
            }}
        >
            <h1>{rank}{suit}</h1>

        </div>
    );

}

export default HoleCard;