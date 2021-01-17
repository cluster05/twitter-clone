import React from 'react'

const SidenavItem = ({ title, icon, link }) => {

    const classList = ["m-2", "p-3", "text-xl", "text-gray-600", "hover:text-gray-400"]

    if (title === 'twitter') {
        classList.pop();
        classList.pop();
        classList.push('text-blue-400')
    }

    return (
        <div className={classList.join(' ')}>
            {icon}
        </div>
    )
}

export default SidenavItem
