'use client';

import React, { useState, useEffect } from 'react';
import './room.css';

import Table from '../Table/Table'
import ActionWindow from '../ActionButtons/ActionWindow'
import HoleCard from '../Cards/HoleCard/HoleCard'
import MiniHoleCard from '../Cards/MiniHoleCard/MiniHoleCard'

import SettingsIcon from '@mui/icons-material/Settings';



import cardPositions from './cardPositions';
import miniCardPositions from './miniCardPositions';
import IconButton from '@mui/material/IconButton';
import RangeModal from '../Utility/RangeModal/RangeModal';


const Room = () => {
    const [settingsModal, toggleSettingsModal] = useState(false);

    const [activeSeats, setActiveSeats] = useState([false, false, false, false, true]);

    const [firstCardRank, setFirstCardRank] = useState('');
    const [firstCardSuit, setFirstCardSuit] = useState('');
    const [secondCardRank, setSecondCardRank] = useState('');
    const [secondCardSuit, setSecondCardSuit] = useState('');

    const getRandomIndex= (min: number, max: number) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const generateTwoCards = () => {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['h', 'd', 'c', 's']; // h: hearts, d: diamonds, c: clubs, s: spades

        setFirstCardRank(ranks[getRandomIndex(0, ranks.length)]);
        const firstSuitIndex = getRandomIndex(0, suits.length)
        setFirstCardSuit(suits[firstSuitIndex]);
        setSecondCardRank(ranks[getRandomIndex(0, ranks.length)])
        
        // Prevent duplicate cards
        if (firstCardRank === secondCardRank) {
            suits.splice(firstSuitIndex, 1);
        }

        const secondSuit = getRandomIndex(0, suits.length);
        setSecondCardSuit(suits[secondSuit]);

        // console.log("generate two cards ran");
    }

    // useEffect(() => {
    //     refreshCards();
    // }, []); // Empty dependency array ensures this effect runs only once on component mount


    const processAction = (action: string) => {
        console.log(`User chose '${action}'`);
        generateTwoCards();
    }

    const showRangeModal = () => {

        toggleSettingsModal(true);
        
    }

    const hideRangeModal = () => {
    
        toggleSettingsModal(false);
     
    }


    
    return (
        <>
            {settingsModal && <RangeModal clickOutHandler={hideRangeModal}/>}

            <div 
                className="background"
                style={{
                    filter: settingsModal ? 'brightness(50%)' : 'brightness(100%)'
                }}
            >

                <div className="room">
                    <IconButton
                        onClick={() => showRangeModal()}
                        sx={{ 
                        position: 'fixed',
                        top: 0, 
                        left: 0, 
                        width: 70,
                        height: 70, 
                        '&:hover': {
                            '& .MuiSvgIcon-root': { 
                                color: 'white', 
                            }
                        },
                        zIndex: 1
                        }}
                    >
                        <SettingsIcon 
                            sx={{ 
                                fontSize: 40, // Adjust icon size
                                color: 'black' // Initial icon color
                            }} 
                        />
                    </IconButton>
                    
                    

                    <Table />
                    <ActionWindow 
                        processAction={processAction}
                    />
                    <HoleCard
                        xPos={cardPositions.first.xPos}
                        yPos={cardPositions.first.yPos}
                        rank={firstCardRank}
                        suit={firstCardSuit}
                    />
                    <HoleCard
                        xPos={cardPositions.second.xPos}
                        yPos={cardPositions.second.yPos}
                        rank={secondCardRank}
                        suit={secondCardSuit}
                    />

                    {
                        activeSeats.map((status, index) => (
                            status && <>
                                <MiniHoleCard
                                    xPos={miniCardPositions[`seat${index+1}` as keyof typeof miniCardPositions].card1.xPos}
                                    yPos={miniCardPositions[`seat${index+1}` as keyof typeof miniCardPositions].card1.yPos}
                                />
                                <MiniHoleCard
                                    xPos={miniCardPositions[`seat${index+1}` as keyof typeof miniCardPositions].card2.xPos}
                                    yPos={miniCardPositions[`seat${index+1}` as keyof typeof miniCardPositions].card2.yPos}
                                />
                            </>
                        ))
                    }
                </div>

            </div>
        </>
        
        
    );
}

export default Room;