import React from 'react';
import { useUser } from '../../hooks/useUser';

const Avatar = ({ toggleShowUserPorfile }) => {

    const user = useUser();

    return (
        <div className="m-3 p-3" onClick={toggleShowUserPorfile}>
            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="user avatar" />
        </div>
    )
}

export default Avatar
