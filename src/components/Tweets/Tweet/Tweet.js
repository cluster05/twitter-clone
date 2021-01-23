import TimePassed from './../../TimePassed/TimePassed';
import './Tweet.css';

const Tweet = ({ tweet }) => {

    const buildTweetSentence = () => {
        const tweetSentence = [];

        tweet.tweet.split(' ').forEach(word => {
            if (word[0] === '#') {
                tweetSentence.push(<span className="text-blue-400 cursor-pointer"> {word} </span>);
            } else {
                tweetSentence.push(word + ' ');
            }
        });
        return tweetSentence;
    }

    return (
        <div className="m-4 p-5 max-w-xl rounded-md shadow-md bg-gray-800">
            <TimePassed created_at={tweet.created_at} />
            <div>
                {buildTweetSentence()}
            </div>
            <div className="mt-3 flex items-center">
                <img
                    className="mr-3 w-8 h-8 rounded-full"
                    src={tweet.user.photoURL}
                    alt={tweet.user.name} />
                <span className="text-blue-400 cursor-pointer relative username">
                    @{tweet.user.username}
                    <div className="absolute top-6 left-0 bg-gray-800 border border-gray-600 text-gray-300 px-3 py-5 rounded-md userInfo z-10" style={{ minWidth: 300 }}>
                        <div className=" flex flex-col items-center justify-center ">
                            <img
                                className="w-16 h-16 rounded-full"
                                src={tweet.user.photoURL}
                                alt={tweet.user.name} />
                            <span className="text-blue-400"> @{tweet.user.username} </span>
                            <span> {tweet.user.name} </span>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Tweet
