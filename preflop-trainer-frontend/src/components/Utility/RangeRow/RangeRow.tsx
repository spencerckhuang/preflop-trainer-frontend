import React from 'react'

import './rangeRow.css';
import RangeSquare from '../RangeSquare/RangeSquare';

interface RangeRowProps {
    row: number;
    getCurrentAction: Function;
}

const RangeRow:React.FC<RangeRowProps> = ({ row, getCurrentAction }) => {

    const rangeSquares = [];

    for (let i = 13; i >= 2; i--) {
        rangeSquares.push(<RangeSquare
            row={row}
            col={i}
            getCurrentAction={getCurrentAction}
        />);
    }

    return (
        <div
            className="range-row-container"
        >
            
            {rangeSquares}

        </div>
    );
}

export default RangeRow;