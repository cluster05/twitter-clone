import { useContext } from 'react';
import { RiQuillPenFill } from 'react-icons/ri';
import { TweetContext } from './../../../Context/TweetContext';

const CreateTweet = () => {

    const tweetContext = useContext(TweetContext);

    return (
        <div className="m-3 p-3 text-3xl" onClick={tweetContext.changeCreateTweet}>
            <div className="w-12 h-12 bg-blue-400 text-gray-100 rounded-full flex justify-center items-center">
                <RiQuillPenFill />
            </div>
        </div>
    )
}

export default CreateTweet
