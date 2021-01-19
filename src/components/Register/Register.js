import React from 'react'
import GoogleIcon from './search.svg';

const Register = ({ goWithGoogle }) => {
    return (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-50">
            <div>
                <div className="bg-gray-900 opacity-100 rounded-md px-5 py-2 max-w-lg mx-auto my-10 flex justify-center items-center">
                    <button onClick={goWithGoogle} className="my-10 rounded-md bg-blue-600 hover:bg-blue-700 shadow flex justify-center items-center">
                        <span className="bg-white p-2 rounded">
                            <img src={GoogleIcon} className="w-8 h-8" alt="register with google" />
                        </span>
                        <span className="mx-4 tracking-wider  text-white">Register With Google</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Register
