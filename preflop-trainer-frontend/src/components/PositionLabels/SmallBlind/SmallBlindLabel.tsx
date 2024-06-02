"use client";

import React, { useState } from 'react';

import './smallBlindLabel.css'
import { positions, PositionLocation } from '../labelPositions';

const SmallBlindLabel = () => {
    const [currentPosition, setCurrentPosition] = useState<PositionLocation>('seat5');

    return (
        <div 
            className="sb-label-container"
            style={{
                bottom: positions[currentPosition].bottom,
                left: positions[currentPosition].left
            }}
        >
            <h2 className="sb-label-text">SB</h2>
        </div>
    );
}

export default SmallBlindLabel;