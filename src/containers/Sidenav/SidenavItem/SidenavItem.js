import React from 'react'
import { Link } from 'react-router-dom';
const SidenavItem = ({ title, icon, link }) => {

    const classList = ["m-3", "p-3", "text-4xl", "text-gray-600", "hover:text-gray-400"]

    if (title === 'twitter') {
        classList.pop();
        classList.pop();
        classList.push('text-blue-400')
    }

    return (
        <Link to={link}>
            <div className={classList.join(' ')}>
                {icon}
            </div>
        </Link>
    )
}

export default SidenavItem
