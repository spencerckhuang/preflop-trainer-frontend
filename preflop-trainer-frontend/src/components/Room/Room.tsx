import React from 'react';
import './room.css';

import Table from '../Table/Table'
import ActionWindow from '../ActionButtons/ActionWindow'

const Room = () => {
    return (
        <div className="background">
            <div className="room">
                <Table />
                <ActionWindow />
            </div>
        </div>
        
    );
}

export default Room;