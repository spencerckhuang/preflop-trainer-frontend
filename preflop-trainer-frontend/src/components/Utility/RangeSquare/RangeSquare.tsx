import React, { useEffect, useState } from 'react';

import './rangeSquare.css';

interface RangeSquareProps {
    row: number;
    col: number;
    getCurrentAction: Function;
}

const RangeSquare:React.FC<RangeSquareProps> = ( {row, col, getCurrentAction} ) => {

    const [action, setAction] = useState<'raise' | 'call' | 'fold'>('fold');

    const convertLocToCardNotation = (row: number, col: number) => {
        const letterMapping = ['T', 'J', 'Q', 'K', 'A'];

        const transformedRow = row >= 10 ? letterMapping[row - 9] : row.toString();
        const transformedCol = col >= 10 ? letterMapping[col - 9] : col.toString();

        return "" + (row > col ? ('' + transformedRow + transformedCol) : ('' + transformedCol + transformedRow)) + (row !== col ? (row > col ? 's' : 'o') : '');

    }

    const letterConversion = convertLocToCardNotation(row, col);

    const colorMapping: Record<string, string> = {
        'raise': '#eb4034',
        'call' : '#948382',
        'fold' : '#ffffff',
    }

    const handleOnClick = () => {
        console.log(`row ${row} col ${col} clicked`);

        setAction(getCurrentAction());
    }

    return (
        <div
            className='range-square-container'
            onClick={() => handleOnClick()}
            style={{
                backgroundColor:`${colorMapping[action]}`,
            }}
        >
            <h4 className='range-square-text'>
                {letterConversion}
            </h4>
        </div>
    );
}

export default RangeSquare;