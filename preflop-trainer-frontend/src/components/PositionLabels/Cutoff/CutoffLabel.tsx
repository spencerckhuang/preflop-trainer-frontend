"use client";

import React, { useState } from 'react';

import './cutoffLabel.css'
import { positions, PositionLocation } from '../labelPositions';

const CutoffLabel = () => {
    const [currentPosition, setCurrentPosition] = useState<PositionLocation>('seat3');

    return (
        <div 
            className="co-label-container"
            style={{
                bottom: positions[currentPosition].bottom,
                left: positions[currentPosition].left
            }}
        >
            <h2 className="co-label-text">CO</h2>
        </div>
    );
}

export default CutoffLabel;