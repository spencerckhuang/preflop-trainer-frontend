"use client";

import React, { useState } from 'react';

import './lojackLabel.css'
import { positions, PositionLocation } from '../labelPositions';

const LojackLabel = () => {
    const [currentPosition, setCurrentPosition] = useState<PositionLocation>('seat1');

    return (
        <div 
            className="lj-label-container"
            style={{
                bottom: positions[currentPosition].bottom,
                left: positions[currentPosition].left
            }}
        >
            <h2 className="lj-label-text">LJ</h2>
        </div>
    );
}

export default LojackLabel;