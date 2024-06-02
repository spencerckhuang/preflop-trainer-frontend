"use client";

import React, { useState } from 'react';

import './bigBlindLabel.css'
import { positions, PositionLocation } from '../labelPositions';

const BigBlindLabel = () => {
    const [currentPosition, setCurrentPosition] = useState<PositionLocation>('player');

    return (
        <div 
            className="bb-label-container"
            style={{
                bottom: positions[currentPosition].bottom,
                left: positions[currentPosition].left
            }}
        >
            <h2 className="bb-label-text">BB</h2>
        </div>
    );
}

export default BigBlindLabel;