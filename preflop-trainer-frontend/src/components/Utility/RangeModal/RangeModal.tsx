import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './rangeModal.css';

interface RangeModalProps {
    clickOutHandler: Function;
}

const RangeModal: React.FC<RangeModalProps> = ({ clickOutHandler }) => {
    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                clickOutHandler();
            }}
        >
            <div
                className='range-modal-container'
            >

            </div>
        </OutsideClickHandler>
        
    );

}

export default RangeModal;