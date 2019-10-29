import React from 'react'
import { Link } from 'react-router-dom'

export const SideOpenedMenuItem = ({ children, sourceIcon, redirectTo, selected }) => {
    return (
        <li className={selected ? 'selected' : ''}>
            <Link to={redirectTo}>
                <img className="menu-icon" src={sourceIcon} alt="menu-icon"/>
                <div>
                    {children}
                </div>
            </Link>
        </li>
    )
}

export const SideClosedMenuItem = ({ sourceIcon, redirectTo }) => {
    return (
        <li>
            <Link to={redirectTo}>
                <img src={sourceIcon} width="50px" height="50px" alt="menu-icon"/>
            </Link>
        </li>
    )
}
