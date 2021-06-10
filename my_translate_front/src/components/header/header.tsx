import React from 'react';
import { Archive, ChevronRight } from 'react-feather';
import { ExpandedButton } from '..';

interface headerProps {
    title?: string,
    actionClick?: any,
    leadingClick?: any,
    action?: boolean,
    leading?: boolean,
}

const Header: React.FC<headerProps> = ({
    actionClick,
    leadingClick,
    title,
    action = true,
    leading = true,
}) => {
    return (
        <div className='header'>
            <div className='header__titleLeading'>
                {leading &&
                    <ExpandedButton
                        btnClick={leadingClick}
                        icon={<ChevronRight />}
                        className='header__leading'
                        expanded={false}
                    />
                }
                <h4>{title}</h4>
            </div>
            {action &&
                <ExpandedButton
                    icon={<Archive />}
                    expandedText="جعبه لایتنر"
                    btnClick={actionClick}
                    className='header__actions'
                />
            }
        </div>
    )
}

export default Header;