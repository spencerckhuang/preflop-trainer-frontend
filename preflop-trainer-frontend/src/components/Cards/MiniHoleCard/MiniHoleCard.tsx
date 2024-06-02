import React from 'react';
import './miniHoleCard.css';

interface MiniHoleCardProps {
    xPos: string;
    yPos: string;
}

const MiniHoleCard: React.FC<MiniHoleCardProps> = ({ xPos, yPos }) => {
    return (
        <div
            className="miniholecard-container"
            style={{
                left: xPos,
                bottom: yPos
            }}
        >

        </div>
    );

}

export default MiniHoleCard;