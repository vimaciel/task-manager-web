import React from 'react'

export const SideOpenedMenuItem = ({ children, sourceIcon, redirectTo, selected }) => {
    return (
        <li className={selected ? 'selected' : ''}>
            <a href={redirectTo}>
                <img className="menu-icon" src={sourceIcon} alt="menu-icon"/>
                <div>
                    {children}
                </div>
            </a>
        </li>
    )
}

export const SideClosedMenuItem = ({ sourceIcon, redirectTo }) => {
    return (
        <li>
            <a href={redirectTo}>
                <img src={sourceIcon} width="50px" height="50px" alt="menu-icon"/>
            </a>
        </li>
    )
}
