import { useState, useContext } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { TweetContext } from "../../../../Context/TweetContext";
import { useUser } from './../../../../hooks/useUser';
import firebase from 'firebase';

const CreateTweetBox = () => {

    const [tweetText, setTweetText] = useState('');
    const tweetContext = useContext(TweetContext);
    const user = useUser();

    const saveTweet = () => {

        if (tweetText.length < 5) {
            alert('not valid text. Minimum lenght shold be greater than 4');
            return
        } else if (tweetText.length > 120) {
            alert('length is to big. Maximum lenght shold be less than 120');
            return;
        }

        const tags = [];
        tweetText.split(' ').forEach(word => {
            if (word[0] === '#') {
                tags.push(word)
            }
        });

        const payload = {
            tweet: tweetText,
            tags,
            created_at: Date.now(),
            user: {
                name: user.name,
                photoURL: user.photoURL,
                uid: user.uid,
                username: user.email.split('@')[0]
            }
        };
        const timeStamp = Date.now() + '-tweet-' + Math.floor(Math.random() * 10000000)
        firebase.database().ref('/tweets/' + timeStamp).set(payload);
        tweetContext.changeCreateTweet();
    }

    return (
        <div className="w-screen h-screen absolute top-0 left-0 bg-gray-900 bg-opacity-90 z-20">
            <div className="bg-gray-800 rounded-md py-5 px-8  max-w-lg mx-auto my-10 relative">
                <div className="text-blue-400 text-4xl absolute -top-2 -right-2"
                    onClick={tweetContext.changeCreateTweet}
                > <AiFillCloseCircle />
                </div>
                <p className="mb-2 text-xl font-medium tracking-wider text-blue-400"> Write Your Tweet  </p>
                <textarea
                    rows="3"
                    className="px-4 py-2 w-full border rounded-md bg-gray-700 text-gray-300 text-lg focus:outline-none"
                    maxLength="120"
                    placeholder="Tweet" onChange={(event) => setTweetText(event.target.value)}>

                </textarea>
                <div className="flex justify-end">
                    <button
                        onClick={saveTweet}
                        className="px-4 py-2 my-2 text-sm bg-blue-400 text-white rounded-md tracking-wider">
                        Tweet
                        </button>
                </div>
            </div>
        </div>
    )
}

export default CreateTweetBox;


