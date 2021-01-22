import React from 'react'
import GoogleIcon from './search.svg';

const Register = ({ goWithGoogle }) => {
    return (
        <div className="w-screen h-screen absolute top-0 left-0 bg-gray-900 bg-opacity-90">
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
            <div className="text-gray-300 max-w-md mx-auto text-xs p-5 border rounded">
                <ul>
                    <li className="mt-2"> Hey user , Don't worry of you Log In with Google this is just for test purpose. </li>
                    <li className="mt-2"> We Don't have any intention to sell your any of data to Third Party </li>
                </ul>
            </div>
        </div>
    )
}

export default Register
