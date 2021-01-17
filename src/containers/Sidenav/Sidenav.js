import SidenavItem from "./SidenavItem/SidenavItem";
import { FaTwitter, FaSlackHash, FaBookmark } from 'react-icons/fa';
import { HiHome, HiBell } from 'react-icons/hi';
import Tweet from "../../components/Tweet/Tweet";
import Avatar from "../../components/Avatar/Avatar";

const Sidenav = () => {

    const navList = [
        { title: 'twitter', icon: <FaTwitter />, link: '/' },
        { title: 'home', icon: <HiHome />, link: '/feed' },
        { title: 'trending', icon: <FaSlackHash />, link: '/trending' },
        { title: 'notification', icon: <HiBell />, link: '/notification' },
        { title: 'bootmark', icon: <FaBookmark />, link: '/bookmark' },
    ];

    return (
        <div className="w-20 py-2 flex flex-col justify-between">
            <div>
                {navList.map(navItem =>
                    <SidenavItem
                        title={navItem.title}
                        icon={navItem.icon}
                        link={navItem.link}
                    />
                )}
            </div>
            <Tweet />
            <Avatar />
        </div>
    )
}

export default Sidenav
