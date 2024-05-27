import React from 'react';
import './table.css'

const Table = () => {
    return (
        <div className="table">
            <svg className="table-svg" width="100vw" height="75vh">
                <rect className="table-rect" x="15vw" y = "15vh" width="70vw" height="60vh" rx="200" ry="200"/>
            </svg>
        </div>
    );
}

export default Table; 