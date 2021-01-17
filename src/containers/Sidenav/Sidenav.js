import SidenavItem from "./SidenavItem/SidenavItem";
import { FaTwitter, FaSlackHash, FaBookmark } from 'react-icons/fa';
import { HiHome, HiBell } from 'react-icons/hi';
import Avatar from "../../components/Avatar/Avatar";
import CreateTweet from "./CreateTweet/CreateTweet";

const Sidenav = () => {

    const navList = [
        { title: 'twitter', icon: <FaTwitter />, link: '/' },
        { title: 'feed', icon: <HiHome />, link: '/feed' },
        { title: 'trending', icon: <FaSlackHash />, link: '/trending' },
        { title: 'notification', icon: <HiBell />, link: '/notification' },
        { title: 'bootmark', icon: <FaBookmark />, link: '/bookmark' },
    ];

    return (
        <div className="w-32 flex flex-col justify-between">
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
            <Avatar />
        </div>
    )
}

export default Sidenav
