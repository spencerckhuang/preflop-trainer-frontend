"use client";

import React, { useState } from 'react';

import './buttonLabel.css'
import { positions, PositionLocation } from '../labelPositions';

const ButtonLabel = () => {
    const [currentPosition, setCurrentPosition] = useState<PositionLocation>('seat4');

    return (
        <div 
            className="btn-label-container"
            style={{
                bottom: positions[currentPosition].bottom,
                left: positions[currentPosition].left
            }}
        >
            <h2 className="btn-label-text">BTN</h2>
        </div>
    );
}

export default ButtonLabel;