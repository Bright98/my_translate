import React from 'react';

interface wordCardProps {
    text?: string,
}

const WordCard: React.FC<wordCardProps> = ({ text }) => {
    return (
        <div className='wordCard'>
            <h5>{text}</h5>
        </div>
    )
}

export default WordCard;