import React from 'react'
import { NavLink } from 'react-router-dom';

const SidenavItem = ({ title, icon, link }) => {

    const classList = ["m-3", "p-3", "text-4xl", "text-gray-600", "hover:text-gray-400"]

    if (title === 'twitter') {
        classList.pop();
        classList.pop();
        classList.push('text-blue-400')
    }

    return (
        <NavLink to={link}>
            <div className={classList.join(' ')}>
                {icon}
            </div>
        </NavLink>
    )
}

export default SidenavItem
