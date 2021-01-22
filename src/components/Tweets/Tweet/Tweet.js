import React from 'react';

const Tweet = ({ tweet }) => {


    const buildTweetSentence = () => {
        const tweetSentence = [];

        tweet.tweet.split(' ').forEach(word => {
            if (word[0] === '#') {
                tweetSentence.push(<span className="text-blue-400"> {word} </span>);
            } else {
                tweetSentence.push(word + ' ');
            }
        });

        return tweetSentence;
    }

    return (
        <div className="m-4 p-5 max-w-xl rounded-md shadow-md bg-gray-800">
            <div>
                {buildTweetSentence()}
            </div>
            <div className="mt-3 flex items-center">
                <img
                    className="mr-3 w-8 h-8 rounded-full"
                    src={tweet.user.photoURL}
                    alt={tweet.user.name} />
                <span className="text-blue-400"> @{tweet.user.name} </span>
            </div>
        </div>
    )
}

export default Tweet
