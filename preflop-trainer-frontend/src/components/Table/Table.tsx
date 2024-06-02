import React from 'react';
import './table.css'

import BigBlindLabel from '../PositionLabels/BigBlind/BigBlindLabel';
import ButtonLabel from '../PositionLabels/Button/ButtonLabel';
import CutoffLabel from '../PositionLabels/Cutoff/CutoffLabel';
import HijackLabel from '../PositionLabels/Hijack/HijackLabel';
import LojackLabel from '../PositionLabels/Lojack/LojackLabel';
import SmallBlindLabel from '../PositionLabels/SmallBlind/SmallBlindLabel';

const Table = () => {
    return (
        <div className="table">
            <svg className="table-svg" width="100vw" height="75vh">
                <rect className="table-rect" x="15vw" y = "15vh" width="70vw" height="60vh" rx="200" ry="200"/>
            </svg>

            <BigBlindLabel/>
            <ButtonLabel/>
            <CutoffLabel/>
            <HijackLabel/>
            <LojackLabel/>
            <SmallBlindLabel/>

        </div>
    );
}

export default Table; 