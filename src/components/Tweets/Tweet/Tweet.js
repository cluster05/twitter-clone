import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const GET_USER_URL = 'https://jsonplaceholder.typicode.com/users';

const Tweet = ({ tweet }) => {

    const [user, setUser] = useState()

    useEffect(() => {

        const fetchData = async () => {
            const response = await axios.get(`${GET_USER_URL + '/' + tweet.userId}`);
            setUser({
                username: response.data.username,
                name: response.data.name
            });
        }

        fetchData();

    }, [])


    return (
        <div className="m-4 p-5 max-w-xl rounded-md shadow-md bg-gray-800">
            <div>
                <span> {tweet.title}</span>
                <br />
                <span>{tweet.body}</span>
            </div>
            { user ?
                <div className="py-2 flex flex-col">
                    <span className="text-blue-400"> @{user.username} </span>
                    <span className="font-medium text-lg tracking-wider"> {user.name} </span>
                </div> :
                null
            }
        </div>
    )
}

export default Tweet
