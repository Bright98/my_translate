import React from 'react';

interface expandedBtnProps {
    expandedText?: string,
    icon: React.ReactNode,
    btnClick?: any,
    className?: string,
    expanded?: boolean,
}

const ExpandedButton: React.FC<expandedBtnProps> = ({
    expandedText,
    className,
    expanded = true,
    btnClick,
    icon,
}) => {
    return (
        <div className={'expandedButton ' + className} onClick={btnClick}>
            {expanded && <span>{expandedText}</span>}
            {icon}
        </div>
    )
}

export default ExpandedButton;