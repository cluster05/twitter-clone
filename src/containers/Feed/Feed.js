import axios from 'axios';
import { useState, useEffect } from 'react';
import Tweets from '../../components/Tweets/Tweets';
import firebase from 'firebase';

const Feed = () => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {

        const database = firebase.database();

        database.ref('/tweets').on('value', snapshot => {

            const tweetArray = [];
            const tweetsResponse = snapshot.val();

            setTweets([]);

            if (tweetsResponse) {
                Object.keys(tweetsResponse).forEach(key => {
                    const tweet = {
                        id: key,
                        ...tweetsResponse[key]
                    }
                    tweetArray.push(tweet)
                });
                setTweets(tweetArray);
            }
            console.log(tweetArray);
        });

    }, [])

    return (
        <div className="text-white">
            <Tweets tweets={tweets} />
        </div>
    )
}

export default Feed
