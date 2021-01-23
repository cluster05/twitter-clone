import { useState } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar"
import Tweets from './../../components/Tweets/Tweets';
import firebase from 'firebase';

const Trending = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [tweets, setTweets] = useState([]);


    const searchTag = () => {

        if (searchTerm.length === 0) {
            alert('Please provide the search field');
            return
        }
        const queryText = searchTerm[0] === '#' ? searchTerm : '#' + searchTerm;

        const database = firebase.database();
        database.ref('tweets')
            .orderByChild('tag')
            .startAt(queryText)
            .endAt(queryText + '\uf8ff')
            .on('value', snapshot => {

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
    }

    return (
        <div className="text-gray-400">
            <SearchBar
                changeSearchTerm={(event) => { setSearchTerm(event.target.value) }}
                searchTerm={searchTerm}
                searchTag={searchTag}
            />
            <Tweets tweets={tweets} loadingMessage={'type tag to search ...'} />
        </div>
    )
}

export default Trending
