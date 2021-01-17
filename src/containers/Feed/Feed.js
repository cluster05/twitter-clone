import axios from 'axios';
import { useState, useEffect } from 'react';
import Tweets from '../../components/Tweets/Tweets';
const Feed = () => {

    const TWEET_URL = 'https://jsonplaceholder.typicode.com/posts';

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(TWEET_URL);
            const tweetsResponse = response.data;
            setTweets(tweetsResponse);
        }
        fetchData();
    }, [])

    return (
        <div className="text-white">
            <Tweets tweets={tweets} />
        </div>
    )
}

export default Feed
