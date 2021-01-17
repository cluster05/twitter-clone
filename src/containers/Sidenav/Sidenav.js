import SidenavItem from "./SidenavItem/SidenavItem";
import { FaTwitter, FaSlackHash, FaBookmark } from 'react-icons/fa';
import { HiHome, HiBell } from 'react-icons/hi';
import Tweet from "../../components/Tweet/Tweet";
import Avatar from "../../components/Avatar/Avatar";

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
                        title={navItem.title}
                        icon={navItem.icon}
                        link={navItem.link}
                    />
                )}

                <Tweet />
            </div>
            <Avatar />
        </div>
    )
}

export default Sidenav
