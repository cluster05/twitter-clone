import { useState, useEffect } from 'react';
import Tweets from '../../components/Tweets/Tweets';
import firebase from 'firebase';

const Feed = () => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {

        const database = firebase.database();

        database.ref('tweets').orderByChild('created_at').on('value', snapshot => {

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
                const tweetRevArray = tweetArray.reverse()
                setTweets(tweetRevArray);
            }
            // console.log(tweetArray);
        });

    }, [])

    return (
        <div className="text-gray-300">
            <Tweets tweets={tweets} />
        </div>
    )
}

export default Feed
