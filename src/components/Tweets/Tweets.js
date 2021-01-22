import React from 'react'
import Tweet from './Tweet/Tweet'

const Tweets = ({ tweets }) => {

    return (
        <div>
            {
                tweets.length > 0 ?
                    tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />) :
                    <div className="m-4 p-5 max-w-2xl font-semibold text-2xl rounded-md shadow-md bg-gray-800">
                        Please wait. fetching data ...
                    </div>
            }
        </div>
    )
}

export default Tweets
