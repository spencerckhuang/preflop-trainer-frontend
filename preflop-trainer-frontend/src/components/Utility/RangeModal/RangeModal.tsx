import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './rangeModal.css';
import RangeBoard from '../RangeBoard/RangeBoard';

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

                <div
                    style={{
                        width: '20%',
                        border: '2px solid purple'
                    }}
                >

                </div>
                

                <RangeBoard/>

            </div>

        </OutsideClickHandler>
        
    );

}

export default RangeModal;