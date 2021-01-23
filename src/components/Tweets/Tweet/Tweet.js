import TimePassed from './TimePassed';
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

    const buildUserNameFromMail = () => {
        return tweet.user.email.split('@')[0];
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
                    @{buildUserNameFromMail()}
                    <div className="z-10 absolute top-6 left-0 bg-gray-800 border border-gray-600 text-gray-300 px-3 py-5 rounded-md min-w-max max-w-lg userInfo">
                        <div className=" flex flex-col items-center justify-center">
                            <img
                                className="w-16 h-16 rounded-full"
                                src={tweet.user.photoURL}
                                alt={tweet.user.name} />
                            <span> {tweet.user.name} </span>
                            <span> {tweet.user.email} </span>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default Tweet
