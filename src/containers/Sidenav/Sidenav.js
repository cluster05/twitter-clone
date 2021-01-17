import SidenavItem from "./SidenavItem/SidenavItem";
import { FaTwitter, FaSlackHash, FaBookmark } from 'react-icons/fa';
import { HiHome, HiBell } from 'react-icons/hi';

const Sidenav = () => {


    const navList = [
        { title: 'twitter', icon: <FaTwitter />, link: '/' },
        { title: 'home', icon: <HiHome />, link: '/feed' },
        { title: 'treding', icon: <FaSlackHash />, link: '/treding' },
        { title: 'notification', icon: <HiBell />, link: '/notification' },
        { title: 'bootmark', icon: <FaBookmark />, link: '/bookmark' },
    ];

    return (
        <div className="w-20 py-3 flex flex-col justify-between">
            <div>
                {navList.map(navItem =>
                    <SidenavItem
                        title={navItem.title}
                        icon={navItem.icon}
                        link={navItem.link}
                    />
                )}
            </div>
            <div className="m-2 p-3">
                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="user avatar" />
            </div>
        </div>
    )
}

export default Sidenav
