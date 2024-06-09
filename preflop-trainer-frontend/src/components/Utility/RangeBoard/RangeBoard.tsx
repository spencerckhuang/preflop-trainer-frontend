import React from 'react';
import RangeRow from '../RangeRow/RangeRow';

import './rangeBoard.css'

const RangeBoard = () => {
    const rangeRows = [];

    const getCurrentAction = () => {
        return 'raise';
    }

    for (let i = 13; i >= 2; i--) {
        rangeRows.push(<RangeRow
            row={i}
            getCurrentAction={getCurrentAction}
        />);
    }

    return (
        <div
            className="range-board-container"
        >

            {rangeRows}

        </div>
    );
}

export default RangeBoard;