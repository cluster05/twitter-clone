import { useState } from 'react';
import SidenavItem from "./SidenavItem/SidenavItem";
import { FaTwitter, FaSlackHash } from 'react-icons/fa';
import { HiHome, HiBell } from 'react-icons/hi';
import Avatar from "../../components/Avatar/Avatar";
import CreateTweet from "./CreateTweet/CreateTweet";
import CreateTweetBox from './CreateTweet/CreateTweetBox/CreateTweetBox';
import { TweetContext } from './../../Context/TweetContext';
import UserProfile from './../../components/UserProfile/UserProfile';

const Sidenav = ({ signOut }) => {

    const [createTweet, setCreateTweet] = useState(false);
    const [showUserPorfile, setShowUserPorfile] = useState(false);

    const navList = [
        { title: 'twitter', icon: <FaTwitter />, link: '' },
        { title: 'feed', icon: <HiHome />, link: '/feed' },
        { title: 'trending', icon: <FaSlackHash />, link: '/trending' },
        { title: 'notification', icon: <HiBell />, link: '/notification' },
    ];



    return (
        <TweetContext.Provider value={{ changeCreateTweet: () => setCreateTweet(!createTweet) }}>
            { createTweet ?
                <CreateTweetBox /> :
                null
            }
            { showUserPorfile ?
                <UserProfile signOut={signOut} toggleShowUserPorfile={() => setShowUserPorfile(!showUserPorfile)} /> :
                null
            }
            <div className="w-16 md:w-24 lg:w-32 flex flex-col justify-between">
                <div>
                    {navList.map(navItem =>
                        <SidenavItem
                            key={navItem.title}
                            title={navItem.title}
                            icon={navItem.icon}
                            link={navItem.link}
                        />
                    )}

                    <CreateTweet />
                </div>
                <Avatar toggleShowUserPorfile={() => setShowUserPorfile(!showUserPorfile)} />
            </div>
        </TweetContext.Provider>
    )
}

export default Sidenav
