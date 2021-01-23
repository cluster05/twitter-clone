import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { useUser } from '../../hooks/useUser';


const UserProfile = ({ toggleShowUserPorfile, signOut }) => {

    const user = useUser();

    return (
        <div className="w-screen h-screen absolute top-0 left-0 bg-gray-900 bg-opacity-90 z-20">
            <div className="bg-gray-800 rounded-md py-5 px-8  max-w-xl mx-auto my-10 relative">
                <div className="text-blue-400 text-4xl absolute -top-2 -right-2"
                    onClick={toggleShowUserPorfile}
                > <AiFillCloseCircle />
                </div>
                <div className="flex flex-col items-center text-gray-300">
                    <img src={user.photoURL} alt={user.name} className="rounded-full" />
                    <span className="mt-2 text-blue-400"> @{user.email.split('@')[0]} </span>
                    <span className="mt-4 text-2xl"> {user.name} </span>
                    <span className="mt-2"> {user.email} </span>
                    <button onClick={signOut} className="px-4 py-1 mt-10 rounded-md bg-red-400 text-white text-sm font-medium"> Log out </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
