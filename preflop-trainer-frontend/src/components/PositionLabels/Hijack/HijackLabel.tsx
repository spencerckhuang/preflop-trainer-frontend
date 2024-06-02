"use client";

import React, { useState } from 'react';

import './hijackLabel.css'
import { positions, PositionLocation } from '../labelPositions';

const HijackLabel = () => {
    const [currentPosition, setCurrentPosition] = useState<PositionLocation>('seat2');

    return (
        <div 
            className="hj-label-container"
            style={{
                bottom: positions[currentPosition].bottom,
                left: positions[currentPosition].left
            }}
        >
            <h2 className="hj-label-text">HJ</h2>
        </div>
    );
}

export default HijackLabel;